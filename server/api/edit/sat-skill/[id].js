import { serverSupabaseServiceRole } from '#supabase/server'
import { prepareSATSkillForDB } from '~/assets/composables/prepareSATSkillForDB';





export default eventHandler(async (event) => {
    const skill_id = event.context.params.id;
    assertMethod(event, "POST");
    console.log('adding problem');
    const client = serverSupabaseServiceRole(event)
    const body = await readBody(event);
    const sb_data = prepareSATSkillForDB(body);
    const sb_resp = await client.from('sat_skills').update(sb_data).eq('id', skill_id);
    console.log('sb_data', sb_data);
    return { data: sb_resp.data, error: sb_resp.error };



})