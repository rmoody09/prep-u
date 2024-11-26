import { serverSupabaseServiceRole } from '#supabase/server'

export default eventHandler(async (event) => {
    console.log('get sat drill backend');
    const drill_id = event.context.params.id;
    console.log('drill id');
    console.log(drill_id);
    
    assertMethod(event, "GET");
    console.log('getting sat drills');
    const client = serverSupabaseServiceRole(event)
    const resp = await client.from('sat_drills').select().eq('id', drill_id).single()
    console.log('data', resp.data);
    console.log('got data');
    return resp;

  })