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

  const createEnglishQuestionTypeProblemSet = async (payload, ctx) => {
    console.log('payload:')
    console.log(JSON.stringify(payload));
    console.log('ctx:')
    console.log(ctx);
    const { data: problem_categories, error: problem_categories_error } = await supabaseAdmin.from('problem_categories').select('id, name, tag').eq('domain', 'standard_english_conventions');
    if (problem_categories_error) {
        console.log('error:')
        console.log(problem_categories_error);
        return { status: 'error', message: 'error getting problem categories'};
    }
    console.log('problem_categories:')
    console.log(JSON.stringify(problem_categories));
    let category_tags = {};
    let category_problems = {};
    let all_selected_problems = [];
    let category_cb_skills = {};

    for (let category of problem_categories) {
        category_tags[category.id] = category.tag;
        const { data: problems_in_category, error: problems_in_category_error } = await supabaseAdmin
            .from('problems')
            .select('id, answer_choices, difficulty, category')
            .eq('category', category.id)
            .eq('problem_type', 'practice_problem');
        
        if (problems_in_category_error) {
            console.log('error:')
            console.log(problems_in_category_error);
            return { status: 'error', message: 'error getting problems in category'};
        }
        category_cb_skills[category.tag] = category.skill;

        // Select random problems from this category
        let selected_problems = problems_in_category;
        if (problems_in_category.length > 10) {
            // Shuffle array and take first 10
            selected_problems = problems_in_category
                .sort(() => Math.random() - 0.5)
                .slice(0, 10);
        }
        
        // Add selected problems to our combined list
        all_selected_problems = all_selected_problems.concat(selected_problems);
    }

    // Shuffle the combined list of all selected problems
    all_selected_problems = all_selected_problems.sort(() => Math.random() - 0.5);

    // Now all_selected_problems contains our final randomized list
    category_problems = { all_selected_problems };
    let drills = [];
    const getAnswerChoicesHtml = (answer_choices) => {
        return answer_choices.map((choice, index) => {
            const cleanedHtml = choice.html.replace(/^<p>|<\/p>$/g, '');
            return /*html*/`<p><strong>${String.fromCharCode(65 + index)})</strong> ${cleanedHtml}</p>`;
        }).join('<p></p>');
    }
    const drillAnswerChoices = [
        {html: `<p><strong>Punctuation</strong></p><p>The main difference between answer choices is how they are punctuated (semicolons, em dashes, colons, commas). Don't count changes in apostrophes and questions marks — even though these are technically punctuation, they'll fall under their own categories.</p>`},
        {html: `<p><strong>Verb Form</strong></p><p>The answer choices contain the same verb but in different forms (differing in tense, singular vs. plural, etc.).</p>`},
        {html: `<p><strong>Differing Pronouns</strong></p><p>The answer choices all use different pronouns (she, it, they, some, this, that, etc.).</p>`},
        {html: `<p><strong>Plural/Possessive/Contractions</strong></p><p>The answer choices will differ in whether certain words are pluralized, possessive, or contracted (e.g. "it's" vs. "it is"). Often you'll notice differences in where they use (or don't use) apostrophes.</p>`},
        {html: `<p><strong>Question vs Statement</strong></p><p>Usually two answer choices will end in question marks, and two will not.</p>`},
        {html: `<p><strong>Subject-Modifier Placement</strong></p><p>The answer choices will vary significantly in the way the words are ordered, and in particular you will notice the subject being different in different answer choices.</p>`}
    ]

    const category_answer_choices = {
        'sat-punctuation': 0,
        'sat-verb-form': 1,
        'sat-pronouns': 2,
        'sat-plural-possessive-contraction': 3,
        'sat-question-vs-statement': 4,
        'sat-subject-modifier': 5,
    }

    const question_type_names = {
        'sat-punctuation': 'Punctuation',
        'sat-verb-form': 'Verb Form',
        'sat-pronouns': 'Differing Pronouns',
        'sat-plural-possessive-contraction': 'Plural/Possessive/Contractions',
        'sat-question-vs-statement': 'Question vs Statement',
        'sat-subject-modifier': 'Subject-Modifier Placement',
    }

    for (let problem of all_selected_problems) {
        //console.log('problem:')
        //console.log(JSON.stringify(problem));
        
        let category_tag = category_tags[problem.category];
        //console.log('problem category:')
        //console.log(category_tag);
        let answer_choices_html = getAnswerChoicesHtml(problem.answer_choices);
        //console.log('answer_choices_html:')
        //console.log(answer_choices_html);
        let question_html = /*html*/`<p>If you encounter the following answer choices on a Standard English problem, what type of problem does it fall under?</p><p></p>${answer_choices_html}`;
        const question_type_name = question_type_names[category_tag];
        //console.log('question_type_name:')
        //console.log(question_type_name);
        let question_text = removeTipTapHTMLTags(question_html);
        let explanation_html = /*html*/`<p>A Standard English problem with these answer choices would fall under the ${question_type_name} category.</p>`;
        //console.log('explanation_html:')
        //console.log(explanation_html);
        const explanation_text = removeTipTapHTMLTags(explanation_html);
        let drill = {
            test_section: 'reading_writing',
            cb_domain: 'standard_english_conventions',
            cb_skill: category_cb_skills[category_tag],
            source: 'own',
            derivative_source: 'collegeboard',
            derivative_source_id: problem.source_question_id, 
            question_text: question_text,
            question_html: question_html,
            explanation_html: explanation_html,
            explanation_text: explanation_text,
            answer_type: 'multiple_choice',
            answer_choices: drillAnswerChoices,
            mult_choice_answer: category_answer_choices[category_tag],
            added_by_user: user_id,
            has_multiple_choice: true,
            mult_choice_answers: [category_answer_choices[category_tag]],
            allow_multiple_selection: false, 
            problem_type: 'drill',
        }
        //console.log('drill:')
        //console.log(JSON.stringify(drill));
        drills.push(drill);
    }
    console.log('drill count:')
    console.log(drills.length);
    
    // Insert drills into problems table and get their IDs
    const { data: insertedDrills, error: insertError } = await supabaseAdmin
        .from('problems')
        .insert(drills)
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
        name: 'Standard English Question Type Identification Practice',
        problems: drill_ids,
        created_by: user_id,
        problem_set_type: 'drill',
        text_id: 'sat-standard-english-question-type-identification',
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

export const createEnglishQuestionTypeProblemSetTask = task({
    id: "create-english-question-type-problem-set",
    run: createEnglishQuestionTypeProblemSet
})
