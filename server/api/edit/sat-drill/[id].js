import { serverSupabaseServiceRole } from '#supabase/server'
import { prepareSATDrillForDB } from '~/assets/composables/prepareSATDrillForDB';



export default eventHandler(async (event) => {
    assertMethod(event, "POST");
    const drill_id = event.context.params.id;
    const client = serverSupabaseServiceRole(event)
    const body = await readBody(event);
    const sb_data = prepareSATDrillForDB(body);
    const sb_resp = await client.from('problems').update(sb_data).eq('id', drill_id);
    return { data: sb_resp.data, error: sb_resp.error };



})