import { serverSupabaseServiceRole } from '#supabase/server'
import { prepareSATProblemForDB } from '~/assets/composables/prepareSATProblemForDB';





export default eventHandler(async (event) => {
    assertMethod(event, "POST");
    console.log('adding problem');
    const client = serverSupabaseServiceRole(event)
    const body = await readBody(event);
    const sb_data = prepareSATProblemForDB(body);
    
    console.log('sb_data', sb_data);
    const sb_resp = await client.from('sat_problems').insert(sb_data);
    return { data: sb_resp.data, error: sb_resp.error };



})