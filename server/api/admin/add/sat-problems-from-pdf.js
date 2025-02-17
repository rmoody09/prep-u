
import { serverSupabaseUser, serverSupabaseServiceRole } from '#supabase/server'

import { processSATProblems } from "@/server/trigger.dev/jobs/sat-problems-from-pdf";

export default eventHandler(async (event) => {
    assertMethod(event, "POST");
    console.log('add problems from supabase pdf 13')
    let user = null;
    
    const response = {};
    let identified_problem_ids = [];
    let processed_question_ids = [];
    let failed_question_ids = [];
    let remaining_problem_ids = [];
    try {
        const user = await serverSupabaseUser(event);
        console.log('supabase user created')
        console.log(user);
        if (!user || !user.id) {
            return { status: 'error', message: 'user not found'};
        }
        const body = await readBody(event);
        const from_test = body.from_test;
        const file_url = body.file_url;
        console.log('file url:')
        console.log(file_url);
        const file_path = file_url.split('PDFs/')[1];
        console.log('file path:')
        console.log(file_path);
        const test_section = body.test_section || 'mixed';
        console.log('test section:')
        console.log(test_section);
        const cb_domain = body.cb_domain;
        const cb_skill = body.cb_skill;
        const expected_problem_count = parseInt(body.problem_count);
        try {
          // Trigger the job
          console.log('triggering job')
          const { id: jobId } = await processSATProblems.trigger({
            file_url: file_url,
            test_section: test_section,
            cb_domain: cb_domain,
            cb_skill: cb_skill,
            expected_problem_count: expected_problem_count,
            user_id: user.id
          });
          console.log('job triggered')
          console.log(jobId)
      
          return {
            jobId,
            status: 'queued'
          };
      
        } catch (error) {
          console.log('error')
          console.log(error)
          throw createError({
            statusCode: 500,
            message: error.message
          });
        }
        /*
        try {
            // Trigger the job
            const { id: jobId } = await triggerClient.sendEvent({
              name: "sat.problems.process",
              payload: {
                file_url: file_url,
                test_section: test_section,
                cb_domain: cb_domain,
                cb_skill: cb_skill,
                expected_problem_count: expected_problem_count,
                user_id: user.id
              },
            });
        
            return {
              jobId,
              status: 'queued'
            };
        
          } catch (error) {
            throw createError({
              statusCode: 500,
              message: error.message
            });
          }
          */
    }  catch (error) {
        console.error('Error:', error);
        return { status: 'error', message: 'An error occurred' };
    }
    
});