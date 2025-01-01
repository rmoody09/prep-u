<script setup>
    

    const process = {
        start: {
            question: "What is the main difference between answer choices?",
            options: ['punctuation', 'verb_form', 'misplaced_modifiers', 'apostrophes', 'pronouns'], 
            options_info: {
                punctuation: {
                    label: "Punctuation", 
                    id: "punctuation",
                    description: "The answer choices use different punctuation marks, or use them in different ways. There may be additional minor differences like the presence or absence of a conjunction."
                },
                verb_form: {
                    label: "Verb Form",
                    id: "verb_form",
                    description: "The answer choices all use different forms of the same verb, but otherwise are mostly the same. They might differ in tense, number, or other aspects of conjugation."
                },
                misplaced_modifiers: {
                    label: "Different Subjects",
                    id: "misplaced_modifiers",
                    description: "The answer choices will be longer than on most questions, and will usually contain nouns and verbs. The subject (the noun performing the main verb) will differ between choices, and the general ordering of the words will be different."
                },
                apostrophes: {
                    label: "Apostrophe Placement",
                    id: "apostrophes",
                    description: "The answer choices will differ in terms of where they do or don't place apostrophes. The might also differ in plurality and use of contractions vs possessive pronouns."
                },
                pronouns: {
                    label: "Different Pronouns",
                    id: "pronouns",
                    description: "The answer choices will differ in terms of which pronoun is used. The choices may also include possessive pronouns or contractions."
                }
            }
        },
        punctuation: {
            question: "Do any of the answer choices have a semicolon?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "is_semicolon",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "check_em_dash",
                    description: ""
                }
            }
        },
        is_semicolon: {
            question: "Are there any other semicolons in the passage (or multiple semicolons in this answer choice)?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "is_additional_semicolon",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "not_semicolon_list",
                    description: ""
                }
            }
        },
        is_additional_semicolon: {
            question: "Can the semicolons be interpreted as separating items in a list?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "is_semicolon_list",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "not_semicolon_list",
                    description: ""
                }
            }
        },
        is_semicolon_list: {
            question: "Is this the only answer choice with a semicolon?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "is_semicolon_list_only_choice",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "is_semicolon_list_not_only_choice",
                    description: ""
                }
            }
        },
        is_semicolon_list_only_choice: {
            is_correct: true,
            text: "The semicolon is correctly used to separate items in a list. This is the correct answer.", 
            yields_answer: true
        },
        is_semicolon_list_not_only_choice: {
            instructions: "Choose the answer choice that uses semicolons to separate the list items in a way in which the structure of the list items are most similar to each other.",
            yields_answer: true
        }, 
        not_semicolon_list: {
            text: "You have determined that the semicolon is not used to separate items in a list. The only other reason a semicolon would be appropriate is if it separates two complete sentences.",
            next_step: "check_semicolon_redundant"
        },
        check_semicolon_redundant: {
            question: "Are any other answer choices identical, but instead of a semicolon, they have either a period or a comma followed by a FANBOYS conjunction?",
            question_context: "If so, as far as the SAT is concerned, these answer choices would achieve the same effect of separating two complete sentences.",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "semicolon_redundant_with_other_choice",
                },
                no: {
                    label: "No",
                    id: "check_semicolon_left_complete",
                }
            }
        },
        semicolon_redundant_with_other_choice: {
            is_incorrect: true,
            text: "As far as the SAT is concerned, all these answer choices achieve the same effect. They can't all be right, so you can eliminate all of them.",
            next_step: "check_em_dash"
        },
        check_semicolon_left_complete: {
            question: "If you read the sentence leading up to the semicolon, is it a complete sentence?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "check_semicolon_right_complete",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "semicolon_left_incomplete",
                    description: ""
                }
            }
        },
        check_semicolon_right_complete: {
            question: "If you read the sentence after the semicolon, is it a complete sentence?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "semicolon_right_complete",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "semicolon_right_incomplete",
                    description: ""
                }
            }
        },
        semicolon_left_incomplete: {
            text: "The semicolon is not correctly used, so you can eliminate this answer choice.\n\nIf another answer choice is identical, but uses a colon instead of a semicolon, then it is also incorrect, so you can eliminate it as well.",
            is_incorrect: true,
            next_step: "check_em_dash"
        },
        semicolon_right_complete: {
            is_correct: true,
            text: "The semicolon is correctly used to separate two complete sentences. This is the correct answer.", 
            yields_answer: true
        },
        semicolon_right_incomplete: {
            text: "The sentence to the right of the semicolon is not a complete sentence. Therefore, the semicolon is not correctly used and the answer choice is incorrect.",
            is_incorrect: true,
            next_step: "check_em_dash"
        },
        check_em_dash: {
            question: "Do any of the remaining answer choices have an em dash?",
            question_context: "If there are multiple, pick one at a time to check.",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "is_em_dash",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "check_question_mark",
                    description: ""
                }
            }
        },
        is_em_dash: {
            question: "Is there a second em dash in the passage or the answer choice?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "is_additional_em_dash",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "no_additional_em_dash",
                    description: ""
                }
            }
        },
        is_additional_em_dash: {
            text: "Two em dashes can be used to separate a parenthetical element — extra information about the noun that comes before it — from the main clause. In fact, the previous sentence is an example of this.",
            question: "Can the text between the em dashes be interpreted as a parenthetical element?",
            question_context: "If so, you should be able to remove the content between the em dashes and the sentence would still work and retain the same essential meaning.",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "is_em_dash_parenthetical",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "is_em_dash_not_parenthetical",
                    description: ""
                }
            }
        },
        is_em_dash_parenthetical: {
            is_correct: true,
            text: "The em dash is correctly used to separate a parenthetical element. This is the correct answer.", 
            yields_answer: true
        },
        is_em_dash_not_parenthetical: {
            context: "The text between the em dashes is not a parenthetical element. Therefore, the em dash is not correctly used and the answer choice is incorrect.",
            is_incorrect: true,
            next_step: "check_em_dash"
        },
        no_additional_em_dash: {
            context: "If there are no other em dashes, then the em dash is not separating a parenthetical element in the middle of a sentence, but it could still be used to separate a complete sentence with an additional clause.",
            question: "Is the text to the left of the em dash a complete sentence?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "em_dash_left_complete",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "em_dash_left_incomplete",
                    description: ""
                }
            }
        },
        em_dash_left_complete: {
            is_correct: true,
            text: "The em dash is correctly used to separate a complete sentence with an additional clause. This is the correct answer.", 
            yields_answer: true
        },
        em_dash_left_incomplete: {
            text: "The em dash is not correctly used so you can eliminate this answer choice. You can also eliminate any answer choices that are identical but use a colon instead of an em dash.",
            is_incorrect: true,
            next_step: "check_em_dash"
        },
        em_dash_not_correct: {
            text: "The em dash is not correctly used. You can eliminate this answer choice.",
            next_step: "check_em_dash"
        },
        check_question_mark: {
            question: "Do any of the answer choices have a question mark?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "check_question_vs_statement_intuition",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "check_period",
                    description: ""
                }
            }
        },
        check_question_vs_statement_intuition: {
            text: "You can likely tell intuitively by reading the begining of the sentence leading up to the blank whether it is setting up a statement or a question. If you're not sure, we'll try to help guide you",
            question: "Does the sentence start off like a question or a statement?",
            options: ['question', 'statement', 'not_sure'],
            options_info: {
                question: {
                    label: "Question",
                    id: "is_question_phrasing",
                    description: ""
                },
                statement: {
                    label: "Statement",
                    id: "is_statement_phrasing",
                    description: ""
                },
                not_sure: {
                    label: "Not Sure",
                    id: "question_phrasing_not_sure",
                    description: ""
                }
            }
        },
        question_phrasing_not_sure: {
            text: "To determine whether this is a question or a statement, we want to look at the wording of the main clause of the sentence. If the sentence starts off with a dependent clause separated by a comma or emdash (like 'looking for an answer, ...'), then the main clause comes after the comma or emdash. If the main clause starts with a question word like 'who', 'what', 'when', 'where', 'why', 'which', or 'how' then it's phrased like a question. Or if it starts off with certain verbs like 'is', 'are', 'do', 'will', 'can', 'could', etc. then it's phrased like a question.",
            question: "Does the main clause begin as if it's a question?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "is_question_phrasing",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "is_statement_phrasing",
                    description: ""
                }
            }
        },
        is_question_phrasing: {
            instructions: "The sentence seems to be a question, so eliminate the options without a question mark. Among the ones remaining, choose the one that is phrased like a question. If you're not sure which one that is, we can help.",
            question: "Can you identify the correct answer choice?",
            options: ['yes', 'no'],
            options_info: {
                yes: {
                    label: "Yes",
                    id: "question_answer_choice_identified",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "question_answer_choice_unsure",
                    description: ""
                }
            }
        },
        is_statement_phrasing: {
            instructions: `The sentence seems to be a statement, so eliminate the options with a question mark. Among the ones remaining, choose the one that is phrased like a statement. If you're not sure which one that is, we can help.`,
            question: "Can you identify the correct answer choice?",
            options: ['yes', 'no'],
            options_info: {
                yes: {
                    label: "Yes",
                    id: "statement_answer_choice_identified",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "statement_answer_choice_unsure",
                    description: ""
                }
            }
        },
        question_answer_choice_identified: {
            is_correct: true,
            text: "You have identified the answer choice that correctly uses a question mark. This is the correct answer.", 
            yields_answer: true
        },
        question_answer_choice_unsure: {
            text: `Here are some things to look for to decide if the answer choices are phrased like statements or questions: \n\nIf you see a 'to be' verb or a verb like 'can' or 'could' before a noun or pronoun (like 'is he', 'will they', 'can John', 'did the car', etc.), then it's phrased like a question. If you see two consecutive verbs (like 'did see' or 'will know') then it's phrased like a statement. If you see two verbs separated by a noun or pronoun (like 'Did you see' or 'will they know') then it's phrased like a question.\n\nWith this guidance, choose the answer choice with a question mark that is phrased like a question.`,
            yields_answer: true
        },
        statement_answer_choice_identified: {
            is_correct: true,
            text: "You have identified the answer choice that is phrased and punctuated like a statement. This is the correct answer.", 
            yields_answer: true
        },
        statement_answer_choice_unsure: {
            text: `Here are some things to look for to decide if the answer choices are phrased like statements or questions: \n\nIf you see a 'to be' verb or a verb like 'can' or 'could' before a noun or pronoun (like 'is he', 'will they', 'can John', 'did the car', etc.), then it's phrased like a question. If you see two consecutive verbs (like 'did see' or 'will know') then it's phrased like a statement. If you see two verbs separated by a noun or pronoun (like 'Did you see' or 'will they know') then it's phrased like a question.\n\nWith this guidance, choose the answer choice without a question mark that is phrased like a statement.`,
            yields_answer: true
        },
        question_mark_not_correct: {
            text: "The question mark is not used correctly. You can eliminate this answer choice.",
            is_incorrect: true,
            next_step: "check_period"
        },
        check_period: {
            question: "Do any of the remaining answer choices have a period?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "is_period",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "check_colon",
                    description: ""
                }
            }
        }, 
        is_period: {
            question: "Is there a complete sentence to the left of the period?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "period_left_complete",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "period_left_incomplete",
                    description: ""
                }
            }
        },
        period_left_complete: {
            question: "Is the sentence to the right of the period a complete sentence?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "period_right_complete",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "period_not_correct",
                    description: ""
                }
            }
        },
        period_right_complete: {
            is_correct: true,
            text: "The period is correctly used to separate two complete sentences. This is the correct answer.", 
            yields_answer: true
        },
        period_not_correct: {
            instructions: "The period is not correctly used, so you can eliminate that answer choice.",
            question: "Do any remaining answer choices have a period?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "is_period",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "check_colon",
                    description: ""
                }
            }
        },
        check_colon: {
            question: "Do any of the remaining answer choices have a colon?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "is_colon",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "check_comma",
                    description: ""
                }
            }
        },
        is_colon: {
            question: "If you read the sentence leading up to the colon, is it a complete sentence?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "check_colon_necessary",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "colon_left_incomplete",
                    description: ""
                }
            }
        },
        check_colon_necessary: {
            question: "If you were to remove the colon, would the sentence still sound ok?",
            question_context: "When a colon is properly used, it's usually very obvious that the sentence doesn't sound right if you remove it.",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "colon_not_necessary",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "check_colon_right_run_on",
                    description: ""
                }
            }
        },
        colon_not_necessary: {
            text: "The colon is not necessary where it is used. You can eliminate this answer choice.",
            is_incorrect: true,
            next_step: "check_comma"
        },
        colon_left_complete: {
            question: "Is the sentence to the right of the colon a run-on sentence or comma splice?",
            question_context: "Basically, does it combine two complete sentences into a single sentence, without connecting them with a comma + FANBOYS conjunction?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "colon_right_bad",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "colon_right_good",
                    description: ""
                }
            }
        },
        check_colon_right_run_on: {
            question: "Is the sentence to the right of the colon a run-on sentence or comma splice?",
            question_context: "Basically, does it combine two complete sentences into a single sentence, without connecting them with a comma + FANBOYS conjunction?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "colon_right_bad",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "colon_right_good",
                    description: ""
                }
            }
        },
        colon_left_incomplete: {
            text: "The colon is not used correctly. You can eliminate this answer choice.",
            is_incorrect: true,
            next_step: "check_comma"
        },
        colon_right_bad: {
            text: "The sentence to the right of the colon is a run-on sentence or comma splice. Therefore, the colon is not correctly used so you can eliminate this answer choice.",
            is_incorrect: true,
            next_step: "check_comma"
        },
        colon_right_good: {
            is_correct: true,
            text: "The colon is correctly used to separate a complete sentence with an additional clause. This is the correct answer.", 
            yields_answer: true
        },
        colon_not_correct: {
            text: "The colon is not used correctly. You can eliminate this answer choice.",
            is_incorrect: true,
            next_step: "check_comma"
        },
        check_comma: {
            question: "Do any of the remaining answer choices have a comma?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "check_comma_before_that",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "punctuation_checked",
                    description: ""
                }
            }
        },
        check_comma_before_that: {
            question: "Does the comma come before the word 'that'?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "comma_is_before_that",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "check_comma_title_proper_noun_separation",
                    description: ""
                }
            }
        },
        comma_is_before_that: {
            text: "The word 'that' is typically used to start an essential cause needed for specification, and should not have a comma before it. You can eliminate this answer choice.",
            is_incorrect: true,
            next_step: "check_comma"
        },
        check_comma_title_proper_noun_separation: {
            question: "Does the comma come between a proper noun and a label/title used to describe that noun?",
            question_context: "Examples: 'scientist, Charles Darwin', 'president, Joe Biden', 'author, Stephen King'",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "comma_is_title_proper_noun_separation",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "check_comma_subject_verb_separation",
                    description: ""
                }
            }
        },
        comma_is_title_proper_noun_separation: {
            is_incorrect: true,
            text: "Commas should not come between a proper noun and a title/label used to describe that noun. You can eliminate this answer choice.", 
            next_step: "check_comma"
        },
        check_comma_subject_verb_separation: {
            question: "Does the comma come between a noun and the verb performed by that noun?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "comma_is_subject_verb_separation",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "check_comma_fanboys",
                    description: ""
                }
            }
        },
        comma_is_subject_verb_separation: {
            text: "You should never have a single comma between a noun and its verb (you wouldn't say \"The car, is parked in the driveway\"). However, sometimes a parenthetical element (extra information about the noun that is surrounded by two commas) can come between a noun and its verb and this is fine. For example, \"The car, which is red, is parked in the driveway.\"",
            question: "Is this comma part of a parenthetical element?",
            question_context: "If so, there should be a second comma that works with this comma to set off the parenthetical element, like in the example above.",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "comma_is_subject_verb_separation_extra_info",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "comma_is_improper_subject_verb_separation",
                    description: ""
                }
            }
        },
        comma_is_subject_verb_separation_extra_info: {
            is_correct: true,
            text: "The comma is correctly paired with another comma to form a parenthetical element. This is the correct answer.",
            yields_answer: true
        },
        comma_is_improper_subject_verb_separation: {
            is_incorrect: true,
            text: "There should never be a single comma between a noun and the verb performed by that noun. You can eliminate this answer choice.",
            next_step: "check_comma"
        },
        check_comma_fanboys: {
            question: "Is the comma followed by a FANBOYS conjunction?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "comma_is_fanboys",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "comma_check_non_essential_clause",
                    description: ""
                }
            }
        },
        comma_is_fanboys: {
            question: "Are the sentences to the left of the comma and to the right of the conjunction both complete sentences?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "comma_fanboys_complete_sentences",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "comma_fanboys_not_complete_sentences",
                    description: ""
                }
            }
        },
        comma_fanboys_complete_sentences: {
            is_correct: true,
            text: "The comma is correctly used with a FANBOYS conjunction to separate two complete sentences. This is the correct answer.", 
            yields_answer: true
        },
        comma_fanboys_not_complete_sentences: {
            text: "When a comma is followed by a FANBOYS conjunction, it should be used to separate two complete sentences. Since this is not the case, you can eliminate this answer choice.",
            is_incorrect: true,
            next_step: "check_comma"
        },
        comma_check_non_essential_clause: {
            next_step: "comma_check_beginning_non_essential_clause"
        },
        comma_check_beginning_non_essential_clause: {
            question: "Is the comma used to separate a non-essential clause at the beginning of a sentence?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "comma_is_beginning_non_essential_clause",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "comma_not_beginning_non_essential_clause",
                    description: ""
                }
            }
        },
        comma_is_beginning_non_essential_clause: {
            is_correct: true,
            text: "The comma is correctly used to separate a non-essential clause at the beginning of a sentence. This is the correct answer.", 
            yields_answer: true
        },
        comma_not_beginning_non_essential_clause: {
            context: "The comma is not used to separate a non-essential clause at the beginning of a sentence. It might still be used to separate a non-essential clause in the middle or at the end of a sentence.",
            next_step: "comma_check_middle_non_essential_clause"
        },
        comma_check_middle_non_essential_clause: {
            question: "Is the comma used, along with another comma, to separate a non-essential clause in the middle of a sentence?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "comma_is_middle_non_essential_clause",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "comma_not_middle_non_essential_clause",
                    description: ""
                }
            }
        },
        comma_is_middle_non_essential_clause: {
            is_correct: true,
            text: "The comma is correctly used to separate a non-essential clause in the middle of a sentence. This is the correct answer.", 
            yields_answer: true
        },
        comma_not_middle_non_essential_clause: {
            context: "The comma is not used to separate a non-essential clause in the middle of a sentence. It might still be used to separate a non-essential clause at the end of a sentence.",
            next_step: "comma_check_ending_non_essential_clause"
        },
        comma_check_ending_non_essential_clause: {
            question: "Is the comma used to separate a non-essential clause at the end of a sentence?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "comma_is_ending_non_essential_clause",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "comma_not_ending_non_essential_clause",
                    description: ""
                }
            }
        },
        comma_is_ending_non_essential_clause: {
            is_correct: true,
            text: "The comma is correctly used to separate a non-essential clause at the end of a sentence. This is the correct answer.", 
            yields_answer: true
        },
        comma_not_ending_non_essential_clause: {
            text: "The comma is not used to separate a non-essential clause. Therefore, the comma is not correctly used so you can eliminate this answer choice.",
            is_incorrect: true,
            next_step: "check_comma"
        },
        punctuation_checked: {
            text: "At this point, you should be left with only one answer choice. If there are multiple answer choices left, then you can use your intuition to choose the answer that sounds like it is grammatically correct.",
            yields_answer: true
        },
        verb_form: {
            next_step: "check_for_infinitive_verb"
        },
        check_for_infinitive_verb: {
            question: "Do any of the remaining answer choices have the word 'to' before the verb?",
            question_context: "If there are multiple, pick one at a time to assess.",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "is_infinitive_verb",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "check_for_ing_verb",
                    description: ""
                }
            }
        },
        is_infinitive_verb: {
            instructions: "Use the 'ear test' to determine if this option sounds right to you if you insert it in the passage. Your intuition will probably serve you well. Often the 'to' form comes after another verb, like 'I went to buy groceries', or 'I need to know'. Or it might come after an adjective, like 'I am glad to be included', or after the word 'how', like 'I know how to do it'.",
            question: "Does the sentence sound right if you insert it in the passage?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "infinitive_verb_ear_test_good",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "infinitive_verb_ear_test_bad",
                    description: ""
                }
            }
        },
        infinitive_verb_ear_test_good: {
            is_correct: true,
            text: "The infinitive form of the verb (that's the technical term for the 'to' form) fits in the passage. This is the correct answer.",
            yields_answer: true
        },
        infinitive_verb_ear_test_bad: {
            is_incorrect: true,
            text: "The infinitive form of the verb does not fit in the passage. You can eliminate this answer choice.",
            next_step: "check_for_infinitive_verb"
        },
        check_for_ing_verb: {
            bla: `Now we want to look for any "ing" verbs that aren't accompanied by a 'to be' verb. When preceded by a 'to be' verb ('is', 'are', 'was', 'were', etc.), an 'ing' verb can act as the main verb, but otherwise it cannot. For example, 'I am going to the store' is correct, but 'I going to the store' is not.`,
            question: "Do any of the remaining answer choices have a verb ending in 'ing' that isn't directly after another verb?",
            question_context: `If it's right after another verb, like 'is planning', 'started running', 'were playing', etc. then select "No".\nIf there are multiple, pick one at a time to assess.`,
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "check_ing_verb_other_main_verb",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "check_subject_verb_agreement",
                    description: ""
                }
            }
        },
        check_ing_verb_other_main_verb: {
            question: "Outside of the blank, is there another verb in the sentence that acts as a main verb performed by the subject?",
            options: ['yes', 'no', 'not_sure'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "check_ing_verb_as_noun",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "ing_verb_no_other_main_verb",
                    description: ""
                },
                not_sure: {
                    label: "Not sure",
                    id: "check_ing_verb_as_noun",
                    description: ""
                }
            }
        },
        ing_verb_no_other_main_verb: {
            text: "The 'ing' verb cannot act as the main verb in the sentence. If there is no other main verb in the sentence, then the answer choice needs to fill that role. You can eliminate this answer choice, and any other choices that have an 'ing' verb without a helper verb immediately before them.",
            is_incorrect: true,
            next_step: "check_subject_verb_agreement"
        },
        check_ing_verb_as_noun: {
            text: "Sometimes 'ing' can function as nouns, referring to the act of doing that thing. For example, 'Running is Jane's favorite activity; she likes it much better than biking.' In that sentence, running and biking are both used as nouns.",
            question: "Does the sentence make sense if you read it interpreting the 'ing' verb as a noun?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "ing_is_noun",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "check_ing_start_of_clause",
                    description: ""
                }
            }
        },
        ing_is_noun: {
            is_correct: true,
            text: "The 'ing' verb is correctly used as a noun. This is the correct answer.",
            yields_answer: true
        },
        check_ing_start_of_clause: {
            question: "Is the 'ing' verb either the first word in a sentence or the first word after a comma?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "ing_is_start_of_clause",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "check_ing_verb_adjective_before_noun",
                    description: ""
                }
            }
        },
        ing_is_start_of_clause: {
            text: `'ing' verbs can often start non-essential clauses used to describe a noun. For example, "Walking down the street, Mike noticed a new restaurant." Or "Mike, walking down the street, noticed a new restaurant." Or "Kevin called the bet, hoping he had the better hand."`,
            question: "Is the 'ing' verb used as part of a non-essential clause to describe a noun?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "ing_is_non_essential_clause",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "ing_not_non_essential_clause",
                    description: ""
                }
            }
        },
        ing_is_non_essential_clause: {
            is_correct: true,
            text: "The 'ing' verb is correctly used as part of a non-essential clause to describe a noun. This is the correct answer.",
            yields_answer: true
        },
        check_ing_verb_adjective_before_noun: {
            text: `"ing" verbs can also be used as adjectives directly before a noun. For example, "The trophy was given to the winning team."`,
            question: "Is the 'ing' verb used as an adjective directly before a noun?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "ing_is_adjective_before_noun",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "check_ing_verb_descriptor_after_noun",
                    description: ""
                }
            }
        },
        ing_is_adjective_before_noun: {
            is_correct: true,
            text: "The 'ing' verb is correctly used as an adjective directly before a noun. This is the correct answer.",
            yields_answer: true
        },
        check_ing_verb_descriptor_after_noun: {
            text: `"ing" verbs can also be used after a noun to describe or specify the noun. For example, "The students studying hard for the test will do well" (specifies which students will do well). Or, "I watched the water running down the mountain." (describes what the water is doing). `,
            question: "Does the 'ing' come immediately after a noun that it is describing or specifying?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "ing_is_descriptor_after_noun",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "ing_verb_incorrect",
                    description: ""
                }
            }
        },
        ing_is_descriptor_after_noun: {
            is_correct: true,
            text: "The 'ing' verb is correctly after a noun to describe or specify the noun. This is the correct answer.",
            yields_answer: true
        },
        ing_verb_incorrect: {
            is_incorrect: true,
            text: "The 'ing' does not seem to be used correctly. You can eliminate this answer choice, unless your intuition tells you it's correct for a reason we didn't cover.",
            next_step: "check_for_ing_verb"
        },
        check_subject_verb_agreement: {
            instructions: "Try the 'it' test to determine if the question is testing subject verb agreement. Try using the word 'it' before the verb in each answer choice, and see if it sounds correct. If there is one outlier (it sounds good in 3 but not 1, or it sounds good in 1 but not 3), then there's a good chance it's testing you on subject verb agreement and the correct answer is the outlier.",
            question: "Does the 'it' test yield a single outlier?",
            options: ['it_test_single_valid_outlier', 'it_test_single_invalid_outlier', 'no'], 
            options_info: {
                it_test_single_valid_outlier: {
                    label: "Yes - works in 1 but not other 3",
                    id: "it_test_single_valid_outlier",
                    description: ""
                },
                it_test_single_invalid_outlier: {
                    label: "Yes - works in 3 but not 1",
                    id: "it_test_single_invalid_outlier",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "check_verb_tense",
                    description: ""
                }
            }
        },
        it_test_single_valid_outlier: {
            instructions: "The 'it' test yielded a single outlier. This suggests there is a good chance that the outlier is the correct answer, but we should make sure. Carefully identify the noun in the passage that is performing the verb. Beware that it often isn't the closest noun to the verb in the sentence. Now identify whether the noun is plural or singular.",
            question: "Is the noun plural or singular?",
            options: ['plural', 'singular'],
            options_info: {
                plural: {
                    label: "Plural",
                    id: "it_test_single_valid_outlier_plural",
                    description: ""
                },
                singular: {
                    label: "Singular",
                    id: "it_test_single_valid_outlier_singular",
                    description: ""
                }
            }
        },
        it_test_single_invalid_outlier: {
            instructions: "The 'it' test yielded a single outlier. This suggests there is a good chance that the outlier is the correct answer, but we should make sure. Carefully identify the noun in the passage that is performing the verb. Beware that it often isn't the closest noun to the verb in the sentence. Now identify whether the noun is plural or singular.",
            question: "Is the noun plural or singular?",
            options: ['plural', 'singular'],
            options_info: {
                plural: {
                    label: "Plural",
                    id: "it_test_single_invalid_outlier_plural",
                    description: ""
                },
                singular: {
                    label: "Singular",
                    id: "it_test_single_invalid_outlier_singular",
                    description: ""
                }
            }
        },
        it_test_single_valid_outlier_plural: {
            instructions: "The noun is plural, but the verb in the answer choice yielded by the 'it' test is singular. It's testing something other than subject verb agreement. You can eliminate the answer choice yielded by the 'it' test before moving on.",
            next_step: "check_verb_tense"
        },
        it_test_single_invalid_outlier_plural: {
            text: "The 'it' test yielded an answer with a plural verb. You confirmed that the corresponding noun is plural, so this is the correct answer!",
            is_correct: true,
            yields_answer: true
        },
        it_test_single_valid_outlier_singular: {
            text: "The 'it' test yielded an answer with a singular verb. You confirmed that the corresponding noun is singular, so this is the correct answer!",
            is_correct: true,
            yields_answer: true
        },
        it_test_single_invalid_outlier_singular: {
            text: "The noun is singular, but the verb in the answer choice yielded by the 'it' test is plural. It's testing something other than subject verb agreement. You can eliminate the answer choice yielded by the 'it' test before moving on.",
            next_step: "check_verb_tense"
        },
        it_test_no_single_outlier: {
            text: "The 'it' test yielded no outliers. This suggests that the question is not testing you on subject verb agreement, so it is probably testing you on the proper verb tense.",
            next_step: "check_verb_tense"
        },
        check_verb_tense_prev: {
            instructions: `Carefully identify what tense the verb should be. Here are some clues to look for:\n\nLook at the tense of other verbs in the sentence or adjacent sentences - generally you'll want to use the same tense, but beware that sometimes the tense can shift in a passage.\n\nLook for words and phrases that suggest the timeframe: things like "In 1900,", "Previously," "Before..." suggest past tense, while things like "Currently,", "Now,", "Today,", etc. suggest present tense, while things like "Going forward,", "Next time", "By 2060," suggest future tense.\n\nPick the answer choice that uses the correct tense. If in doubt, lean toward the simpler form of the verb (like 'produces' instead of 'is producing')`,
            yields_answer: true
        },
        check_verb_tense: {
            text: `It looks like you're being tested on verb tense. Carefully identify what tense the verb should be. Here are some clues to look for:\n\nLook at the tense of other verbs in the sentence or adjacent sentences; generally you'll want to use the same tense, but beware that sometimes the tense can shift in a passage.\n\nLook for words and phrases that suggest the timeframe: things like "In 1900,", "Previously," "Before..." suggest past tense, while things like "Currently,", "Now,", "Today,", etc. suggest present tense, while things like "Going forward,", "Next time", "By 2060," suggest future tense.`,
            question: "What tense should the verb be?",
            options: ['past', 'present', 'future'],
            options_info: {
                past: {
                    label: "Past",
                    id: "verb_tense_past",
                    description: ""
                },
                present: {
                    label: "Present",
                    id: "verb_tense_present",
                    description: ""
                },
                future: {
                    label: "Future",
                    id: "verb_tense_future",
                    description: ""
                }
            }
        },
        verb_tense_past: {
            text: "Select the answer choice that uses the verb in the past tense. If there are multiple that seem to be past tense, lean toward the simpler form (like 'produced' instead of 'had produced') unless the simpler option doesn't sound right.",
            yields_answer: true
        },
        verb_tense_present: {
            text: "Select the answer choice that uses the verb in the present tense. If there are multiple that seem to be present tense, lean toward the simpler form (like 'produces' instead of 'is producing' or 'has been producing') unless the simpler option doesn't sound right.",
            yields_answer: true
        },
        verb_tense_future: {
            text: "Select the answer choice that uses the verb in the future tense. If there are multiple that seem to be future tense, lean toward the simpler form (like 'will produce' instead of 'will have produced' or 'will be producing') unless the simpler option doesn't sound right.",
            yields_answer: true
        },
        pronouns: {
            question: "Do the pronouns in any of the remaining answer choices have apostrophes?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "pronouns_have_apostrophes",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "pronouns_no_apostrophes",
                    description: ""
                }
            }
        },
        pronouns_have_apostrophes: {
            instructions: "If a pronoun has an apostrophe, then it is a contraction (two words combined into one). For example, \"it's\" is a contraction for 'it is' and \"they're\" is a contraction for 'they are'. Break the contraction into its two words, and check if the sentence makes sense when you read it that way.",
            question: "Does the sentence make sense when you read it with the contraction broken into two words?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "pronoun_contraction_correct",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "pronoun_contraction_incorrect",
                    description: ""
                }
            }
        },
        pronoun_contraction_correct: {
            is_correct: true,
            text: "The contraction is correctly used. This is the correct answer.",
            yields_answer: true
        },
        pronoun_contraction_incorrect: {
            is_incorrect: true,
            text: "The contraction is not correctly used. You can eliminate this answer choice.",
            next_step: "pronouns"
        },
        pronouns_no_apostrophes: {
            instructions: "Carefully identify the noun (or nouns) in the passage that the pronoun is referring to. Often, it's in the sentence before the pronoun.",
            question: "Is the noun referred to by the pronoun plural or singular?",
            options: ['plural', 'singular'], 
            options_info: {
                plural: {
                    label: "Plural",
                    id: "pronoun_plural",
                    description: ""
                },
                singular: {
                    label: "Singular",
                    id: "pronoun_singular",
                    description: ""
                }
            }
        },
        pronoun_plural: {
            instructions: "We've determined the pronoun should be plural, so eliminate any answer choices that are singular forms (pronouns like 'it', 'its', 'me', 'my', 'she', 'his' etc.)",
            next_step: "pronoun_plural_check_possessive"
        },
        pronoun_plural_check_possessive: {
            instructions: "Check if the pronoun should be possessive. Right after the pronoun, is there a thing that belongs to the noun, or a trait or characteristic that the noun has? If so, then the pronoun should be possessive.",
            question: "Should the pronoun be possessive?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "pronoun_plural_possessive",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "pronoun_plural_not_possessive",
                    description: ""
                }
            }
        },
        pronoun_singular: {
            instructions: "We've determined the pronoun should be singular, so eliminate any answer choices that are plural forms (pronouns like 'they', 'them', 'their', 'our', 'us', etc.)",
            next_step: "pronoun_singular_check_possessive"
        },
        pronoun_singular_check_possessive: {
            instructions: "Check if the pronoun should be possessive. Right after the pronoun, is there a thing that belongs to the noun, or a trait or characteristic that the noun has? If so, then the pronoun should be possessive.",
            question: "Should the pronoun be possessive?",
            options: ['yes', 'no'], 
            options_info: {
                yes: {
                    label: "Yes",
                    id: "pronoun_singular_possessive",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "pronoun_singular_not_possessive",
                    description: ""
                }
            }  
        },
        pronoun_plural_possessive: {
            instructions: "Select the answer choice with a pronoun that is both plural and possessive. This could include words such as 'their', 'our', or 'whose', but would not include words like 'its' or 'his' or 'my'. There should not be an apostrophe in the correct answer. If there are multiple that satisfy this condition, then your intuition should be able to tell you which one sounds right.",
            yields_answer: true
        },
        pronoun_plural_not_possessive: {
            instructions: "Select the answer choice with a pronoun that is plural and not possessive. This could include words such as 'they', 'we', or 'those', but would not include words like 'it' or 'she' or 'me'. There should not be an apostrophe in the correct answer. If there are multiple that satisfy this condition, then your intuition should be able to tell you which one sounds right.",
            yields_answer: true
        },
        pronoun_singular_possessive: {
            instructions: "Select the answer choice with a pronoun that is singular and possessive. This could include words such as 'its', 'her', 'his', or 'whose', but would not include words like 'their', 'our' or 'your'. There should not be an apostrophe in the correct answer. If there are multiple that satisfy this condition, then your intuition should be able to tell you which one sounds right.",
            yields_answer: true
        },
        pronoun_singular_not_possessive: {
            instructions: "Select the answer choice with a pronoun that is singular and not possessive. This could include words such as 'it', 'she', or 'he', but would not include words like 'they', 'them' or 'us'. If there are multiple that satisfy this condition, then your intuition should be able to tell you which one sounds right.",
            yields_answer: true
        },
        misplaced_modifiers: {
            instructions: "This sentence probably starts with an introductory clause that describes someone or something (e.g. 'Walking down the street,' or 'Dressed in black,' etc.). Carefully identify the noun in the passage that is being described by the introductory clause. The correct answer should have this noun being the subject of the sentence. There will only be one answer choice that satisfies this condition. If two answer choices have the same subject, then they are both wrong. Watch out for answer choices that start off with the noun you have in mind, but in possessive form (e.g. 'John's house' instead of just 'John'). These are not correct - we would want John himself to be the subject, not his house.",
            yields_answer: true
        },
        apostrophes: {
            next_step: "apostrophe_first_word_check_if_pronoun"
        },
        apostrophe_first_word_check_if_pronoun: {
            instructions: "There are usually two words that will differ across answer choices. Let's start with the first one.",
            question: "Is the first word in question a pronoun or a regular noun?",
            options: ['pronoun', 'noun'],
            options_info: {
                pronoun: {
                    label: "Pronoun",
                    id: "apostrophe_first_word_pronoun",
                    description: ""
                },
                noun: {
                    label: "Noun",
                    id: "apostrophe_first_word_noun",
                    description: ""
                }
            }
        },
        apostrophe_first_word_pronoun: {
            text: "A pronoun should never end in an apostrophe, so eliminate any choices where it ends in an apostrophe.",
            question: "Are there any remaining choices where the pronoun has an apostrophe?",
            options: ['yes', 'no'],
            options_info: {
                yes: {
                    label: "Yes",
                    id: "apostrophe_first_word_pronoun_has_apostrophe",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "apostrophe_first_word_pronoun_check_plural",
                    description: ""
                }
            }
        },
        apostrophe_first_word_pronoun_has_apostrophe: {
            text: "Any pronouns that have apostrophes are contractions (two words combined into one). For example, \"it's\" is a contraction for 'it is' and \"they're\" is a contraction for 'they are'. If you read the sentence with the contraction broken into two words, does it sound right?",
            options: ['yes', 'no'],
            options_info: {
                yes: {
                    label: "Yes",
                    id: "apostrophe_first_word_contraction_correct",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "apostrophe_first_word_contraction_incorrect",
                    description: ""
                }
            }
        },
        apostrophe_first_word_contraction_correct: {
            text: "The contraction is correctly used. Keep the answer choices that have the appropriate contraction, and eliminate the other ones.",
            next_step: "apostrophe_second_word"
        },
        apostrophe_first_word_contraction_incorrect: {
            text: "The first word doesn't make sense as a contraction, so eliminate any choices where it has an apostrophe. Next we'll check whether it should be singular or plural.",
            next_step: "apostrophe_first_word_pronoun_check_plural"
        },
        apostrophe_first_word_pronoun_check_plural: {
            question: "Does the pronoun represent something that is singular or plural?",
            options: ['singular', 'plural'],
            options_info: {
                singular: {
                    label: "Singular",
                    id: "apostrophe_first_word_pronoun_singular",
                    description: ""
                },
                plural: {
                    label: "Plural",
                    id: "apostrophe_first_word_pronoun_plural",
                    description: ""
                }
            }
        },
        apostrophe_first_word_pronoun_singular: {
            text: "The first word should be a singular pronoun. Eliminate any answer choices that are plural forms (like they, them, their, our, us, etc.)",
            next_step: "apostrophe_first_word_pronoun_singular_check_possessive"
        },
        apostrophe_first_word_pronoun_singular_check_possessive: {
            text: "Check if the first word should be possessive. Right after the pronoun, is there a thing that belongs to the noun, or a trait or characteristic that it has? If so, then the pronoun should be possessive.",
            question: "Should the pronoun be possessive?",
            options: ['yes', 'no'],
            options_info: {
                yes: {
                    label: "Yes",
                    id: "apostrophe_first_word_pronoun_singular_possessive",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "apostrophe_first_word_pronoun_singular_not_possessive",
                    description: ""
                }
            }
        },
        apostrophe_first_word_pronoun_singular_possessive: {
            text: "The first word should be a singular possessive pronoun. Eliminate any answer choices that are not possessive (like 'it', 'me', 'I', 'she', 'you', etc.)",
            next_step: "apostrophe_second_word"
        },
        apostrophe_first_word_pronoun_singular_not_possessive: {
            text: "The first word should be a singular pronoun that is not possessive. Eliminate any answer choices that are possessive (like 'its', 'my', 'her', 'your', etc.)",
            next_step: "apostrophe_second_word"
        },

        apostrophe_first_word_pronoun_plural: {
            text: "The first word should be a plural pronoun. Eliminate answer choices with singular forms (like 'it', 'its', 'me', 'my', 'she', 'his', etc.)",
            next_step: "apostrophe_first_word_pronoun_plural_check_possessive"
        },
        apostrophe_first_word_pronoun_plural_check_possessive: {
            text: "Check if the first word should be possessive. Right after the pronoun, is there a thing that belongs to the noun, or a trait or characteristic that it has? If so, then the pronoun should be possessive.",
            question: "Should the pronoun be possessive?",
            options: ['yes', 'no'],
            options_info: {
                yes: {
                    label: "Yes",
                    id: "apostrophe_first_word_pronoun_plural_possessive",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "apostrophe_first_word_pronoun_plural_not_possessive",
                    description: ""
                }
            }
        },
        apostrophe_first_word_pronoun_plural_possessive: {
            text: "The first word should be a plural possessive pronoun. Eliminate any answer choices that are not possessive (eliminate options like 'they', 'we', 'those' 'us', and keep options like 'their', 'our', 'theirs', etc.)",
            next_step: "apostrophe_second_word"
        },
        apostrophe_first_word_pronoun_plural_not_possessive: {
            text: "The first word should be a plural pronoun that is not possessive. Eliminate any answer choices that are possessive (eliminate options like 'their', 'our', 'your', etc. and keep options like 'they', 'we', 'them', 'us', etc.)",
            next_step: "apostrophe_second_word"
        },

        apostrophe_first_word_noun: {
            question: "Should this noun be possessive?",
            question_context: "If the text describes something that belongs to the noun, or is a characteristic of it, then it should be possessive.",
            options: ['yes', 'no'],
            options_info: {
                yes: {
                    label: "Yes",
                    id: "apostrophe_first_word_noun_possessive",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "apostrophe_first_word_noun_not_possessive",
                    description: ""
                }
            }
        },
        apostrophe_first_word_noun_possessive: {
            text: "This word should be a possessive noun. Any nouns that are possessive will have an apostrophe, so eliminate any options without apostrophes in this word.",
            next_step: "apostrophe_first_word_noun_possessive_check_plural"
        },
        apostrophe_first_word_noun_not_possessive: {
            text: "This word should not be possessive. Eliminate any options with apostrophes in this word.",
            next_step: "apostrophe_first_word_noun_not_possessive_check_plural"
        },
        apostrophe_first_word_noun_possessive_check_plural: {
            question: "Does this noun represent something that is singular or plural?",
            options: ['singular', 'plural'],
            options_info: {
                singular: {
                    label: "Singular",
                    id: "apostrophe_first_word_noun_possessive_singular",
                    description: ""
                },
                plural: {
                    label: "Plural",
                    id: "apostrophe_first_word_noun_possessive_plural",
                    description: ""
                }
            }
        },
        apostrophe_first_word_noun_possessive_plural: {
            text: "This noun should be both possessive and plural. If the normal plural form of the noun ends in 's' (like 'eggs') then the word should end in an 's' followed by an apostrophe (like \"the eggs' shells\"). If the normal plural form of the noun does not end in 's' (like 'people') then the word should end in an apostrophe followed by an 's' (like \"the people's clothing\"). Eliminate the answer choices that don't use the plural possessive form of this noun.",
            next_step: "apostrophe_second_word"
        },
        apostrophe_first_word_noun_possessive_singular: {
            text: "This noun should be singular and possessive. This means that the word should probably end in an apostrophe followed by an 's' (like \"the dog's fur\"). However, if the singular form of the noun already ends in 's' (like 'circus'), then the word should end with an apostrophe after the 's' (like \"the circus' ringmaster\"). Eliminate the answer choices that don't use the proper singular possessive form of this noun.",
            next_step: "apostrophe_second_word"
        },
        apostrophe_first_word_noun_not_possessive_check_plural: {
            question: "Does this noun represent something that is singular or plural?",
            options: ['singular', 'plural'],
            options_info: {
                singular: {
                    label: "Singular",
                    id: "apostrophe_first_word_noun_not_possessive_singular",
                    description: ""
                },
                plural: {
                    label: "Plural",
                    id: "apostrophe_first_word_noun_not_possessive_plural",
                    description: ""
                }
            }
        },
        apostrophe_first_word_noun_not_possessive_singular: {
            text: "The first word should be non-possessive noun that is singular. Eliminate any answer choices that are plural forms (like 'they', 'them', 'we', 'us' etc.)",
            next_step: "apostrophe_second_word"
        },
        apostrophe_first_word_noun_not_possessive_plural: {
            text: "The first word should be non-possessive noun that is plural. Eliminate any answer choices that are singular forms (like 'it', 'me', 'I', 'she', etc.)",
            next_step: "apostrophe_second_word"
        },
        apostrophe_second_word: {
            next_step: "apostrophe_second_word_check_if_pronoun"
        },
        apostrophe_second_word_check_if_pronoun: {
            question: "Is the second word that varies between answer choices a pronoun or a regular noun?",
            options: ['pronoun', 'noun'],
            options_info: {
                pronoun: {
                    label: "Pronoun",
                    id: "apostrophe_second_word_pronoun",
                    description: ""
                },
                noun: {
                    label: "Noun",
                    id: "apostrophe_second_word_noun",
                    description: ""
                }
            }
        },
        apostrophe_second_word_pronoun: {
            text: "A pronoun should never end in an apostrophe, so eliminate any choices where it ends in an apostrophe.",
            question: "Are there any remaining choices where the pronoun has an apostrophe?",
            options: ['yes', 'no'],
            options_info: {
                yes: {
                    label: "Yes",
                    id: "apostrophe_second_word_pronoun_has_apostrophe",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "apostrophe_second_word_pronoun_check_plural",
                    description: ""
                }
            }
        },
        apostrophe_second_word_pronoun_has_apostrophe: {
            text: "Any pronouns that have apostrophes are contractions (two words combined into one). For example, \"it's\" is a contraction for 'it is' and \"they're\" is a contraction for 'they are'. If you read the sentence with the contraction broken into two words, does it sound right?",
            options: ['yes', 'no'],
            options_info: {
                yes: {
                    label: "Yes",
                    id: "apostrophe_second_word_contraction_correct",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "apostrophe_second_word_contraction_incorrect",
                    description: ""
                }
            }
        },
        apostrophe_second_word_contraction_correct: {
            text: "The contraction is correctly used. Keep the answer choices that have the appropriate contraction, and eliminate the other ones.",
            next_step: "apostrophe_second_word"
        },
        apostrophe_second_word_contraction_incorrect: {
            text: "The second word doesn't make sense as a contraction, so eliminate any choices where it has an apostrophe. Next we'll check whether it should be singular or plural.",
            next_step: "apostrophe_second_word_pronoun_check_plural"
        },
        apostrophe_second_word_pronoun_check_plural: {
            question: "Does the pronoun represent something that is singular or plural?",
            options: ['singular', 'plural'],
            options_info: {
                singular: {
                    label: "Singular",
                    id: "apostrophe_second_word_pronoun_singular",
                    description: ""
                },
                plural: {
                    label: "Plural",
                    id: "apostrophe_second_word_pronoun_plural",
                    description: ""
                }
            }
        },
        apostrophe_second_word_pronoun_singular: {
            text: "The second word should be a singular pronoun. Eliminate any answer choices that are plural forms (like they, them, their, our, us, etc.)",
            next_step: "apostrophe_second_word_pronoun_singular_check_possessive"
        },
        apostrophe_second_word_pronoun_singular_check_possessive: {
            text: "Check if the second word should be possessive. Right after the pronoun, is there a thing that belongs to the noun, or a trait or characteristic that it has? If so, then the pronoun should be possessive.",
            question: "Should the pronoun be possessive?",
            options: ['yes', 'no'],
            options_info: {
                yes: {
                    label: "Yes",
                    id: "apostrophe_second_word_pronoun_singular_possessive",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "apostrophe_second_word_pronoun_singular_not_possessive",
                    description: ""
                }
            }
        },
        apostrophe_second_word_pronoun_singular_possessive: {
            text: "The second word should be a singular possessive pronoun. Eliminate any answer choices that are not possessive (like 'it', 'me', 'I', 'she', 'you', etc.)",
            next_step: "apostrophe_second_word"
        },
        apostrophe_second_word_pronoun_singular_not_possessive: {
            text: "The second word should be a singular pronoun that is not possessive. Eliminate any answer choices that are possessive (like 'its', 'my', 'her', 'your', etc.)",
            next_step: "apostrophe_second_word"
        },

        apostrophe_second_word_pronoun_plural: {
            text: "The second word should be a plural pronoun. Eliminate answer choices with singular forms (like 'it', 'its', 'me', 'my', 'she', 'his', etc.)",
            next_step: "apostrophe_second_word_pronoun_plural_check_possessive"
        },
        apostrophe_second_word_pronoun_plural_check_possessive: {
            text: "Check if the second word should be possessive. Right after the pronoun, is there a thing that belongs to the noun, or a trait or characteristic that it has? If so, then the pronoun should be possessive.",
            question: "Should the pronoun be possessive?",
            options: ['yes', 'no'],
            options_info: {
                yes: {
                    label: "Yes",
                    id: "apostrophe_second_word_pronoun_plural_possessive",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "apostrophe_second_word_pronoun_plural_not_possessive",
                    description: ""
                }
            }
        },
        apostrophe_second_word_pronoun_plural_possessive: {
            text: "The second word should be a plural possessive pronoun. Eliminate any answer choices that are not possessive (eliminate options like 'they', 'we', 'those' 'us', and keep options like 'their', 'our', 'theirs', etc.)",
            yields_answer: true,
        },
        apostrophe_second_word_pronoun_plural_not_possessive: {
            text: "The second word should be a plural pronoun that is not possessive. Eliminate any answer choices that are possessive (eliminate options like 'their', 'our', 'your', etc. and keep options like 'they', 'we', 'them', 'us', etc.)",
            yields_answer: true,
        },

        apostrophe_second_word_noun: {
            question: "Should this noun be possessive?",
            question_context: "If the text describes something that belongs to the noun, or is a characteristic of it, then it should be possessive.",
            options: ['yes', 'no'],
            options_info: {
                yes: {
                    label: "Yes",
                    id: "apostrophe_second_word_noun_possessive",
                    description: ""
                },
                no: {
                    label: "No",
                    id: "apostrophe_second_word_noun_not_possessive",
                    description: ""
                }
            }
        },
        apostrophe_second_word_noun_possessive: {
            text: "This word should be a possessive noun. Any nouns that are possessive will have an apostrophe, so eliminate any options without apostrophes in this word.",
            next_step: "apostrophe_second_word_noun_possessive_check_plural"
        },
        apostrophe_second_word_noun_not_possessive: {
            text: "This word should not be possessive. Eliminate any options with apostrophes in this word.",
            next_step: "apostrophe_second_word_noun_not_possessive_check_plural"
        },
        apostrophe_second_word_noun_possessive_check_plural: {
            question: "Does this noun represent something that is singular or plural?",
            options: ['singular', 'plural'],
            options_info: {
                singular: {
                    label: "Singular",
                    id: "apostrophe_second_word_noun_possessive_singular",
                    description: ""
                },
                plural: {
                    label: "Plural",
                    id: "apostrophe_second_word_noun_possessive_plural",
                    description: ""
                }
            }
        },
        apostrophe_second_word_noun_possessive_plural: {
            text: "This noun should be both possessive and plural. If the normal plural form of the noun ends in 's' (like 'eggs') then the word should end in an 's' followed by an apostrophe (like \"the eggs' shells\"). If the normal plural form of the noun does not end in 's' (like 'people') then the word should end in an apostrophe followed by an 's' (like \"the people's clothing\"). Eliminate the answer choices that don't use the plural possessive form of this noun.",
            yields_answer: true,
        },
        apostrophe_second_word_noun_possessive_singular: {
            text: "This noun should be singular and possessive. This means that the word should probably end in an apostrophe followed by an 's' (like \"the dog's fur\"). However, if the singular form of the noun already ends in 's' (like 'circus'), then the word should end with an apostrophe after the 's' (like \"the circus' ringmaster\"). Eliminate the answer choices that don't use the proper singular possessive form of this noun.",
            yields_answer: true,
        },
        apostrophe_second_word_noun_not_possessive_check_plural: {
            question: "Does this noun represent something that is singular or plural?",
            options: ['singular', 'plural'],
            options_info: {
                singular: {
                    label: "Singular",
                    id: "apostrophe_second_word_noun_not_possessive_singular",
                    description: ""
                },
                plural: {
                    label: "Plural",
                    id: "apostrophe_second_word_noun_not_possessive_plural",
                    description: ""
                }
            }
        },
        apostrophe_second_word_noun_not_possessive_singular: {
            text: "The second word should be non-possessive noun that is singular. Eliminate any answer choices that are plural forms (for most nouns, the plural form is the form that adds an 's' to the end of the word)",
            yields_answer: true,
        },
        apostrophe_second_word_noun_not_possessive_plural: {
            text: "The second word should be non-possessive noun that is plural. Eliminate any answer choices that are singular forms (for most nouns, the singular form is the form does not add an 's' to the end of the word)",
            yields_answer: true,
        },

    }

    const current_step = ref('start');

    const getNextStep = (step) => {
        console.log('getNextStep');
        console.log(step);
        let next_step = step;
        while (true) {
            let next_step_info = process[next_step];
            if (next_step_info.text || next_step_info.question || next_step_info.instructions) {
                break;
            }
            if (next_step_info.next_step) {
                next_step = next_step_info.next_step;
            } else {
                break;
            }
        }
        return next_step;
    }

    const selectOption = (option) => {
        let step_info = process[current_step.value];
        let next_step = getNextStep(step_info.options_info[option].id);
        /*
        let next_step = step_info.options_info[option].id;
        while (true) {
            let next_step_info = process[next_step];
            if (next_step_info.text || next_step_info.question || next_step_info.instructions) {
                break;
            }
            if (next_step_info.next_step) {
                next_step = next_step_info.next_step;
            } else {
                break;
            }
        }
        */

        current_step.value = next_step;
    }

    const nextStepClicked = () => {
        let step_info = process[current_step.value];
        let next_step = getNextStep(step_info.next_step);
        current_step.value = next_step;
    }
</script>

<template>
    <div class="w-[800px] max-w-full">
        <div class="inline-block border border-gray-200 rounded-md p-4" :class="{ 'bg-primary-50': process[current_step].yields_answer }">
            <div v-if="process[current_step].instructions" class="pb-2 whitespace-pre-wrap">
                {{ process[current_step].instructions }}
            </div>
            <div v-if="process[current_step].text" class="pb-2 whitespace-pre-wrap">
                {{ process[current_step].text }}
            </div>
            <div v-if="process[current_step].question">
                <div class="text-lg font-semibold pb-2">
                    {{ process[current_step].question }}
                    <div v-if="process[current_step].question_context" class="font-normal text-sm text-gray-500 pt-[2px] whitespace-pre-wrap">
                        {{ process[current_step].question_context }}
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <button @click="selectOption(option)" v-for="option in process[current_step].options" :key="option" class="process-step-option-button flex flex-row justify-between items-center bg-gray-100 rounded-md p-2 border border-gray-200 hover:bg-primary-50">
                        <span class="text-left">
                            <div class="process-step-option-button-label font-semibold">{{ process[current_step].options_info[option].label }}</div>
                            <div class="process-step-option-button-description text-sm pt-1 text-gray-800">{{ process[current_step].options_info[option].description }}</div>
                        </span>
                        <UIcon name="i-lucide-arrow-right" />
                    </button>
                </div>
            </div>
            <div v-if="process[current_step].next_step" class="mt-4">
                <UButton @click="nextStepClicked">
                    Continue
                    <template #trailing>
                        <UIcon name="i-lucide-arrow-right" class="w-5 h-5" />
                    </template>
                </UButton>
            </div>
        </div>
    </div>
</template>

<style scoped>
.process-step-option-button {
    @apply text-left;
}
</style>