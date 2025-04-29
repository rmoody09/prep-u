import { serverSupabaseServiceRole } from '#supabase/server'
import { serverSupabaseUser } from '#supabase/server'




export default eventHandler(async (event) => {
    const user = await serverSupabaseUser(event)
    if (!user) {
        return { error: 'Unauthorized' }
    }
    const client = serverSupabaseServiceRole(event)
    const {data: profile, error: profile_error} = await client.from('profiles').select('admin_role').eq('id', user.id);
    if (profile_error) {
        return { error: 'Unauthorized' }
    }
    if (!profile[0].admin_role) {
        return { error: 'Unauthorized' }
    }
    const sb_data = {manually_approved: true}
    if (profile[0].admin_role == 'super_admin') {
        sb_data.expert_approved = true;
    }
    const problem_id = event.context.params.id;
    console.log('approving sat problem', problem_id);
    assertMethod(event, "POST");
    
    console.log('asserted method');
    
    const sb_resp = await client.from('problems').update(sb_data).eq('id', problem_id);
    console.log('sb_resp', sb_resp);
    return { data: sb_resp.data, error: sb_resp.error };



})