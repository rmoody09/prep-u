
import { serverSupabaseServiceRole } from '#supabase/server'

export default eventHandler(async (event) => {
  console.log('delete sat drill backend');
  const drill_id = event.context.params.id;
  console.log('drill id');
  console.log(drill_id);
  
  assertMethod(event, "DELETE");
  console.log('deleting sat drill');
  const client = serverSupabaseServiceRole(event)
  const resp = await client.from('problems').delete().eq('id', drill_id)
  console.log('resp status', resp.status);
  return resp;

  })