import { serverSupabaseServiceRole } from '#supabase/server'

const blobToBase64 = blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };



export default eventHandler(async (event) => {
    assertMethod(event, "POST");
    console.log('add problems from supabase pdf 5')
    const client = serverSupabaseServiceRole(event)
    const body = await readBody(event);
    const file_path = body.file_path;
    const { data, error } = await client.storage.from('Problem PDFs').download(file_path);
    console.log('got pdf')
    const buffer = Buffer.from(await data.arrayBuffer())
    console.log('got buffer');
    let base64 = buffer.toString('base64');
    console.log('got base64');
    console.log(base64.slice(0, 100));
    return { status: 'OK' };
});