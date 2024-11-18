import { serverSupabaseServiceRole } from '#supabase/server'

export default eventHandler(async (event) => {
    assertMethod(event, "GET");
    console.log('getting sat drills');
    const client = serverSupabaseServiceRole(event)
    const resp = await client.from('sat_drills').select()    
    return resp;
})