import { serverSupabaseServiceRole } from '#supabase/server'
import { prepareCategoryForDB } from '~/assets/composables/prepareCategoryForDB';
import { getNodeText } from '~/assets/composables/getNodeText';





export default eventHandler(async (event) => {
    assertMethod(event, "POST");
    console.log('adding category');
    const client = serverSupabaseServiceRole(event)
    const body = await readBody(event);
    
    const { discipline, tag, name, description_html, description_json, section, domain, skill } = body;
    
    const descrip_text = getNodeText(description_json);
    const sb_data = {
        discipline: discipline,
        tag: tag,
        name: name,
        description_html: description_html,
        description_json: description_json,
        description_text: descrip_text,
        section: section,
        domain: domain,
        skill: skill
    }
    console.log('sb_data', JSON.stringify(sb_data));
    const sb_resp = await client.from('problem_categories').insert(sb_data).select();
    console.log('sb_resp', JSON.stringify(sb_resp));

    return { data: sb_resp.data, error: sb_resp.error };


})