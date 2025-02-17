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
      event.node.res.write(`data: ${JSON.stringify(data)}\n\n`)
    }

    // Use the documented subscribeToRun method
    for await (const data of runs.subscribeToRun(id, {
      apiKey: process.env.TRIGGER_API_KEY
    })) {
      console.log('run data ' + id, JSON.stringify(data));
      write({ 
        status: data.status, 
        output: data.output 
      })

      // End connection if job is complete
      if (data.status === 'COMPLETED' || data.status === 'FAILED') {
        event.node.res.end()
        break
      }
    }

    // Clean up if client disconnects
    event.node.req.on('close', () => {
      // Note: subscribeToRun doesn't need explicit cleanup
    })
  } catch (error) {
    event.node.res.end(`data: ${JSON.stringify({ error: error.message })}\n\n`)
  }
})
