import { serverSupabaseServiceRole } from '#supabase/server'

export default eventHandler(async (event) => {
    console.log('get sat problem backend');
    const problem_id = event.context.params.id;
    console.log('problem id');
    console.log(problem_id);
    
    assertMethod(event, "GET");
    console.log('getting sat problems');
    const client = serverSupabaseServiceRole(event)
    const resp = await client.from('sat_problems').select().eq('id', problem_id).single()
    console.log('data', resp.data);
    console.log('got data');
    return resp;

  })