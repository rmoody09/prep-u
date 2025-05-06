import { serverSupabaseServiceRole } from '#supabase/server'





export default eventHandler(async (event) => {
    assertMethod(event, "POST");
    const client = serverSupabaseServiceRole(event)
    const body = await readBody(event);
    const sb_data = {
        name: body.name,
        text_id: body.text_id,
        test_section: body.test_section,
        domain: body.domain,
        skill: body.skill,
        concepts: body.concepts,
        problem_set_type: body.type,
        problems: body.problems
    }
    console.log('add problem set');
    console.log(sb_data);
    const sb_resp = await client.from('problem_sets').insert(sb_data).select();
    console.log('problem set added');
    console.log(sb_resp);
    return { data: sb_resp.data, error: sb_resp.error };



})