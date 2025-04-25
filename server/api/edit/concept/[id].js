import { serverSupabaseServiceRole } from '#supabase/server'
import { prepareConceptTagForDB, updateConceptParentsAndChildren } from '~/assets/composables/prepareConceptTagForDB';





export default eventHandler(async (event) => {
    assertMethod(event, "POST");
    console.log('editing concept tag3');
    const id = event.context.params.id;
    const client = serverSupabaseServiceRole(event)
    const body = await readBody(event);
    console.log('body', JSON.stringify(body));
    const sb_data = prepareConceptTagForDB(body);
    console.log('sb_data', JSON.stringify(sb_data));
    const sb_resp = await client.from('concept_tags').update(sb_data).eq('id', id).select();

    await updateConceptParentsAndChildren(client, sb_resp.data[0]);

    return { data: sb_resp.data, error: sb_resp.error };


})