import { serverSupabaseServiceRole } from '#supabase/server'

export default eventHandler(async (event) => {
    assertMethod(event, "GET");
    console.log('getting sat problems');
    const client = serverSupabaseServiceRole(event)
    const resp = await client.from('sat_problems').select()
    console.log('data', resp.data);
    console.log('got data');
    return resp;
})