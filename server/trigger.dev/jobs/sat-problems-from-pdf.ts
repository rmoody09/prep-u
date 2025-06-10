import { task } from "@trigger.dev/sdk/v3";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getCbSectionSkillIDs, getCbSkillIDs } from '~/assets/composables/SATProblemTypes';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_KEY

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
const reading_writing_sample_problem_ids = ['ee017113-4883-4aa9-9fe4-91025944167d', '7452c1a1-41ad-4f94-904c-5e23390d8f53', 'c360b121-260d-46b1-91a6-1ba643bd615d', 'a5c5f7d7-b6ed-4e49-8efc-907efec82003', '356353c6-1b9a-4059-8a10-3e0b75555f92', 'bbfb30bc-2e6a-4a49-82cb-4be969f1b182', 'e829a681-98d1-420b-a0e6-79c9ad90b37b', '94500242-a998-407a-b22c-85676fa70255', 'bfa9b4fb-33f1-4680-afa3-fcd3d4f08762', '7027747a-a1a3-4267-b54d-bb873faf1ae1', '220a770e-68e2-4b00-ab41-2c266e0d4fc8', '56ef2d14-eae7-4421-beda-6a5f959b52cb']; // TODO: add reading writing sample problem ids - add samples with graphics - maybe integrate chartjs tiptap plugin to actually generate the charts rather than using images

const cb_skill_sample_problem_ids = {
    'boundaries': ['66e2f360-68fd-43e3-bcd5-17e806b568b5', '94cb1330-2eda-4c1d-9625-858688b3c531','104c6fb3-4ef3-4bb6-9454-4c7c329127ac', '32406b5c-7471-4e69-bad4-8b885e4d4fb4', 'ee017113-4883-4aa9-9fe4-91025944167d', '106a7727-c536-44ec-a429-cf8386d8d7da', '94994e60-1aa9-4972-96ec-1646f6b7a526', '2a27e76f-c357-44f6-a01e-36056d609d89'],
    'form_structure_and_sense': ['de4e278d-17c9-4097-8c03-22e191985115', '1ecdfaff-915c-4ef3-a2f2-0437f9043013', 'e9331432-fb8b-4ac9-bbd1-730bad1cc657', 'aa0b7d51-c1d8-4986-bbde-2e7bf8684423', '69a9802a-2827-4771-bd58-7a606351e383', '0b567218-d476-49df-8cae-468a4b3f97a5', '64d7b5b6-975b-4a30-af22-f6fac9d58271', '24bfba40-464a-4512-8962-cafea1d014ff', 'c98da9eb-92b4-4a1b-817d-6bfbc06dfb79', '0aeab4a2-f35d-4f0a-961e-b8e14d505994'],
    'words_in_context': [
        '8b7e75c4-4855-47cd-a5c3-2d8230dbc24b', 
        'cbf524ca-096f-4ebd-84d0-48380e74c20d', 
        'cd8a0b34-24be-4fa6-b1ec-6f5bd3b80522', 
        'dfcdb2a4-9172-4714-9ea2-4503e392096c',
        'a332f5b5-f7cf-4c03-8f18-3876869ef860', 
        '36179831-3a58-4985-9269-e9f3542fc679', 
        '703afd6a-d4f3-4d9b-8b60-ff0f854491b5', 
        'b19175d9-3081-4783-bd2b-f77eeba254ab', 
        '7175eb5a-7f2c-4837-a49b-0e01b365b9ac', 
        '2c0f1f40-3454-4734-a8a7-503e80c61e61', 
        '08243fa7-30fd-4ad8-8182-d8f37c205eaf'
    ],
    'rhetorical_synthesis': [
        '3b2826a4-11d8-4ce4-8e4f-3cd26929b5f8',
        '8bca1419-e84b-476c-bdf5-b70b62348741', 
        'df20abcb-1183-42c8-a0b0-2bf84373392e', 
        'bfa9b4fb-33f1-4680-afa3-fcd3d4f08762', 
        '79d5c9d7-20fa-4b40-b9f2-84d3492eda8e', 
        '4ae4284f-6baa-4af5-b0fc-7b7ba848b64f', 
        '378bcac9-04b7-4f73-8050-0f39a294635b', 
        'd29c7151-2991-4bf6-ae88-2aa1943a34cc', 
        'bbad3eb2-363d-47ad-82e8-cb44eadc002f', 
        '33eca7bc-1510-4025-9cc8-d5bd8843acd4',
        '7b1c5451-5760-4b44-9487-f7e915b6fc52', 
        '2893590c-deea-44b4-925a-0fabfc806d1a'
    ],
    'central_ideas_and_details': [
        '06a4c0d4-8754-4d54-aeb3-aa63da72c537', 
        '720fae3f-53f0-4d2d-a549-1c4cf3ecf18a',
        '0ce96787-b472-47bc-8a0b-8e1ca360579e',
        'bf6c3880-3988-4790-82e4-966d66515b46', 
        '94500242-a998-407a-b22c-85676fa70255',
        '92157c5c-2e93-4b11-825e-09d510248445',
        '0638d348-29f0-4746-a1c8-f8ab1b5d99c7',
        '4851dcfe-696c-4630-8fb4-d34b70f68236',
        'cafafb0f-f240-4d73-8531-4c5ba24e46e6',
        '06c5efb3-184e-4a1b-a621-0b2cf6e0d186',
        '312dbe85-b6e1-40b6-8981-d6b07b9c415d', 
        '62b57c5c-bc6c-4f5d-bb17-7d853d217a69', 
        '742ebdba-1da8-4086-b20f-027843675148', 
        '65d05c05-5718-450d-be08-19abd0e831c9', 
        '750ee0ed-37f4-4491-be36-50dfbca5fd25',
        '2be5362d-08e0-48f5-8cb7-20ef30d19738'
    ],
    'inferences': [
        '736dad8b-562b-41b4-b07d-ff7634af5dbd',
        '0e4bf331-9d46-49d5-ac8e-44bb55843381', 
        '7027747a-a1a3-4267-b54d-bb873faf1ae1', 
        '53cccb23-31aa-4047-b6e2-a4e012c94359', 
        '1159f69e-b2c1-4a4e-992a-46bb7de3ac98',
        '939b2755-a385-4ae1-9e79-f0157d41ee91', 
        'd5ffd6f8-22e1-4d55-9725-696a4c6f297d', 
        '098d4659-db67-4638-b34f-2ad8053c46b8', 
        'fdc1689f-655e-4c1e-acd5-1f340f49731d', 
        '6a38f908-60e9-41ba-ac1f-9ab8a26e4d4a', 
        '8878667c-af1f-4c56-b0e4-afef8ddd915d', 
        '1c6cdc86-11f5-4668-9265-8c03d2ceccc8'
    ]
}

let category_tag_to_id = {};
let category_id_to_tag = {};
let categories = [];
let skill_default_categories = {
    'boundaries': 'sat-punctuation', 
    'form_structure_and_sense': 'sat-verb-form', 
    'words_in_context': 'sat-fill-in-blank-word', 
    'text_structure_and_purpose': 'sat-main-purpose', 
    'cross_text_connections': 'sat-cross-text-connections', 
    'transitions': 'sat-transitions', 
    'rhetorical_synthesis': 'sat-bullet-points' 
}

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

const section_specific_instructions = {
  'reading_writing': `
    When you return the question_html and the solution_html, please reflect any whitespace in the original document. For example, if there is a blank line in between paragraphs, or in between the passage and the question, please include that extra blank line in the html you return (with a <p></p> tag), as seen in the examples provided below. Also be careful to differentiate between em dashes and hyphens, and to recreate the appropriate character. If it is not being used to hyphenate a compound word, it is likely that it is an em dash.
  `
}

const domain_specific_instructions = {
  'standard_english_conventions': `
    Be careful to replicate the question content exactly as it appears in the document. Particularly around the blank, do not add any punctuation or words that are not present in that position in the document. These passages may be intentionally grammatically incorrect, which is why there is a blank to be filled in by the student, so you should not make any changes in an attempt to fix perceived errors in the sentence.
    When recreating the content and answer choices, be careful to differentiate between em dashes and hyphens. In  answer choices, when in doubt use an em dash because they are more common than hyphens in answer choices. 
  `
}

let skill_specific_instructions = {
  'boundaries': ``,
  'words_in_context': `
    If there is a blank in the passage, make sure to include the blank when recreating the passage in the question_html field. Also, if there is an underlined word (or an underlined multi-word phrase) in the passage, make sure to indicate it as underlined in the question_html field, using <u> tags similarly to the examples provided below. When questions contain something to the effect of "As used in the text, what does ...", there will be an underlined portion earlier in the passage, which you should tag as underlined in the question_html field.
  `, 
  'transitions': `
    Every passage will have a blank (______) in it. Be sure to include the blank when recreating the passage in the question_html field.
    Be careful to check for any punctuation before or after the blank, and make sure to include this punctuation when recreating the passage in the question_html field. For example, if there is a comma before the blank (like in "These electrical currents, ______ create a barrier ...") then you should make sure this comma is reflected when you return the question_html field.
  `, 
  'rhetorical_synthesis': ``,
  'inferences': `
    Every passage will have a blank (______) at the end of the passage, before the question. Be sure to include this blank in the form of 6 consecutive underscore characters when recreating the passage in the question_html field.
  `,
}

const getSystemPrompt = async (options) => {
  console.log('getSystemPrompt')
  console.log('cb_skill:')
  console.log(cb_skill);
  let sample_json = options.sample_json;
  let section = options.section || 'mixed;';
  let skills_instructions = '';
  let domain_section_specific_instructions_text = '';
  let section_specific_instructions_text = '';
  let skill_specific_instructions_text = '';
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
  if (cb_domain && domain_specific_instructions[cb_domain]) {
      domain_section_specific_instructions_text = domain_specific_instructions[cb_domain];
  }
  if (section && section_specific_instructions[section]) {
      section_specific_instructions_text = section_specific_instructions[section];
  }
  if (cb_skill && skill_specific_instructions[cb_skill]) {
      skill_specific_instructions_text = skill_specific_instructions[cb_skill];
  }
  console.log('skill_specific_instructions_text:')
  console.log(skill_specific_instructions_text);
  let solution_extra_instructions = '';
  if (section == 'math') {
      solution_extra_instructions = `
          Make sure that any latex expressions are surrounded by the div tag with the class "tiptap-latex" structured similarly to the examples provided.
      `;
  }
  let category_instructions = '';
  let category_additional_instructions = '';
  if (categories.length > 0) {
    category_instructions = `
        category: This field will not be explicitly mentioned in the file, but it can be recognized by patterns in the answer choices. This field should take one of the following values: ${categories.map(c => c.tag).join(', ')}.
        To help you determine the category, refer to the sample data and the descriptions of the categories given below.
    `;
    category_additional_instructions = `
        Here are the descriptions of the options for the category field:
        ${categories.map(c => `${c.tag}: ${c.description_text}`).join('\n')}
    `;
    console.log('category_instructions:')
    console.log(category_instructions);
    console.log('category_additional_instructions:')
    console.log(category_additional_instructions);
  }
  

  let fields = [
    'test_section',
    'question_id',
    'domain',
    'skill',
    'question_text',
    'question_json',
    'answer_type',
    'answer_choices',
    'mult_choice_answer',
    'input_answers',
    'difficulty',
    'contains_graphic',
    'solution_json'
  ]
  if (category_instructions) {
    fields.push('category');
  }

  const system_prompt = `
      Your role is to take a pdf file of SAT practice problems and perform various actions to extract information from the document in JSON format.
      You should not return any additional text. Your response should consist only of the JSON string.
      You should make sure that your JSON response is formatted correctly. Double check that it can be parsed by the javascript function JSON.parse() without throwing an error. If that causes an error, you should try to fix the error and return the correct JSON string.
      Each problem in the pdf will start with a header that includes the text "Question ID", which should help you identify how to separate the problems from each other.
      
      You may be asked to return an array representing the problems in the document.
      Please do not make any edits or additions of your own to the questions or answer choices - just return the questions and answer choices as they are in the document as accurately as possible.
      There are likely to be mathematical expressions in the questions, which you should convert to latex in accordance with the examples provided. Pay close attention to the index of radical signs. The index is the number that is displayed above the radical sign in a smaller font. Make sure that the index is the correct value. Also pay close attention exponents and subscripts, making sure you replicate the correct values. Exponents and radical indices can be smaller and perhaps more difficult to see, so make sure you look at them closely. For expressions with radicals or exponents, make sure to double-check that the indices and exponents are in the correct positions and that all symbols are accurately represented.
      In that case, each item of the array should include the following fields: ${fields.join(', ')}.
      Here is an explanation of each of the fields:
          test_section: should be a string that is either 'math' or 'reading_writing'
          question_id: should be a string that depicts the college board question id
          domain: a snake-style string that indicates the domain of the question
          skill: a snake-style string that indicates the skill tested by the question
          question_html: the question content formatted as html that can be fed into the tiptap editor. Please use the examples provided below as a guide for how to format the question in html. For mathematical expressions, use latex to express those in the html, using the examples provided as guidance. If there are any tables of data, see the examples provided below as reference for how to depict them. Please do not make any edits or additions of your own to the questions - just return the questions as they are in the document as accurately as possible. If there is an image in the question (excluding a table that an be represented as discussed previously), such as a graph or diagram, make sure to include it here. Make sure it is positioned correctly. If it is positioned above the text in the pdf, then it should come before the text in your response. If it's between two blocks of text, then it should be between those blocks of text in your response. Do not try to anticipate the source of the image. Always use this url as a placeholder for the source of any image: https://hxosbmzvobqvyncpnxqt.supabase.co/storage/v1/object/public/Problem%20Graphics/CollegeBoard%20Question%20Bank%20Graphics/generic-graphic.png?t=2024-11-03T16%3A47%3A58.869Z
          answer_type: should be either 'multiple_choice' or 'numeric_input'
          answer_choices: an array listing the answer choices. each choice should be given in html form, using the examples as a guide, formatted similarly to how you formatted the question_html field. There should always be 4 answer choices for multiple choice questions. If the question is not a multiple choice question, this should be null. Please do not make any edits or additions of your own to the answer choices - just return the answer choices as they are in the document as accurately as possible.
          input_answers: This should be an array of strings that depict the correct answer when the type of answer is numeric_input. If the answer can be depicted as a fraction or a decimal, include only the fraction in the array. For example, the answer 1/3 should be included as ["1/3"] and not ["0.3333"] or ["1/3", "0.3333"]. There should only be multiple items in the array if the question is multiple distinct answers (like "-5" and "3"), but not when there is a single answer that can be given in fraction or decimal form. For multiple choice questions, this should be null.
          difficulty: should indicate the difficulty of the question. should be either an integer, 1, 2, or 3, representing easy, medium, or hard respectively.
          contains_graphic: a boolean indicating whether there is a graphic in the problem that requires an image
          solution_html: the rationale behind selecting the correct answer, and why other answer choices are incorrect. Should be given in html format, using the examples provided as a guide. The formatting will also be similar to the formatting of the question_html field. Please do not make any edits or additions of your own to the solution - just return the solution as it is in the document as accurately as possible.
          skill: ${skills_instructions}
          ${category_instructions}

      ${category_additional_instructions}

      ${section_specific_instructions_text}

      ${domain_section_specific_instructions_text}

      ${skill_specific_instructions_text}
      

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
  /*
  console.log('trimmed resp text start:');
  console.log(resp_text.slice(0, 500));
  console.log('trimmed resp text end:');
  console.log(resp_text.slice(-500));
  */
  let problems = [];
  try {
      //data = JSON.parse(resp_json);
      problems = JSON.parse(resp_text);
      /*    
      console.log('parsed problems')
      console.log(problems.length);
      for (let problem of problems) {
          console.log(problem.question_id);
      }
      */
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
      const system_prompt = await getSystemPrompt({sample_json: sample_json, section: test_section});
      console.log('system prompt:')
      console.log(system_prompt);
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
          //console.log('got result from gemini 2');
          resp_text = result.response.text();
          /*
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
          */
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

import { removeTags } from '@/assets/composables/prepareSATProblemForDB';

function prepareProblemForDB(problem, options = {}) {
  console.log('prepareProblemForDB')
  let difficulties = {easy: 1, medium: 2, hard: 3};
  let difficulty = problem.difficulty;
  try {
    if (difficulties[difficulty.toLowerCase()]) {
        difficulty = difficulties[difficulty.toLowerCase()];
    }
  } catch(err) {
    
  }
  let is_practice_test = options.is_practice_test || false;
  let answer_choices = [];
  if (problem.answer_choices && problem.answer_choices.length > 0) {
      answer_choices = problem.answer_choices.map(choice => {
          return {html: choice};
      });
  }
  //console.log('answer choices:')
  //console.log(answer_choices);
  const question_text = removeTags(problem.question_html);

  console.log('problem html:')
  console.log(problem.question_html);
  /*
  console.log('question text:')
  console.log(question_text);
  */
  let db_problem = {
      source: 'collegeboard', 
      in_cb_question_bank: true,
      is_practice_test: is_practice_test,
      subsource: 'question_bank', 
      test_section: test_section || problem.test_section,
      source_question_id: problem.question_id,
      cb_domain: cb_domain || problem.domain,
      cb_skill: cb_skill || problem.skill,
      question_text: question_text,
      question_html: problem.question_html,
      answer_type: problem.answer_type,
      answer_choices: answer_choices,
      input_answers: problem.input_answers,
      mult_choice_answer: problem.mult_choice_answer,
      difficulty: difficulty, 
      source_solution: {html: problem.solution_html}, 
      contains_graphic: problem.contains_graphic, 
      discipline: 'SAT', 
      problem_type: 'practice_problem', 
      allow_multiple_selection: false, 
  }
  if (problem.category && category_tag_to_id[problem.category]) {
    db_problem.category = category_tag_to_id[problem.category];
    console.log(
        'db problem category: ' + db_problem.category
    )
  }
  if (!db_problem.category && cb_skill && skill_default_categories[cb_skill]) {
    let category_tag = skill_default_categories[cb_skill];
    if (category_tag_to_id[category_tag]) {
      db_problem.category = category_tag_to_id[category_tag];
      console.log(
        'inserted defaultdb problem category: ' + db_problem.category
      )
    }
  }
  return db_problem;
}

async function saveProblemsToDB(client, problems, options = {}, user_id) {
  console.log('saveProblemsToDB')
  let db_problems = [];
  let question_ids = [];
  let failed_question_ids = [];
  let pre_approved_question_ids = [];
  let added_question_ids = [];
  let from_test = options.from_test || false;
  for (let problem of problems) {
      console.log('problem:')
      console.log(problem.question_id);
      let db_problem = prepareProblemForDB(problem, {is_practice_test: from_test});
      db_problem.added_by_user = user_id;
      console.log('prepared for db');
      console.log('check if exists');
      question_ids.push(problem.question_id);
      // First check if problem exists and is expert approved
      const { data: existingProblem, error: fetchError } = await client
          .from('problems')
          .select('expert_approved')
          .eq('source', 'collegeboard')
          .eq('source_question_id', problem.question_id)
          .single();

      if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 is "not found" error
          console.log('error checking existing problem ' + problem.question_id);
          console.log(fetchError);
          failed_question_ids.push(problem.question_id);
          continue;
      }
      if (existingProblem) {
        console.log('exists in db');
      } else {
        console.log('does not exist in db');
      }
      // If problem exists and is expert approved, skip it
      if (existingProblem?.expert_approved) {
          console.log('already expert approved:')
          console.log(problem.question_id);
          pre_approved_question_ids.push(problem.question_id);
          console.log('skipping expert approved problem ' + problem.question_id);
          continue;
      }
      console.log('not expert approved');

      // Otherwise, upsert the problem
      const { data, error } = await client
          .from('problems')
          .upsert(db_problem, {
              onConflict: 'source,source_question_id',
              returning: true
          });

      if (error) {
          console.log('error upserting problem ' + problem.question_id);
          console.log(error);
          failed_question_ids.push(problem.question_id);
          continue;
      }
      console.log('added/updated question id ' + problem.question_id);
      console.log(problem.skill);
      added_question_ids.push(problem.question_id);
    db_problems.push(db_problem);
      
  }
  return {db_problems, question_ids, added_question_ids, failed_question_ids, pre_approved_question_ids};
}

// Add a new function to update task status
async function updateTaskStatus(taskId: string, status: string, data: any = null, message: string = '') {
  console.log('updateTaskStatus')
  console.log('v2025-4-20');
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
    let pre_approved_question_ids = [];
    let added_question_ids = [];
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
        if (cb_skill && cb_skill_sample_problem_ids[cb_skill] && cb_skill_sample_problem_ids[cb_skill].length > 0) {
            sample_problem_ids = cb_skill_sample_problem_ids[cb_skill];
        }

        if (cb_skill) {
            console.log('get skill categories');
            let categories_resp = await supabaseAdmin.from('problem_categories').select('id, name, tag, description_text').eq('discipline', 'SAT').eq('skill', cb_skill);
            console.log('categories_resp:')
            console.log(JSON.stringify(categories_resp));
            if (categories_resp.data) {
                categories = categories_resp.data;
                console.log('categories resp data:')
                console.log(JSON.stringify(categories_resp.data));
                for (let category of categories_resp.data) {
                    category_tag_to_id[category.tag] = category.id;
                    category_id_to_tag[category.id] = category.tag;
                }
            }
          }

        
        

        console.log('sample problem ids:')
        console.log(sample_problem_ids);
        let { data: sample_problems, error: sample_error } = await supabaseAdmin.from('problems').select('test_section, question_id:source_question_id, domain:cb_domain, skill:cb_skill, question_text, question_html, answer_type, answer_choices, mult_choice_answer, input_answers, difficulty, contains_graphic, solution:source_solution').in('id', sample_problem_ids);
        
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
            delete problem.question_text;
            problem.answer_choices = problem.answer_choices.map(choice => {
                return choice.html;
            });
            let category_id = problem.category;
            if (category_id && category_id_to_tag[category_id]) {
                problem.category = category_id_to_tag[category_id];
            } else {
                delete problem.category;
            }
            return problem;
        });
        sample_json = JSON.stringify(sample_problems);
        console.log('sample problems:');
        for (let problem of sample_problems) {
            /*
            console.log('problem text:');
            console.log(problem.question_text);
            console.log('problem html:');
            console.log(problem.question_html);
            console.log('answer choices:');
            console.log(problem.answer_choices);
            console.log('mult choice answer:');
            console.log(problem.mult_choice_answer);
            console.log('solution:');
            console.log(problem.solution_html);
            */
        }
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
        let { db_problems, question_ids, added_question_ids: just_added_question_ids, failed_question_ids: just_failed_question_ids, pre_approved_question_ids: just_pre_approved_question_ids } = await saveProblemsToDB(supabaseAdmin, problems, format_options, user_id);
        added_question_ids = added_question_ids.concat(just_added_question_ids);
        failed_question_ids = failed_question_ids.concat(just_failed_question_ids);
        pre_approved_question_ids = pre_approved_question_ids.concat(just_pre_approved_question_ids);
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
            if (extra_attempts > 5) {
                console.log('Failed to add all problems - too many attempts');
                break;
            }
            
            let more_problems = await getProblemsFromGemini(false, remaining_problem_ids);
            
            let more_question_ids = more_problems.filter(problem => !!problem.question_id).map(problem => problem.question_id);
            processed_question_ids = processed_question_ids.concat(more_question_ids);
            let { db_problems: new_db_problems, question_ids: new_question_ids, added_question_ids: just_added_question_ids, failed_question_ids: just_failed_question_ids, pre_approved_question_ids: just_pre_approved_question_ids } = await saveProblemsToDB(supabaseAdmin, more_problems, format_options, user_id);
            db_problems = db_problems.concat(new_db_problems);
            added_question_ids = added_question_ids.concat(just_added_question_ids);
            for (let failed_question_id of just_failed_question_ids) {
                if (!failed_question_ids.includes(failed_question_id)) {
                    failed_question_ids.push(failed_question_id);
                }
            }
            for (let pre_approved_question_id of just_pre_approved_question_ids) {
                if (!pre_approved_question_ids.includes(pre_approved_question_id)) {
                    pre_approved_question_ids.push(pre_approved_question_id);
                }
            }
            remaining_problem_ids = remaining_problem_ids.filter(problem_id => !processed_question_ids.includes(problem_id));
        }
        console.log('done adding problems');
        resp_data_to_show.problems_processed = db_problems.length;
        response.status = 'OK';
        response.summary = resp_data_to_show;
        response.processed_question_ids = processed_question_ids;
        response.added_question_ids = added_question_ids;
        response.failed_question_ids = failed_question_ids;
        response.unparsed_question_ids = remaining_problem_ids;
        response.pre_approved_question_ids = pre_approved_question_ids;
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