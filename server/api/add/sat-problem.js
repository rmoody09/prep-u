import { serverSupabaseServiceRole } from '#supabase/server'
import { prepareSATProblemForDB } from '~/assets/composables/prepareSATProblemForDB';





export default eventHandler(async (event) => {
    assertMethod(event, "POST");
    const client = serverSupabaseServiceRole(event)
    const body = await readBody(event);
    const sb_data = prepareSATProblemForDB(body);
    console.log('add sat problem');
    const sb_resp = await client.from('problems').insert(sb_data).select();
    return { data: sb_resp.data, error: sb_resp.error };



})