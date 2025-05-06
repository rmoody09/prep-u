import { serverSupabaseServiceRole } from '#supabase/server'
import { serverSupabaseUser } from '#supabase/server'

export default eventHandler(async (event) => {
    // Check user authentication
    const user = await serverSupabaseUser(event)
    if (!user) {
        return { error: 'Unauthorized' }
    }

    // Check admin role
    const client = serverSupabaseServiceRole(event)
    const { data: profile, error: profile_error } = await client
        .from('profiles')
        .select('admin_role')
        .eq('id', user.id)

    if (profile_error || !profile[0]?.admin_role) {
        return { error: 'Unauthorized' }
    }

    // Proceed with deletion
    const problem_id = event.context.params.id
    assertMethod(event, "DELETE")
    
    const resp = await client
        .from('problem_sets')
        .delete()
        .eq('id', problem_id)

    return resp
})