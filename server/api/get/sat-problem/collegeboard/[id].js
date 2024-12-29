import { serverSupabaseServiceRole } from '#supabase/server'

export default eventHandler(async (event) => {
    const problem_id = event.context.params.id;
    assertMethod(event, "GET");
    const client = serverSupabaseServiceRole(event)
    const resp = await client.from('sat_problems').select().eq('source_question_id', problem_id).eq('source', 'collegeboard').single()

    return resp;

  })