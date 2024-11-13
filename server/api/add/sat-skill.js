import { serverSupabaseServiceRole } from '#supabase/server'
import { prepareSATSkillForDB } from '~/assets/composables/PrepareSATSkillForDB';





export default eventHandler(async (event) => {
    assertMethod(event, "POST");
    console.log('adding skill');
    const client = serverSupabaseServiceRole(event)
    const body = await readBody(event);
    const sb_data = prepareSATSkillForDB(body);
    
    console.log('sb_data', sb_data);
    const sb_resp = await client.from('sat_skills').insert(sb_data);
    return { data: sb_resp.data, error: sb_resp.error };


})