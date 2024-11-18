import { serverSupabaseServiceRole } from '#supabase/server'
import { prepareSATDrillForDB } from '~/assets/composables/prepareSATDrillForDB';



export default eventHandler(async (event) => {
    assertMethod(event, "POST");
    console.log('adding drill');
    const client = serverSupabaseServiceRole(event)
    const body = await readBody(event);
    const sb_data = prepareSATDrillForDB(body);
    console.log('sb_data', sb_data);
    const sb_resp = await client.from('sat_drills').insert(sb_data);
    return { data: sb_resp.data, error: sb_resp.error };



})