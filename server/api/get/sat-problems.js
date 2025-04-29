import { serverSupabaseServiceRole } from '#supabase/server'

export default eventHandler(async (event) => {
    //assertMethod(event, "GET");
    console.log('getting sat problems v 4-28');
    let query = {};
    if (isMethod(event, "GET")) {
        query = getQuery(event);
    } else {
        query = await readBody(event);
        console.log('query', JSON.stringify(query));
    }
    
    const client = serverSupabaseServiceRole(event)
    let resp = null;
    const get_count = query.count;
    const select_params = {};
    const select_cols = '*';
    if (get_count) {
        select_params.count = 'exact';
    }
    let db_query = client.from('problems').select(select_cols, select_params);
    if (query.hasOwnProperty('start') && query.hasOwnProperty('end')) {
        db_query = db_query.range(query.start, query.end);
    }
    if (query.search) {
        db_query = db_query.textSearch('question_text', `'${query.search}'`);
    }
    if (query.match_filters) {
        let match_filters = query.match_filters;
        db_query = db_query.match(match_filters);
        console.log('match filters', JSON.stringify(match_filters));
    }
    if (query.in_filters) {
        let in_filters = query.in_filters;
        for (let filter of in_filters) {
            db_query = db_query.in(filter.column, filter.values);
        }
    }
    resp = await db_query;
    return resp;
})