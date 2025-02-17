import { eventHandler, setHeader } from 'h3'
import { runs } from "@trigger.dev/sdk/v3"

export default eventHandler(async (event) => {
  // Set headers for SSE
  console.log('subscribing to run', event.context.params.id)
  setHeader(event, 'Content-Type', 'text/event-stream')
  setHeader(event, 'Cache-Control', 'no-cache')
  setHeader(event, 'Connection', 'keep-alive')

  const id = event.context.params.id
  
  try {

    // Create a write function to send SSE
    const write = (data) => {
      console.log('Attempting to write SSE data:', data);
      try {
        event.node.res.write(`data: ${JSON.stringify(data)}\n\n`);
        console.log('Successfully wrote SSE data');
      } catch (writeError) {
        console.error('Error writing SSE data:', writeError);
      }
    }

    // Add keepalive interval
    const keepaliveInterval = setInterval(() => {
      console.log('Sending keepalive');
      event.node.res.write(`:keepalive\n\n`);
    }, 30000); // Send keepalive every 30 seconds

    // Clean up intervals if client disconnects
    event.node.req.on('close', () => {
      console.log(`Client disconnected from run ${id}`);
      clearInterval(keepaliveInterval);
    });

    try {
      // Use the documented subscribeToRun method
      console.log(`Starting subscription to run ${id}`);
      for await (const data of runs.subscribeToRun(id, {
        apiKey: process.env.TRIGGER_API_KEY
      })) {
        console.log('Received run data for ' + id, JSON.stringify(data));
        write({ 
          status: data.status, 
          output: data.output 
        })

        // End connection if job is complete
        if (data.status === 'COMPLETED' || data.status === 'FAILED') {
          console.log(`Run ${id} finished with status: ${data.status}`);
          clearInterval(keepaliveInterval);  // Clear interval before ending
          event.node.res.end();
          console.log('Connection ended successfully');
          break;
        }
      }
    } catch (error) {
      console.error('Error in job stream handler:', error);
      try {
        clearInterval(keepaliveInterval);  // Clear interval on error
        write({ 
          status: 'ERROR',
          error: error.message 
        });
        event.node.res.end();
      } catch (sendError) {
        console.error('Error sending error to client:', sendError);
      }
    }
  } catch (error) {
    console.error('Error in job stream handler:', error);
    try {
      clearInterval(keepaliveInterval);  // Clear interval on error
      write({ 
        status: 'ERROR',
        error: error.message 
      });
      event.node.res.end();
    } catch (sendError) {
      console.error('Error sending error to client:', sendError);
    }
  }
})
