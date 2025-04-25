import { serverSupabaseServiceRole } from '#supabase/server'
import { prepareConceptTagForDB, updateConceptParentsAndChildren } from '~/assets/composables/prepareConceptTagForDB';





export default eventHandler(async (event) => {
    assertMethod(event, "POST");
    console.log('adding concept tag3');
    const client = serverSupabaseServiceRole(event)
    const body = await readBody(event);
    const sb_data = prepareConceptTagForDB(body);
    console.log('sb_data', JSON.stringify(sb_data));
    const sb_resp = await client.from('concept_tags').insert(sb_data).select();

    await updateConceptParentsAndChildren(client, sb_resp.data[0];

    return { data: sb_resp.data, error: sb_resp.error };


})