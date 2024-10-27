import { serverSupabaseServiceRole } from '#supabase/server'
import { prepareSATProblemForDB } from '~/assets/composables/prepareSATProblemforDB';


function removeTags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/ig, '');
}

export default eventHandler(async (event) => {
    const problem_id = event.context.params.id;
    console.log('editing sat problem', problem_id);
    assertMethod(event, "POST");
    const client = serverSupabaseServiceRole(event)
    console.log('asserted method');
    const body = await readBody(event);
    console.log('body', body);
    const sb_data = prepareSATProblemForDB(body);
    const sb_resp = await client.from('sat_problems').update(sb_data).eq('id', problem_id);
    console.log('sb_resp', sb_resp);
    return { data: sb_resp.data, error: sb_resp.error };



})