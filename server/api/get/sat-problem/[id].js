import { serverSupabaseServiceRole } from '#supabase/server'

export default eventHandler(async (event) => {
    const problem_id = event.context.params.id;
    assertMethod(event, "GET");
    const client = serverSupabaseServiceRole(event)
    const resp = await client.from('problems').select().eq('id', problem_id).single()

    return resp;

  })