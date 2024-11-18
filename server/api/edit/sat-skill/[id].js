import { serverSupabaseServiceRole } from '#supabase/server'
import { prepareSATSkillForDB, updateSkillParentsAndChildren } from '~/assets/composables/PrepareSATSkillForDB';





export default eventHandler(async (event) => {
    const skill_id = event.context.params.id;
    assertMethod(event, "POST");
    console.log('editing skill');
    const client = serverSupabaseServiceRole(event)
    const body = await readBody(event);
    const sb_data = prepareSATSkillForDB(body);
    const sb_resp = await client.from('sat_skills').update(sb_data).eq('id', skill_id);
    
    await updateSkillParentsAndChildren(client, sb_data.tag, sb_data.parent_skills, sb_data.subskills);

    return { data: sb_resp.data, error: sb_resp.error };


})