import { serverSupabaseUser,serverSupabaseServiceRole } from '#supabase/server'
import { prepareSATDrillForDB } from '~/assets/composables/prepareSATDrillForDB';



export default eventHandler(async (event) => {
    assertMethod(event, "POST");
    console.log('add sat drill backend v2');
    const user = await serverSupabaseUser(event);
    if (!user) {
        return { error: 'Unauthorized' }
    }
    const user_id = user.id;
    console.log('user id');
    console.log(user_id);
    const client = serverSupabaseServiceRole(event)
    const body = await readBody(event);
    const sb_data = prepareSATDrillForDB(body);
    sb_data.added_by_user = user_id;
    const sb_resp = await client.from('problems').insert(sb_data);
    console.log('sb resp');
    console.log(sb_resp);
    return { data: sb_resp.data, error: sb_resp.error };



})