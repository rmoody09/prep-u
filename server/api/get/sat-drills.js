import { serverSupabaseServiceRole } from '#supabase/server'

export default eventHandler(async (event) => {
    assertMethod(event, "GET");
    console.log('getting sat drills 2');
    const client = serverSupabaseServiceRole(event)
    const resp = await client.from('problems').select().eq('discipline', 'SAT').eq('problem_type', 'drill')    
    return resp;
})