


export default defineNuxtRouteMiddleware(async (to, _from) => {
    const user = useSupabaseUser()
    console.log('super-admin middleware');
    if (!user.value) {
      return navigateTo('/login')
    }
    const supabase = useSupabaseClient()
    console.log('user', user.value);
    const user_id = user.value.id;
    console.log('user_id', user_id);
    const { data, error } = await supabase.from('profiles').select('*').eq('id', user_id);
    console.log('user data', data);
    console.log('user error', error);
    if (error) {
        console.log('error', error);
        return navigateTo('/sat/overview');
    }
    if (data.length == 0) {
      const new_user = {
        id: user_id,
        email: user.value.email
      }
      const { data, error } = await supabase.from('profiles').insert(new_user);
      console.log('data', data);
      console.log('error', error);
      return navigateTo('/sat/overview');
    }
    let admin_roles = ['admin', 'super_admin'];
    if (!admin_roles.includes(data[0].admin_role)) {
        return navigateTo('/sat/overview');
    }
    return;
    
    /*
    const client = serverSupabaseServiceRole(event)
   
    const sb_resp = await client.from('users').select('*').eq('id', user_id);
    console.log('sb_resp', sb_resp);
    */
  })