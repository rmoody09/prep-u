import { task } from "@trigger.dev/sdk/v3";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getCbSectionSkillIDs, getCbSkillIDs } from '~/assets/composables/SATProblemTypes';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_KEY
console.log('supabaseUrl:')
console.log(supabaseUrl);
console.log('supabaseServiceRoleKey:')
console.log(supabaseServiceRoleKey);

const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

let gemini_pdf_info = {};
let sample_json = '';
let test_section = '';
let cb_domain = '';
let cb_skill = '';
let expected_problem_count = 0;
let user_id = '';
let file_url = '';
let from_test = false;
const math_sample_problem_ids = ['031faa14-08d6-4b0a-9374-4b1e2c773a8a', '4d161ef6-e6cd-4c4a-91fe-2b6482bfad0c', '6ab93f4b-7fb3-4965-bed1-5ef343d78cce', '9cceef1c-af85-4c22-88b1-1b20df7d4c99', 'ebf01828-7654-4070-90af-313ce104735b', 'fc31b9da-5b0d-4540-bde7-b2b9c12dc67c', 'ef406769-09f6-46f2-b909-995b941dbcda'];
const reading_writing_sample_problem_ids = [];

const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceRoleKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

const getSystemPrompt = (options) => {
  let sample_json = options.sample_json;
  let section = options.section || 'mixed;';
  let skills_instructions = '';
  if (section == 'math') {
      skills_instructions = `
          The skill should take one of the following values: ${getCbSectionSkillIDs('math').join(', ')}.
      `;
  } else if (section == 'reading_writing') {
      skills_instructions = `
          The skill should take one of the following values: ${getCbSectionSkillIDs('reading_writing').join(', ')}.
      `;
  } else {
      skills_instructions = `
          If the test_section is math, the skill should take one of the following values: ${getCbSectionSkillIDs('math').join(', ')}.
          If the test_section is reading_writing, the skill should take one of the following values: ${getCbSectionSkillIDs('reading_writing').join(', ')}.
      `;
  }
  const system_prompt_1 = `
      Your role is to take a pdf file of SAT practice problems and perform various actions to extract information from the document in JSON format.
      You should not return any additional text. Your response should consist only of the JSON string.
      You should make sure that your JSON response is formatted correctly. Double check that it can be parsed by the javascript function JSON.parse() without throwing an error. If that causes an error, you should try to fix the error and return the correct JSON string.
      Each problem in the pdf will start with a header that includes the text "Question ID", which should help you identify how to separate the problems from each other.
      
      You may be asked to return an array representing the problems in the document.
      In that case, each item of the array should include the following fields: test_section, question_id, domain, skill, question_text, question_json, answer_type, answer_choices, mult_choice_answer, input_answers, difficulty, contains_graphic, solution_json.
      Here is an explanation of each of the fields:
          test_section: should be a string that is either 'math' or 'reading_writing'
          question_id: should be a string that depicts the college board question id
          domain: a snake-style string that indicates the domain of the question
          skill: a snake-style string that indicates the skill tested by the question
          question_text: the content of the question depicted in plain text. do not use latex or html markup in this field. For example, do not use <sup> or <sub> tags. Just use plain text. Use the examples provided as a guide. In some cases, you might not be able to depict the question perfectly with plain text due to mathematical expressions and graphics, but that is ok, just do the best you can to depict it as plain text. Make sure to iclude only the question content, and not the answer choices here.
          question_html: the question content formatted as html that can be fed into the tiptap editor. Please use the examples provided below as a guide for how to format the question in html. For mathematical expressions, use latex to express those in the html, using the examples provided as guidance. If there are any tables of data, see the examples provided below as reference for how to depict them. If there is an image in the question (excluding a table that an be represented as discussed previously), such as a graph or diagram, make sure to include it here. Make sure it is positioned correctly. If it is positioned above the text in the pdf, then it should come before the text in your response. If it's between two blocks of text, then it should be between those blocks of text in your response. Do not try to anticipate the source of the image. Always use this url as a placeholder for the source of any image: https://hxosbmzvobqvyncpnxqt.supabase.co/storage/v1/object/public/Problem%20Graphics/CollegeBoard%20Question%20Bank%20Graphics/generic-graphic.png?t=2024-11-03T16%3A47%3A58.869Z
          question_json: the question content formatted as json that can be fed into the tiptap editor. Please use the examples provided below as a guide for how to format the question in json. For mathematical expressions, use latex to express those in the json object, using the examples provided as guidance. If there are any tables of data, see the examples provided below as reference for how to depict them. If there is an image in the question (excluding a table that an be represented as discussed previously), such as a graph or diagram, make sure to include it here. Make sure it is positioned correctly. If it is positioned above the text in the pdf, then it should come before the text in your response. If it's between two blocks of text, then it should be between those blocks of text in your response. Do not try to anticipate the source of the image.  Always use this url as a placeholder for the source of any image: https://hxosbmzvobqvyncpnxqt.supabase.co/storage/v1/object/public/Problem%20Graphics/CollegeBoard%20Question%20Bank%20Graphics/generic-graphic.png?t=2024-11-03T16%3A47%3A58.869Z
          answer_type: should be either 'multiple_choice' or 'numeric_input'
          answer_choices: an array listing the answer choices. each choice should be given in html form as well as json form, similarly to how you formatted the question in each of those formats. There should always be 4 answer choices for multiple choice questions. If the question is not a multiple choice question, this should be null.
          input_answers: This should be an array of strings that depict the correct answer when the type of answer is numeric_input. If the answer can be depicted as a fraction or a decimal, include only the fraction in the array. For example, the answer 1/3 should be included as ["1/3"] and not ["0.3333"] or ["1/3", "0.3333"]. There should only be multiple items in the array if the question is multiple distinct answers (like "-5" and "3"), but not when there is a single answer that can be given in fraction or decimal form. For multiple choice questions, this should be null.
          difficulty: should indicate the difficulty of the question. Should be an integer, 1, 2, or 3, representing easy, medium, or hard respectively.
          contains_graphic: a boolean indicating whether there is a graphic in the problem that requires an image
          solution: the rationale behind selecting the correct answer. should be given in both html and json format, similarly to how you formatted the questions.
          skill: ${skills_instructions}

      Below is some sample data of how an array of problems should be formatted:
      ${sample_json}
  `;

  const system_prompt = `
      Your role is to take a pdf file of SAT practice problems and perform various actions to extract information from the document in JSON format.
      You should not return any additional text. Your response should consist only of the JSON string.
      You should make sure that your JSON response is formatted correctly. Double check that it can be parsed by the javascript function JSON.parse() without throwing an error. If that causes an error, you should try to fix the error and return the correct JSON string.
      Each problem in the pdf will start with a header that includes the text "Question ID", which should help you identify how to separate the problems from each other.
      
      You may be asked to return an array representing the problems in the document.
      Please do not make any edits or additions of your own to the questions or answer choices - just return the questions and answer choices as they are in the document as accurately as possible.
      There are likely to be mathematical expressions in the questions, which you should convert to latex in accordance with the examples provided. Pay close attention to the index of radical signs. The index is the number that is displayed above the radical sign in a smaller font. Make sure that the index is the correct value. Also pay close attention exponents and subscripts, making sure you replicate the correct values. Exponents and radical indices can be smaller and perhaps more difficult to see, so make sure you look at them closely. For expressions with radicals or exponents, make sure to double-check that the indices and exponents are in the correct positions and that all symbols are accurately represented.
      In that case, each item of the array should include the following fields: test_section, question_id, domain, skill, question_text, question_json, answer_type, answer_choices, mult_choice_answer, input_answers, difficulty, contains_graphic, solution_json.
      Here is an explanation of each of the fields:
          test_section: should be a string that is either 'math' or 'reading_writing'
          question_id: should be a string that depicts the college board question id
          domain: a snake-style string that indicates the domain of the question
          skill: a snake-style string that indicates the skill tested by the question
          question_text: the content of the question depicted in plain text. Do not use html tags in this field. For mathematical expressions, use latex to represent them, but indicate where latex is being used by inserting $latex_start immediately before the latex expression and $latex_end immediately after it. Use the examples provided as a guide. In some cases, you might not be able to depict the question perfectly with plain text graphics and other factors, but that is ok, just do the best you can to depict it as plain text. Make sure to iclude only the question content, and not the answer choices here. Please do not make any edits or additions of your own to the questions - just return the questions as they are in the document as accurately as possible.
          question_html: the question content formatted as html that can be fed into the tiptap editor. Please use the examples provided below as a guide for how to format the question in html. For mathematical expressions, use latex to express those in the html, using the examples provided as guidance. If there are any tables of data, see the examples provided below as reference for how to depict them. Please do not make any edits or additions of your own to the questions - just return the questions as they are in the document as accurately as possible. If there is an image in the question (excluding a table that an be represented as discussed previously), such as a graph or diagram, make sure to include it here. Make sure it is positioned correctly. If it is positioned above the text in the pdf, then it should come before the text in your response. If it's between two blocks of text, then it should be between those blocks of text in your response. Do not try to anticipate the source of the image. Always use this url as a placeholder for the source of any image: https://hxosbmzvobqvyncpnxqt.supabase.co/storage/v1/object/public/Problem%20Graphics/CollegeBoard%20Question%20Bank%20Graphics/generic-graphic.png?t=2024-11-03T16%3A47%3A58.869Z
          answer_type: should be either 'multiple_choice' or 'numeric_input'
          answer_choices: an array listing the answer choices. each choice should be given in html form, using the examples as a guide, formatted similarly to how you formatted the question_html field. There should always be 4 answer choices for multiple choice questions. If the question is not a multiple choice question, this should be null. Please do not make any edits or additions of your own to the answer choices - just return the answer choices as they are in the document as accurately as possible.
          input_answers: This should be an array of strings that depict the correct answer when the type of answer is numeric_input. If the answer can be depicted as a fraction or a decimal, include only the fraction in the array. For example, the answer 1/3 should be included as ["1/3"] and not ["0.3333"] or ["1/3", "0.3333"]. There should only be multiple items in the array if the question is multiple distinct answers (like "-5" and "3"), but not when there is a single answer that can be given in fraction or decimal form. For multiple choice questions, this should be null.
          difficulty: should indicate the difficulty of the question. should be either an integer, 1, 2, or 3, representing easy, medium, or hard respectively.
          contains_graphic: a boolean indicating whether there is a graphic in the problem that requires an image
          solution_html: the rationale behind selecting the correct answer, and why other answer choices are incorrect. Should be given in html format, using the examples provided as a guide. The formatting will also be similar to the formatting of the question_html field. Please do not make any edits or additions of your own to the solution - just return the solution as it is in the document as accurately as possible.
          skill: ${skills_instructions}

      Below is some sample data of how an array of problems should be formatted:
      ${sample_json}
  `;

  return system_prompt;
}


const trimRespText = (resp_text) => {
  resp_text = resp_text.trim();
  if (resp_text.startsWith('```json')) {
      resp_text = resp_text.replace(/^```json\n/, '').replace(/\n```$/, '');
  }
  return resp_text;
}

const getProblemsFromGeminiMsg = async (resp_text) => {
  console.log('getProblemsFromGeminiMsg')
  resp_text = trimRespText(resp_text);
  console.log('trimmed resp text start:');
  console.log(resp_text.slice(0, 500));
  console.log('trimmed resp text end:');
  console.log(resp_text.slice(-500));
  let problems = [];
  try {
      //data = JSON.parse(resp_json);
      problems = JSON.parse(resp_text);
      console.log('parsed problems')
      console.log(problems.length);
      for (let problem of problems) {
          console.log(problem.question_id);
      }
  } catch(err) {
      try {
          console.log('failed to parse original json, will try to reformat')
          let json_start = resp_text.indexOf("[");
          console.log('json start:')
          console.log(json_start);
          let new_json = resp_text.slice(json_start);
          let last_question_id_index = new_json.lastIndexOf("question_id");
          console.log('last question id index:')
          console.log(last_question_id_index);
          new_json = new_json.slice(0, last_question_id_index);
          let last_curly_brace_close = new_json.lastIndexOf("}");
          new_json = new_json.slice(0, last_curly_brace_close+1);
          new_json += "]";
          console.log('start of reformatted json:')
          console.log(new_json.slice(0, 100));
          console.log('end of reformatted json:')
          console.log(new_json.slice(new_json.length - 100));
          problems = JSON.parse(new_json);
          console.log('parsed json');
          console.log(problems.length);
      } catch(err) {
          console.log('still failed to parse json');
          console.log(err);
          problems = [];
          //const { data, error } = await client.from('random_data').insert({text_data: resp_json});
          console.log('start of resp:')
          console.log(resp_text.slice(0, 500));
          console.log('end of resp:')
          console.log(resp_text.slice(resp_text.length - 500));
          try {
              const user_prompt = `
                  The JSON string you gave me is unable to be parsed by the javascript function JSON.parse().
                  Please fix the json so that it can be parsed without throwing an error.
                  If the issue is that you cut if off in the middle of one of the array items, please omit the incomplete item from the array, and restructure it to only incclude all the complete items in the array.
                  Your response should consist only of the corrected JSON string, with no additional text.
                  Below is the JSON string that needs to be fixed:
                  ${resp_text}
              `;
              
              const model = genAI.getGenerativeModel({ 
                  model: "gemini-1.5-pro", 
              });
              const result = await model.generateContent({
                  contents: [{parts: [{text: user_prompt}]}],
                  generationConfig: {
                      maxOutputTokens: 8192,
                  }
              });
              let resp_text = result.response.text();
              console.log('attempted to have gemini reformat json');
              console.log('start of resp:')
              console.log(resp_text.slice(0, 200));
              console.log('end of resp:')
              console.log(resp_text.slice(resp_text.length - 200));
              resp_text = trimRespText(resp_text);
              problems = JSON.parse(resp_text);
          } catch(err) {
              console.log('failed to have gemini reformat json');
          }
          
      }
  }
  return problems;
}

const getProblemsFromGemini = async (all_problems = true, problem_ids = []) => {
  console.log('getProblemsFromGemini')
  let attempts = 0;
  let succeeded = false;
  let resp_text = '';
  let problems = [];
  while (attempts < 3 && !succeeded) {
      attempts++;
      const system_prompt = getSystemPrompt({sample_json: sample_json, section: test_section});
      let user_prompt = '';
      if (all_problems) {
          user_prompt = `
              Please convert all the problems in the attached pdf into a JSON array, using the guidance provided in the system prompt.
              Make sure that you return proper JSON that can be parsed by the javascript function JSON.parse() without throwing an error. This is very important.
              Do not skip over any problems, even if the problem is a duplicate of one provided in the sample data.
              If you aren't sure how to format a question, do not leave it out - just do your best to process it and move on. 
              Process all problems from the document in a single response. 
              Do not stop short of processing and returning all the problems, unless that is the only way to avoid going over the token limit. 
              If you must stop short of returning all the problems, please do not stop in the middle of a problem - just stop at the end of the last problem you are able to fully complete.
          `;
      } else {
          user_prompt = `
              Please convert the problems with the following question ids into a JSON array, using the guidance provided in the system prompt.
              The problems I want you to convert are the ones with the following question ids: ${problem_ids.join(', ')}.
              Do not skip over any problems, even if the problem is a duplicate of one provided in the sample data.
              If you aren't sure how to format a question, do not leave it out - just do your best to process it and move on. 
              Process all of the specified problems in a single response. 
              Do not stop short of processing and returning all the specified problems, unless that is the only way to avoid going over the token limit. 
              If you must stop short of returning all the specified problems, please do not stop in the middle of a problem - just stop at the end of the last problem you are able to fully complete.
          `;
      }
      user_prompt += `
          Your response should consist only of the JSON array, with no additional text.
          You should make sure that your JSON response is formatted correctly. Double check that it can be parsed by the javascript function JSON.parse() without throwing an error. If that causes an error, you should try to fix the error and return the correct JSON string.
      `;
      try {
          
          const model = genAI.getGenerativeModel({ 
              model: "gemini-1.5-pro", 
              systemInstruction: system_prompt
          });
          console.log('attempt to get problems from gemini')
          const contents = {parts: [
              {text: user_prompt},
              {
                  fileData: {
                      fileUri: gemini_pdf_info.file.uri,
                      mimeType: gemini_pdf_info.file.mimeType,
                  },
              }
          ]}
          const result = await model.generateContent({
              contents: [contents],
              generationConfig: {
                  maxOutputTokens: 8192,
              }
          });
          console.log('got result from gemini 2');
          resp_text = result.response.text();
          try {
              console.log('resp start:')
              console.log(resp_text.slice(0, 500));
              console.log('resp end:')
              console.log(resp_text.slice(-500));
              console.log('resp end end')
          } catch(err) {
              console.log('error slicing resp text');
              console.log(err);
              console.log(resp_text);
          }
          console.log('got resp text');
          problems = getProblemsFromGeminiMsg(resp_text);
          if (problems.length == 0) {
              console.log('failed to get problems from gemini');
              throw new Error('failed to get problems from gemini');
          }
          succeeded = true;
          break;
      } catch(err) {
          console.log('error getting problems from gemini');
          console.log(err);
          if (attempts == 3) {
              console.log('failed to get problems from gemini after 3 attempts');
              console.log(err);
              throw err;
          }
          console.log('retrying...');
      }
  }
  return problems;
}

function prepareProblemForDB(problem, options = {}) {
  console.log('prepareProblemForDB')
  let difficulties = {easy: 1, medium: 2, hard: 3};
  let difficulty = problem.difficulty;
  if (difficulties[difficulty]) {
      difficulty = difficulties[difficulty];
  }
  let is_practice_test = options.is_practice_test || false;
  let answer_choices = [];
  if (problem.answer_choices && problem.answer_choices.length > 0) {
      answer_choices = problem.answer_choices.map(choice => {
          return {html: choice};
      });
  }
  console.log('answer choices:')
  console.log(answer_choices);
  let db_problem = {
      source: 'collegeboard', 
      in_cb_question_bank: true,
      is_practice_test: is_practice_test,
      subsource: 'question_bank', 
      test_section: test_section || problem.test_section,
      source_question_id: problem.question_id,
      cb_domain: cb_domain || problem.domain,
      cb_skill: cb_skill || problem.skill,
      question_text: problem.question_text,
      question_html: problem.question_html,
      answer_type: problem.answer_type,
      answer_choices: answer_choices,
      input_answers: problem.input_answers,
      mult_choice_answer: problem.mult_choice_answer,
      difficulty: difficulty, 
      source_solution: {html: problem.solution_html}, 
      contains_graphic: problem.contains_graphic,
  }
  return db_problem;
}

async function saveProblemsToDB(client, problems, options = {}, user_id) {
  console.log('saveProblemsToDB')
  let db_problems = [];
  let question_ids = [];
  let failed_question_ids = [];
  let from_test = options.from_test || false;
  for (let problem of problems) {
      let db_problem = prepareProblemForDB(problem, {is_practice_test: from_test});
      db_problem.added_by_user = user_id;
      console.log('prepared for db');
      //console.log(db_problem);
      const { data, error } = await client.from('sat_problems').insert(db_problem);
      console.log('tried to add to db');
      if (error) {
          console.log('error inserting problem ' + problem.question_id);
          console.log(error);
          failed_question_ids.push(problem.question_id);
      }
      console.log(data);
      console.log('added question id ' + problem.question_id);
      console.log(problem.skill);
      question_ids.push(problem.question_id);
      db_problems.push(db_problem);
  }
  return {db_problems, question_ids, failed_question_ids};
}

// Add a new function to update task status
async function updateTaskStatus(taskId: string, status: string, data: any = null, message: string = '') {
  console.log('updateTaskStatus')
  console.log('taskId:')
  console.log(taskId);
  console.log('status:')
  console.log(status);
  console.log('data:')
  console.log(data);
  const { error } = await supabaseAdmin
    .from('task_status')
    .upsert({
      id: taskId,
      status: status,
      data: data,
      message: message,
      updated_at: new Date().toISOString()
    });

  if (error) {
    console.error('Error updating task status:', error);
  }
}

console.log("Attempting to register SAT Problems task...");

// Define the job
export const processSATProblems = task({
  id: "process-sat-problems", // unique identifier
  run: async (payload, ctx) => {
    console.log('payload:')
    console.log(JSON.stringify(payload));
    console.log('ctx:')
    console.log(ctx);
    const taskId = ctx.ctx.run.id;
    console.log('taskId:')
    console.log(taskId);
    const response = {};
    const resp_data_to_show = {};
    let identified_problem_ids = [];
    let processed_question_ids = [];
    let failed_question_ids = [];
    let remaining_problem_ids = [];
    ({ test_section, cb_domain, cb_skill, expected_problem_count, user_id, file_url, from_test } = payload);

    try {
        // Log start of processing
        await updateTaskStatus(taskId, 'processing', null, 'Starting SAT problem processing');

        console.log("Starting SAT problem processing");
        console.log('timestamp:', new Date().toISOString());  // Added timestamp log
        console.log('test section:')
        console.log(test_section);
        console.log('cb domain:')
        console.log(cb_domain);
        console.log('cb skill:')
        console.log(cb_skill);
        console.log('expected problem count:')
        console.log(expected_problem_count);
        console.log('file url:')
        console.log(file_url);
        const file_path = file_url.split('PDFs/')[1];
        let sample_problem_ids = [];
        if (test_section == 'math') {
            sample_problem_ids = math_sample_problem_ids;
        } else if (test_section == 'reading_writing') {
            sample_problem_ids = reading_writing_sample_problem_ids;
        } else {
            sample_problem_ids = math_sample_problem_ids.concat(reading_writing_sample_problem_ids);
        }
        console.log('sample problem ids:')
        console.log(sample_problem_ids);
        let { data: sample_problems, error: sample_error } = await supabaseAdmin.from('sat_problems').select('test_section, question_id:source_question_id, domain:cb_domain, skill:cb_skill, question_text, question_html, answer_type, answer_choices, mult_choice_answer, input_answers, difficulty, contains_graphic, solution:source_solution').in('id', sample_problem_ids);
        
        if (sample_error) {
            console.log('error:')
            console.log(sample_error);
            return { status: 'error', message: 'error getting sample data'};
        }
        if (sample_problems) {
            //console.log(sample_problems[0]);
        } else {
            console.log('no sample data');
        }
        sample_problems = sample_problems.map(problem => {
            problem.solution_html = problem.solution.html;
            delete problem.solution;
            problem.answer_choices = problem.answer_choices.map(choice => {
                return choice.html;
            });
            return problem;
        });
        sample_json = JSON.stringify(sample_problems);
        //console.log('sample json:')
        //console.log(sample_json);

        console.log('file path:')
        console.log(file_path);
        const { data, error } = await supabaseAdmin.storage.from('Problem PDFs').download(file_path);
        console.log('got pdf')
        if (error) {
            console.log('error:')
            console.log(error);
        }
        if (data) {
            console.log('got data');
        } else {
            console.log('no data');
            await updateTaskStatus(taskId, 'error', {
                error: 'no data'
            }, 'no data');
            return { status: 'error', message: 'no data'};
        }
        const arrayBuffer = await data.arrayBuffer();
        await updateTaskStatus(taskId, 'got_pdf', null, 'Uploading PDF to Gemini');
        // Upload the downloaded data.
        const formData = new FormData();
        const metadata = { file: { mimeType: "application/pdf", displayName: `sat_pdf_${file_path}` } };
        formData.append("metadata", new Blob([JSON.stringify(metadata)], { contentType: "application/json" }));
        formData.append("file", new Blob([arrayBuffer], { type: "application/pdf" }));
        const res2 = await fetch(
        `https://generativelanguage.googleapis.com/upload/v1beta/files?uploadType=multipart&key=${fileManager.apiKey}`,
        { method: "post", body: formData }
        );
        const uploadResult = await res2.json();
        console.log('upload result:')
        console.log(uploadResult);
        gemini_pdf_info = uploadResult;
        console.log(`Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`);
        await updateTaskStatus(taskId, 'loaded_gemini_pdf', null, 'Getting question ids from Gemini');
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
        //console.log('run simple AI test:')
        //const test_result = await model.generateContent("Explain how AI works");
        //console.log('test result:')
        //console.log(test_result.response.text());
        const result = await model.generateContent([
        `Return a JSON array of all the question ids in the pdf.    Each question id should be 8 alphanumeric characters long. Please return just the JSON with no additional text.
        `,
        {
            fileData: {
            fileUri: uploadResult.file.uri,
            mimeType: uploadResult.file.mimeType,
            },
        },
        ]);
        let resp_text = result.response.text();
        
        // Clean up the response text to get only the JSON array
        resp_text = trimRespText(resp_text);
        
        console.log('problem ids resp:')
        console.log(resp_text);
        const problem_ids = JSON.parse(resp_text);
        identified_problem_ids = problem_ids;
        response.identified_problem_ids = problem_ids;
        resp_data_to_show.problems_identified = problem_ids.length;
        await updateTaskStatus(taskId, 'got_problem_ids', problem_ids, 'Got problem ids from Gemini - now getting problems');

        let problems = await getProblemsFromGemini();
        console.log('got gemini resp 2');

        console.log('get processed problem ids');
        processed_question_ids = problems.filter(problem => !!problem.question_id).map(problem => problem.question_id);
        console.log('processed question ids:')
        console.log(processed_question_ids);

        const format_options = {from_test: from_test, test_section: test_section, cb_domain: cb_domain, cb_skill: cb_skill};
        let { db_problems, question_ids, just_failed_question_ids } = await saveProblemsToDB(supabaseAdmin, problems, format_options, user_id);
        failed_question_ids = failed_question_ids.concat(just_failed_question_ids);
        console.log('saved problems');
        console.log(db_problems.length);
        
        for (let problem_id of problem_ids) {
            if (!processed_question_ids.includes(problem_id)) {
                remaining_problem_ids.push(problem_id);
            }
        }
        let extra_attempts = 0;
        while (remaining_problem_ids.length > 0) {
            await updateTaskStatus(taskId, 'processed_some_problems', {processed_problem_ids: processed_question_ids, remaining_problem_ids: remaining_problem_ids}, 'Processed some problems - getting Gemini to process the rest');
            console.log('remaining problem ids:')
            console.log(remaining_problem_ids);
            extra_attempts++;
            if (extra_attempts > 3) {
                console.log('Failed to add all problems - too many attempts');
                break;
            }
            
            let more_problems = await getProblemsFromGemini(false, remaining_problem_ids);
            
            let more_question_ids = more_problems.filter(problem => !!problem.question_id).map(problem => problem.question_id);
            processed_question_ids = processed_question_ids.concat(more_question_ids);
            let { db_problems: new_db_problems, question_ids: new_question_ids, failed_question_ids: just_failed_question_ids } = await saveProblemsToDB(supabaseAdmin, more_problems, format_options, user_id);
            db_problems = db_problems.concat(new_db_problems);
            for (let failed_question_id of just_failed_question_ids) {
                if (!failed_question_ids.includes(failed_question_id)) {
                    failed_question_ids.push(failed_question_id);
                }
            }
            remaining_problem_ids = remaining_problem_ids.filter(problem_id => !processed_question_ids.includes(problem_id));
        }
        console.log('done adding problems');
        resp_data_to_show.problems_processed = db_problems.length;
        response.status = 'OK';
        response.summary = resp_data_to_show;
        response.processed_question_ids = processed_question_ids;
        response.failed_question_ids = failed_question_ids;
        response.unparsed_question_ids = remaining_problem_ids;
        await updateTaskStatus(taskId, 'completed', response, 'SAT problems added to database');
        return response;

      console.log("Processing completed successfully");
      return { success: true };

    } catch (error) {
      await updateTaskStatus(taskId, 'error', {
        error: error.message
      }, 'Processing failed');
      console.log("Processing failed", { error });
      throw error;
    }
  },
});

console.log("SAT Problems task registered");