import { serverSupabaseServiceRole } from '#supabase/server'

export default eventHandler(async (event) => {
    console.log('get sat skill backend');
    const skill_tag = event.context.params.tag;
    console.log('skill tag');
    console.log(skill_tag);
    
    assertMethod(event, "GET");
    console.log('getting sat skills');
    const client = serverSupabaseServiceRole(event)
    const resp = await client.from('sat_skills').select().eq('tag', skill_tag).single()
    console.log('data', resp.data);
    console.log('got data');
    return resp;

  })