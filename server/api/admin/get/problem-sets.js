import { serverSupabaseServiceRole } from '#supabase/server'

export default eventHandler(async (event) => {
    console.log('getting problem sets');
    let query = {};
    if (isMethod(event, "GET")) {
        query = getQuery(event);
    } else {
        query = await readBody(event);
        console.log('query', JSON.stringify(query));
    }
    
    const client = serverSupabaseServiceRole(event)
    let resp = null;
    
    // Calculate pagination
    const page = parseInt(query.page) || 1;
    const per_page = parseInt(query.per_page) || 10;
    const start = (page - 1) * per_page;
    const end = start + per_page - 1;

    // Build the query
    let db_query = client.from('problem_sets')
        .select('*', { count: 'exact' })
        .range(start, end);

    // Add search if provided
    if (query.search) {
        db_query = db_query.textSearch('name', query.search);
    }

    // Add section filter if provided
    if (query.section) {
        db_query = db_query.eq('test_section', query.section);
    }

    // Add type filter if provided
    if (query.type) {
        db_query = db_query.eq('type', query.type);
    }

    // Execute the query
    try {
        resp = await db_query;
        
        // Return formatted response
        return {
            data: resp.data,
            total: resp.count,
            page: page,
            per_page: per_page,
            total_pages: Math.ceil(resp.count / per_page)
        };
    } catch (error) {
        console.error('Error fetching problem sets:', error);
        throw createError({
            statusCode: 500,
            message: 'Failed to fetch problem sets'
        });
    }
});
