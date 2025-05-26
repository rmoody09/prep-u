import { task } from "@trigger.dev/sdk/v3";
import { createClient } from '@supabase/supabase-js'
import { removeTipTapHTMLTags } from '@/assets/composables/removeTipTapHTMLTags'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_KEY
const user_id = '9c9c2372-d6f7-4a3b-b7f7-a946ce6b3f3b'

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

const createItTestProblemSet = async (payload, ctx) => {
    console.log('payload:')
    console.log(JSON.stringify(payload));
    console.log('ctx:')
    console.log(ctx);
    const { data: verb_form_problems, error: verb_form_problems_error } = await supabaseAdmin
        .from('problems')
        .select('id, answer_choices, difficulty, category')
        .eq('problem_type', 'practice_problem')
        .eq('category', 'ff6102af-90f5-408d-95df-7b79753e5612')

    if (verb_form_problems_error) {
        console.log('error:')
        console.log(verb_form_problems_error);
        return { status: 'error', message: 'error getting verb form problems'};
    }
    console.log('verb_form_problems:')
    console.log(JSON.stringify(verb_form_problems));
    let drills = [];
    const drillAnswerChoices = [
        {html: `<p>Yes — perform the it/they test</p>`},
        {html: `<p>No — do not perform the it/they test</p>`},
    ]

    const getAnswerChoicesHtml = (answer_choices) => {
        return answer_choices.map((choice, index) => {
            const cleanedHtml = choice.html.replace(/^<p>|<\/p>$/g, '');
            return /*html*/`<p><strong>${String.fromCharCode(65 + index)})</strong> ${cleanedHtml}</p>`;
        }).join('<p></p>');
    }

    for (let problem of verb_form_problems) {
        let perform_it_test = true;
        let isSingleWordEndingInIng = false, isIngWord = false, startsWithWill = false, startsWithTo = false, containsComma = false;
        let ingChoice = '', willChoice = '', toChoice = '', commaChoice = '';
        for (let answer_choice of problem.answer_choices) {
            let answer_choice_text = answer_choice.text ? answer_choice.text : removeTipTapHTMLTags(answer_choice.html);            
            // Check if the answer choice is a single word ending in "ing"
            isSingleWordEndingInIng = /^[a-zA-Z]+ing$/.test(answer_choice_text);
            isIngWord = /ing\b/i.test(answer_choice_text);
            // Check if the answer choice starts with the complete word "will"
            startsWithWill = /^will\b/i.test(answer_choice_text);
            
            // Check if the answer choice starts with the complete word "to"
            startsWithTo = /^to\b/i.test(answer_choice_text);
            
            // Check if the answer choice contains a comma
            containsComma = answer_choice_text.includes(',');
            
            if (isSingleWordEndingInIng) {
                ingChoice = answer_choice_text;
            }
            if (startsWithWill) {
                willChoice = answer_choice_text;
            }
            if (startsWithTo) {
                toChoice = answer_choice_text;
            }
            if (containsComma) {
                commaChoice = answer_choice_text;
            }
            // If any condition is true, set perform_it_test to false
            if (isSingleWordEndingInIng || startsWithWill || startsWithTo || containsComma) {
                perform_it_test = false;
                break; // Exit the loop since we've found a condition that makes it false
            }
        }
        let explanation_html = '';
        if (perform_it_test) {
            if (isIngWord) {
                explanation_html = /*html*/`<p>Since this is a "verb form" problem and we don't see any patterns indicating that the "it/they" test shouldn't be performed, you should perform the it/they test. Even though we do see a word ending in "ing", it is preceded by another verb, making the "it" test still valid to perform.</p>`;
            } else {
                explanation_html = /*html*/`<p>Since this is a "verb form" problem and we don't see any patterns indicating that the "it/they" test shouldn't be performed, you should perform the it/they test.</p>`;
            }
            explanation_html = /*html*/`<p>Since this is a "verb form" problem and we don't see any patterns indicating that the "it/they" test shouldn't be performed, you should perform the it/they test.</p>`;
        } else {
            if (isSingleWordEndingInIng) {
                explanation_html = /*html*/`<p>Since this is a "verb form" problem containing an answer choice that is a single word ending in "ing", you should not perform the it/they test. Neither "it" nor "they" works before the word ${ingChoice}, so the "it" test may be misleading.</p>`;
            } else if (startsWithWill) {
                explanation_html = /*html*/`<p>Since this is a "verb form" problem containing an answer choice that starts with "will", you should not perform the it/they test. Both "it" and "they" can come before the word "will", so the "it" test may be misleading.</p>`;
            } else if (startsWithTo) {
                explanation_html = /*html*/`<p>Since this is a "verb form" problem containing an answer choice that starts with "to", you should not perform the it/they test. Neither "it" nor "they" make sense before the phrase "${toChoice}", so the "it" test may be misleading.</p>`;
            } else if (containsComma) {
                explanation_html = /*html*/`<p>Since this is a "verb form" problem containing an answer choice that has a comma, you should not perform the it/they test. When there are answer choices with commas, it is unlikely that the question is testing subject-verb agreement, so the "it" test will probably not be helpful.</p>`;
            }
        }
        const answer_choices_html = getAnswerChoicesHtml(problem.answer_choices);
        let explanation_text = removeTipTapHTMLTags(explanation_html);
        let question_html = /*html*/`<p>If you encounter the following answer choices on a Standard English problem, should you perform the it/they test?</p><p></p>${answer_choices_html}`;
        const question_text = removeTipTapHTMLTags(question_html);
        //console.log('answer choices:');
        //console.log(JSON.stringify(problem.answer_choices));
        //console.log('perform_it_test:')
        //console.log(perform_it_test);
        //console.log('question_html:')
        //console.log(question_html);
        //console.log('explanation_html:')
        //console.log(explanation_html);
        let correct_answer = perform_it_test ? 0 : 1;
        const drill = {
            test_section: 'reading_writing',
            cb_domain: 'standard_english_conventions',
            cb_skill: 'form_structure_and_sense',
            source: 'own',
            derivative_source: 'collegeboard',
            derivative_source_id: problem.source_question_id,
            question_text: question_text,
            question_html: question_html,
            explanation_html: explanation_html,
            explanation_text: explanation_text,
            answer_type: 'multiple_choice',
            answer_choices: drillAnswerChoices,
            mult_choice_answer: correct_answer,
            mult_choice_answers: [correct_answer],
            allow_multiple_selection: false,
            has_multiple_choice: true,
            problem_type: 'drill',
        }
        drills.push(drill);
    }
    console.log('drill count:')
    console.log(drills.length);
    const random_drills = drills.sort(() => Math.random() - 0.5).slice(0, 30);
    //console.log('random_drills:')
    //console.log(JSON.stringify(random_drills));
    
    // Insert drills into problems table and get their IDs
    const { data: insertedDrills, error: insertError } = await supabaseAdmin
        .from('problems')
        .insert(random_drills)
        .select('id')  // This will return the IDs of the inserted rows

    if (insertError) {
        console.log('Error inserting drills:')
        console.log(insertError)
        return { 
            status: 'error', 
            message: 'error inserting drills into problems table',
            error: insertError 
        }
    }
    console.log('insertedDrills:')

    const drill_ids = insertedDrills.map(drill => drill.id);
    console.log('drill_ids:')
    console.log(drill_ids);
    const problem_set = {
        name: 'Standard English It/They Test Decision Practice',
        problems: drill_ids,
        created_by: user_id,
        problem_set_type: 'drill',
        text_id: 'sat-standard-english-it-they-test-decision',
        discipline: 'SAT',
        test_section: 'reading_writing',
        domain: 'standard_english_conventions',
    }
    const { data: insertedProblemSets, error: insertProblemSetError } = await supabaseAdmin
        .from('problem_sets')
        .insert(problem_set)
        .select('id')
    if (insertProblemSetError) {
        console.log('Error inserting problem set:')
        console.log(insertProblemSetError)
    }
    console.log('insertedProblemSets:')
    console.log(insertedProblemSets);
    const problem_set_id = insertedProblemSets[0].id;
    console.log('problem_set_id:')
    console.log(problem_set_id);


    // Return the IDs of the newly created drills
    return {
        status: 'success',
        message: 'Successfully created drills',
        drillIds: drill_ids,
        problemSetId: problem_set_id
    }
}

export const createItTestProblemSetTask = task({
    id: "create-it-test-problem-set",
    run: createItTestProblemSet
})