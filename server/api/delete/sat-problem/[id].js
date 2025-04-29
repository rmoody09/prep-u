import { serverSupabaseServiceRole } from '#supabase/server'

export default eventHandler(async (event) => {
    console.log('delete sat problem backend');
    const problem_id = event.context.params.id;
    console.log('problem id');
    console.log(problem_id);
    
    assertMethod(event, "DELETE");
    console.log('deleting sat problem');
    const client = serverSupabaseServiceRole(event)
    const resp = await client.from('problems').delete().eq('id', problem_id)
    console.log('resp status', resp.status);
    return resp;

  })