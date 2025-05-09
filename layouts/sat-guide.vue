<script setup>
    const userState = useState('user');
    import '~/assets/css/sat-guide.css'
    const route = useRoute();

    const supabase = useSupabaseClient();

    const signOut = () => {
        supabase.auth.signOut();
        userState.value = null;
        navigateTo('/login');
        
    }
    const user_menu_items = ref([]);
    if (userState.value) {
        user_menu_items.value = [
            [{ label: 'Dashboard', icon: 'i-lucide-layout-dashboard', to: '/dashboard' }],
            [{ label: 'Logout', icon: 'i-lucide-log-out', click: signOut }]
        ];
    }
    const checkIfAdmin = async () => {
        const user_id = userState.value.id;
        //const client = useSupabaseClient();
        const { data, error } = await supabase.from('profiles').select('*').eq('id', user_id);
        if (error) {return false;}
        let is_admin = false;
        if (data[0].admin_role) {
            is_admin = true;
            user_menu_items.value = [
                [{ label: 'Dashboard', icon: 'i-lucide-layout-dashboard', to: '/dashboard' }],
                [{ label: 'Admin Dashboard', icon: 'i-lucide-user', to: '/admin' }],
                [{ label: 'Logout', icon: 'i-lucide-log-out', click: signOut }]
            ];
            menu_key.value += 1;
        }
        return is_admin;
    }

    useAsyncData('checkIfAdmin', () => checkIfAdmin());

    

    const sections = ref([
        {id: 'intro', name: 'Introduction'}, 
        {id: 'overview', name: 'Overview'}, 
        {id: 'strategy', name: 'General Strategy'}, 
        {id: 'reading-writing', name: 'Reading & Writing'}, 
        {id: 'math', name: 'Math'}
    ]);
    const sections_info = ref({
        intro: {
            slug: 'intro',
            title: 'Introduction',
            subsections: ['intro-about'],
            top_level: true, 
            parent: null
        },
        'intro-about': {
            slug: 'about',
            title: 'About PrepU',
            subsections: [],
            top_level: false,
            parent: 'intro'
        },
        overview: {
            slug: 'overview',
            title: 'Overview',
            subsections: ['overview-about', 'overview-format', 'overview-scoring', 'overview-adaptive', 'overview-digital', 'overview-reading-writing', 'overview-math'],    
            top_level: true,
            parent: null
        }, 
        'overview-about': {
            slug: 'about',
            title: 'About The SAT',
            subsections: [],
            top_level: false,
            parent: 'overview'
        },
        'overview-format': {
            slug: 'format',
            title: 'Format',
            subsections: [],
            top_level: false,
            parent: 'overview'
        }, 
        'overview-scoring': {
            slug: 'scoring',
            title: 'Scoring',
            subsections: [],
            top_level: false,
            parent: 'overview'
        }, 
        'overview-adaptive': {
            slug: 'adaptive',
            title: 'Adaptive Nature',
            subsections: [],
            top_level: false,
            parent: 'overview'
        }, 
        'overview-digital': {
            slug: 'digital',
            title: 'Digital Format',
            subsections: [],
            top_level: false,
            parent: 'overview'
        }, 
        'overview-reading-writing': {
            slug: 'reading-writing',
            title: 'Reading & Writing',
            subsections: [],
            top_level: false,
            parent: 'overview'
        }, 
        'overview-math': {
            slug: 'math',
            title: 'Math',
            subsections: [],
            top_level: false,
            parent: 'overview'
        },
        strategy: {
            slug: 'strategy',
            title: 'General Strategy',
            subsections: ['strategy-overview', 'strategy-planning', 'strategy-superscore', 'strategy-pacing', 'strategy-guessing', 'strategy-reading-writing', 'strategy-math', 'strategy-test-day'],
            top_level: true,
            parent: null
        }, 
        'strategy-overview': {
            slug: 'overview',
            title: 'Overview',
            subsections: [],
            top_level: false,
            parent: 'strategy'
        }, 
        'strategy-planning': {
            slug: 'planning',
            title: 'Planning & Preparation',
            subsections: [],
            top_level: false,
            parent: 'strategy'
        }, 
        'strategy-superscore': {
            slug: 'superscore',
            title: 'Max Your Superscore',
            subsections: [],
            top_level: false,
            parent: 'strategy'
        },
        'strategy-pacing': {
            slug: 'pacing',
            title: 'Pacing & Flow',
            subsections: [],
            top_level: false,
            parent: 'strategy'
        }, 
        'strategy-guessing': {
            slug: 'guessing',
            title: 'Guessing',
            subsections: [],
            top_level: false,
            parent: 'strategy'
        }, 
        'strategy-reading-writing': {
            slug: 'reading-writing',
            title: 'Reading & Writing',
            subsections: [],
            top_level: false,
            parent: 'strategy'
        }, 
        'strategy-math': {
            slug: 'math',
            title: 'Math',
            subsections: [],
            top_level: false,
            parent: 'strategy'
        },
        'strategy-test-day': {
            slug: 'test-day',
            title: 'Test Day',
            subsections: [],
            top_level: false,
            parent: 'strategy'
        },
        'reading-writing': {
            slug: 'reading-writing',
            title: 'Reading & Writing',
            subsections: [
                'reading-writing-overview', 'reading-writing-wrong-answers', 
                'reading-writing-question-types', 'craft-and-structure', 
                'information-and-ideas', 'standard-english-conventions', 
                'expression-of-ideas'
            ],
            top_level: true,
            parent: null
        }, 
        'reading-writing-overview': {
            slug: 'overview',
            title: 'Overview',
            subsections: [],
            top_level: false,
            parent: 'reading-writing'
        },  
        'reading-writing-wrong-answers': {
            slug: 'wrong-answers',
            title: 'Wrong Answers',
            subsections: [],
            top_level: false,
            parent: 'reading-writing'
        },
        'reading-writing-question-types': {
            slug: 'question-types',
            title: 'Question Types',
            subsections: [],
            top_level: false,
            parent: 'reading-writing'
        },
        'craft-and-structure': {
            slug: 'craft-and-structure',
            title: 'Craft and Structure',
            subsections: ['words-in-context-blank', 'words-in-context-underlined', 'main-purpose', 'underlined-function', 'overall-structure', 'cross-text-connections'],
            top_level: false,
            parent: 'reading-writing'
        },
        'information-and-ideas': {
            slug: 'information-and-ideas',
            title: 'Information and Ideas',
            subsections: ['main-idea', 'details', 'inference', 'quantitative-command-of-evidence', 'illustrate-claim', 'strengthen-undermine'],
            top_level: false,
            parent: 'reading-writing'
        },
        'standard-english-conventions': {
            slug: 'standard-english',
            title: 'Standard English Conventions',
            subsections: ['standard-english-overview', 'essential-nonessential', 'separating-complete-sentences', 'english-question-types', 'standard-english-process'],
            top_level: false,
            parent: 'reading-writing'
        },
        'expression-of-ideas': {
            slug: 'expression-of-ideas',
            title: 'Expression of Ideas',
            subsections: ['transitions', 'rhetorical-synthesis'],
            top_level: false,
            parent: 'reading-writing'
        },
        'words-in-context-blank': {
            slug: 'words-in-context-blank',
            title: 'Words in Context (Blank)',
            subsections: [],
            top_level: false,
            parent: 'craft-and-structure'
        },
        'words-in-context-underlined': {
            slug: 'words-in-context-underlined',
            title: 'Words in Context (Underlined)',
            subsections: [],
            top_level: false,
            parent: 'craft-and-structure'
        },
        'main-purpose': {
            slug: 'main-purpose',
            title: 'Main Purpose',
            subsections: [],
            top_level: false,
            parent: 'craft-and-structure'
        },
        'underlined-function': {
            slug: 'underlined-function',
            title: 'Function of Underlined Text',
            subsections: [],
            top_level: false,
            parent: 'craft-and-structure'
        },
        'overall-structure': {
            slug: 'overall-structure',
            title: 'Overall Structure',
            subsections: [],
            top_level: false,
            parent: 'craft-and-structure'
        },
        'cross-text-connections': {
            slug: 'cross-text-connections',
            title: 'Cross-Text Connections',
            subsections: [],
            top_level: false,
            parent: 'craft-and-structure'
        },
        'main-idea': {
            slug: 'main-idea',
            title: 'Main Idea',
            subsections: [],
            top_level: false,
            parent: 'information-and-ideas'
        },
        'details': {
            slug: 'details',
            title: 'Details',
            subsections: [],
            top_level: false,
            parent: 'information-and-ideas'
        },
        'inference': {
            slug: 'inference',
            title: 'Inference',
            subsections: [],
            top_level: false,
            parent: 'information-and-ideas'
        },
        'quantitative-command-of-evidence': {
            slug: 'charts',
            title: 'Charts and Graphs',
            subsections: [],
            top_level: false,
            parent: 'information-and-ideas'
        },
        'illustrate-claim': {
            slug: 'illustrate-claim',
            title: 'Illustrate Claim',
            subsections: [],
            top_level: false,
            parent: 'information-and-ideas'
        },
        'strengthen-undermine': {
            slug: 'strengthen-undermine',
            title: 'Strengthen/Undermine',
            subsections: [],
            top_level: false,
            parent: 'information-and-ideas'
        },
        'transitions': {
            slug: 'transitions',
            title: 'Transitions',
            subsections: [],
            top_level: false,
            parent: 'expression-of-ideas'
        },
        'rhetorical-synthesis': {
            slug: 'rhetorical-synthesis',
            title: 'Bullet Points',
            subsections: [],
            top_level: false,
            parent: 'expression-of-ideas'
        },
        math: {
            slug: 'math',
            title: 'Math',
            subsections: ['math-overview', 'algebra', 'advanced-math', 'problem-solving-data-analysis', 'geometry-trigonometry', 'math-cheat-sheet'],
            top_level: true,
            parent: null
        }, 
        'math-overview': {
            slug: 'overview',
            title: 'Overview',
            subsections: [],
            top_level: false,
            parent: 'math'
        },
        'algebra': {
            slug: 'algebra',
            title: 'Algebra',
            subsections: [
                'algebra-overview',
                'single-variable-solving',
                'single-variable-graphing',
                'linear-number-of-solutions',
                'slope-intercept-form',
                'standard-form',
                'linear-systems-of-equations',
                'parallel-perpendicular-lines',
                'distance-midpoint',
                'word-problems'
            ],
            top_level: false,
            parent: 'math'
        },
        'algebra-overview': {
            slug: 'overview',
            title: 'Overview',
            subsections: [],
            top_level: false,
            parent: 'algebra'
        },
        'single-variable-solving': {
            slug: 'single-variable-solving',
            title: 'Single Variable Solving',
            subsections: [],
            top_level: false,
            parent: 'algebra'
        },
        'single-variable-graphing': {
            slug: 'single-variable-graphing',
            title: 'Single Variable Graphing',
            subsections: [],
            top_level: false,
            parent: 'algebra'
        },
        'linear-number-of-solutions': {
            slug: 'number-of-solutions',
            title: 'Number of Solutions',
            subsections: [],
            top_level: false,
            parent: 'algebra'
        },
        'slope-intercept-form': {
            slug: 'slope-intercept-form',
            title: 'Slope Intercept Form',
            subsections: [],
            top_level: false,
            parent: 'algebra'
        },
        'standard-form': {
            slug: 'standard-form',
            title: 'Standard Form',
            subsections: [],
            top_level: false,
            parent: 'algebra'
        },
        'linear-systems-of-equations': {
            slug: 'systems-of-equations',
            title: 'Systems of Equations',
            subsections: [],
            top_level: false,
            parent: 'algebra'
        },
        'parallel-perpendicular-lines': {
            slug: 'parallel-perpendicular-lines',
            title: 'Parallel & Perpendicular Lines',
            subsections: [],
            top_level: false,
            parent: 'algebra'
        },
        'distance-midpoint': {
            slug: 'distance-midpoint',
            title: 'Distance & Midpoint',
            subsections: [],
            top_level: false,
            parent: 'algebra'
        },
        'word-problems': {
            slug: 'word-problems',
            title: 'Word Problems',
            subsections: ['rate-problems', 'mixture-problems'],
            top_level: false,
            parent: 'algebra'
        },
        'rate-problems': {
            slug: 'rate-problems',
            title: 'Rate Problems',
            subsections: [],
            top_level: false,
            parent: 'word-problems'
        },
        'mixture-problems': {
            slug: 'mixture-problems',
            title: 'Mixture Problems',
            subsections: [],
            top_level: false,
            parent: 'word-problems'
        },
        'advanced-math': {
            slug: 'advanced-math',
            title: 'Advanced Math',
            subsections: [
                'advanced-math-overview',
                'function-transformations',
                'quadratic-functions',
                'higher-order-polynomials',
                'exponent-rules',
                'exponential-functions',
                'graphing-circles', 
                'equation-solving',
            ],
            top_level: false,
            parent: 'math'
        },
        'advanced-math-overview': {
            slug: 'overview',
            title: 'Overview',
            subsections: [],
            top_level: false,
            parent: 'advanced-math'
        },
        'quadratic-functions': {
            slug: 'quadratic-functions',
            title: 'Quadratic Functions',
            subsections: [],
            top_level: false,
            parent: 'advanced-math'
        },
        'function-transformations': {
            slug: 'transformations',
            title: 'Function Transformations',
            subsections: [],
            top_level: false,
            parent: 'advanced-math'
        },
        'higher-order-polynomials': {
            slug: 'higher-order-polynomials',
            title: 'Higher Order Polynomials',
            subsections: [],
            top_level: false,
            parent: 'advanced-math'
        },
        'exponent-rules': {
            slug: 'exponent-rules',
            title: 'Exponent Rules',
            subsections: [],
            top_level: false,
            parent: 'advanced-math'
        },
        'exponential-functions': {
            slug: 'exponential',
            title: 'Exponential Functions',
            subsections: [],
            top_level: false,
            parent: 'advanced-math'
        },
        'graphing-circles': {
            slug: 'graphing-circles',
            title: 'Graphing Circles',
            subsections: [],
            top_level: false,
            parent: 'advanced-math'
        },
        'equation-solving': {
            slug: 'equation-solving',
            title: 'Equation Solving Tips',
            subsections: [],
            top_level: false,
            parent: 'advanced-math'
        },
        'problem-solving-data-analysis': {
            slug: 'problem-solving-data-analysis',
            title: 'Problem Solving & Data Analysis',
            subsections: [
                'problem-solving-data-analysis-overview',
                'rates-proportions',
                'single-variable-data',
                'line-charts-scatterplots', 
                'percentages',
                'probability',
                'surveys-sampling'
            ],
            top_level: false,
            parent: 'math'
        },
        'problem-solving-data-analysis-overview': {
            slug: 'overview',
            title: 'Overview',
            subsections: [],
            top_level: false,
            parent: 'problem-solving-data-analysis'
        },
        'rates-proportions': {
            slug: 'rates-proportions',
            title: 'Rates & Proportions',
            subsections: [],
            top_level: false,
            parent: 'problem-solving-data-analysis'
        },
        'single-variable-data': {
            slug: 'single-variable-data',
            title: 'Single Variable Data',
            subsections: [],
            top_level: false,
            parent: 'problem-solving-data-analysis'
        },
        'line-charts-scatterplots': {
            slug: 'line-charts-scatterplots',
            title: 'Line Charts & Scatterplots',
            subsections: [],
            top_level: false,
            parent: 'problem-solving-data-analysis'
        },
        'percentages': {
            slug: 'percentages',
            title: 'Percentages',
            subsections: [],
            top_level: false,
            parent: 'problem-solving-data-analysis'
        },
        'probability': {
            slug: 'probability',
            title: 'Probability',
            subsections: [],
            top_level: false,
            parent: 'problem-solving-data-analysis'
        },
        'surveys-sampling': {
            slug: 'surveys-sampling',
            title: 'Surveys & Sampling',
            subsections: [],
            top_level: false,
            parent: 'problem-solving-data-analysis'
        },
        'geometry-trigonometry': {
            slug: 'geometry-trig',
            title: 'Geometry & Trigonometry',
            subsections: [
                'geometry-trig-overview',
                'lines-angles-polygons',
                'triangles-trigonometry',
                'circle-geometry',
                'geometry-graphing-circles',
                'area-volume'
            ],
            top_level: false,
            parent: 'math'
        },
        'geometry-trig-overview': {
            slug: 'overview',
            title: 'Overview',
            subsections: [],
            top_level: false,
            parent: 'geometry-trigonometry'
        },
        'geometry-graphing-circles': {
            slug: 'graphing-circles',
            title: 'Graphing Circles',
            subsections: [],
            top_level: false,
            parent: 'geometry-trigonometry'
        },
        'circle-geometry': {
            slug: 'circle-geometry',
            title: 'Circle Geometry',
            subsections: [],
            top_level: false,
            parent: 'geometry-trigonometry'
        },
        'triangles-trigonometry': {
            slug: 'triangles-trigonometry',
            title: 'Triangles & Trigonometry',
            subsections: [],
            top_level: false,
            parent: 'geometry-trigonometry'
        },
        'trigonometry': {
            slug: 'trigonometry',
            title: 'Trigonometry',
            subsections: [],
            top_level: false,
            parent: 'geometry-trigonometry'
        },
        'area-volume': {
            slug: 'area-volume',
            title: 'Area & Volume',
            subsections: [],
            top_level: false,
            parent: 'geometry-trigonometry'
        },
        'lines-angles-polygons': {
            slug: 'lines-angles-polygons',
            title: 'Lines, Angles, & Polygons',
            subsections: [],
            top_level: false,
            parent: 'geometry-trigonometry'
        },
        'math-cheat-sheet': {
            slug: 'cheat-sheet',
            title: 'Cheat Sheet',
            subsections: [],
            top_level: false,
            parent: 'math'
        },
        'standard-english-overview': {
            slug: 'overview',
            title: 'Overview',
            subsections: [],
            top_level: false,
            parent: 'standard-english-conventions'
        },
        'punctuation': {
            slug: 'punctuation',
            title: 'Punctuation',
            subsections: ['punctuation-overview', 'periods', 'semicolons', 'colons', 'emdashes', 'commas'],
            top_level: false,
            parent: 'english-question-types'
        },  
        'punctuation-overview': {
            slug: 'overview',
            title: 'Overview',
            subsections: [],
            top_level: false,
            parent: 'punctuation'
        },
        'separating-complete-sentences': {
            slug: 'separating-complete-sentences',
            title: 'Separating Complete Sentences',
            subsections: [],
            top_level: false,
            parent: 'standard-english-conventions'
        },  
        'english-question-types': {
            slug: 'question-types',
            title: 'Question Types',
            subsections: [ 'english-question-types-overview', 'pronouns', 'apostrophes', 'question-marks', 'punctuation', 'verb-form', 'misplaced-modifiers' ],
            top_level: false,
            parent: 'standard-english-conventions'
        },
        'english-question-types-overview': {
            slug: 'overview',
            title: 'Overview',
            subsections: [],
            top_level: false,
            parent: 'english-question-types'
        },
        'apostrophes': {
            slug: 'apostrophes',
            title: 'Apostrophes',
            subsections: [],
            top_level: false,
            parent: 'english-question-types'
        },
        'periods': {
            slug: 'periods',
            title: 'Periods',
            subsections: [],
            top_level: false,
            parent: 'punctuation'
        },
        'semicolons': {
            slug: 'semicolons',
            title: 'Semicolons',
            subsections: [],
            top_level: false,
            parent: 'punctuation'
        },
        'colons': {
            slug: 'colons',
            title: 'Colons',
            subsections: [],
            top_level: false,
            parent: 'punctuation'
        },
        'emdashes': {
            slug: 'emdashes',
            title: 'Em Dashes',
            subsections: [],
            top_level: false,
            parent: 'punctuation'
        },
        'essential-nonessential': {
            slug: 'essential-nonessential',
            title: 'Essential/Non-Essential Clauses',
            subsections: [],
            top_level: false,
            parent: 'standard-english-conventions'
        },
        'commas': {
            slug: 'commas',
            title: 'Commas',
            subsections: [],
            top_level: false,
            parent: 'punctuation'
        },  
        'question-marks': {
            slug: 'question-marks',
            title: 'Question vs Statement',
            subsections: [],
            top_level: false,
            parent: 'english-question-types'
        },  
        'verb-form': {
            slug: 'verb-form',
            title: 'Verb Form',
            subsections: [],
            top_level: false,
            parent: 'english-question-types'
        },  
        'misplaced-modifiers': {
            slug: 'misplaced-modifiers',
            title: 'Misplaced Modifiers',
            subsections: [],
            top_level: false,
            parent: 'english-question-types'
        },
        'pronouns': {
            slug: 'pronouns',
            title: 'Pronouns',
            subsections: [],
            top_level: false,
            parent: 'english-question-types'
        },  
        'standard-english-process': {
            slug: 'wizard',
            title: 'Wizard',
            subsections: [],
            top_level: false,
            parent: 'standard-english-conventions'
        },

         
        
    })

    const get_current_section_id = () => {
        console.log('get_current_section_id');
        let sat_path_parts = route.path.split('/sat/');
        let sat_path = '';
        if (sat_path_parts.length > 1) {
            sat_path = sat_path_parts[1];
        } else {
            sat_path = 'intro';
        }
        console.log('sat_path');
        console.log(sat_path);
        let path_parts = sat_path.split('/');
        let section_id = path_parts[0];
        let section_info = sections_info.value[section_id];
        if (path_parts.length > 1) {
            console.log('path_parts');
            console.log(JSON.stringify(path_parts.slice(1)));
            for (let path_part of path_parts.slice(1)) {
                console.log('path_part');
                console.log(path_part);
                for (let subsection_id of section_info.subsections) {
                    let subsection_info = sections_info.value[subsection_id];
                    if (subsection_info.slug == path_part) {
                        console.log('found subsection_id');
                        console.log(subsection_id);
                        section_id = subsection_id;
                        section_info = sections_info.value[section_id];
                        console.log('new section_id');
                        console.log(section_id);
                        break;
                    }
                }
            }
        }
        console.log('got current section_id');
        console.log(section_id);
        return section_id;
    }

    const get_first_child_slug = (section_id) => {
        console.log('get_first_child_slug');
        console.log(section_id);
        try {
            let section_info = sections_info.value[section_id];
            console.log(JSON.stringify(section_info));
            if (section_info.subsections.length > 0) {
                let subsection_info = sections_info.value[section_info.subsections[0]];
                console.log(JSON.stringify(subsection_info));
                return subsection_info.slug;
            } else {
                return '';
            }
        } catch (error) {
            return '';
        }
    }

    

    const current_section_id = ref(get_current_section_id())
    console.log('current_section_id');
    console.log(current_section_id.value);

    const get_current_parent_id = () => {
        let section_id = get_current_section_id();
        let section_info = sections_info.value[current_section_id.value];
        return section_info.parent;
    }

    const current_parent_id = ref(get_current_parent_id());

    const get_parent_level_sections = () => {
        if (!current_parent_id.value) {
            return sections.value.map(section => section.id);
        }
        let gp_id = sections_info.value[current_parent_id.value].parent;
        if (!gp_id) {
            return sections.value.map(section => section.id);
        }
        let gp_info = sections_info.value[gp_id];
        let parent_level_sections = gp_info.subsections;
        return parent_level_sections;
    }

    const check_if_current_parent = (section_id) => {
        return sections_info.value[section_id].subsections.includes(current_section_id.value);
    }

    const parent_level_sections = ref(get_parent_level_sections());

    const check_if_third_gen_or_more = (section_id) => {
        console.log('check_if_third_gen_or_more');
        console.log(section_id);
        let section_info = sections_info.value[section_id];
        let gen_count = 1;
        while (true) {
            if (section_info.parent) {
                section_info = sections_info.value[section_info.parent];
                gen_count++;
            } else {
                break;
            }
        }
        return gen_count >= 3;
    }

    const get_grandparent_id = () => {
        console.log('get_grandparent_id');
        console.log(current_parent_id.value);
        if (!current_parent_id.value) {
            return '';
        }
        let section_info = sections_info.value[current_parent_id.value];
        return section_info.parent;
    }

    const grandparent_id = ref(get_grandparent_id());



    const is_third_gen_or_more = ref(check_if_third_gen_or_more(current_section_id.value));
    console.log('is_third_gen_or_more');
    console.log(is_third_gen_or_more.value);
    console.log('parent_level_sections');
    console.log(JSON.stringify(parent_level_sections.value));
    const get_subsection_title = (subsection_id) => {
        return sections_info.value[subsection_id]['title'];
    }

    const check_if_section_is_active = (section_id) => {
        return route.path.includes("/sat/" + sections_info.value[section_id].slug);
    }

    const get_section_parent = (section_id) => {
        let parent_id = '';

        return sections_info.value[section_id].slug.split('-')[0];
    }

    const get_section_path = (section_id) => {
        console.log('get_section_path');
        console.log(section_id);
        let section_info = sections_info.value[section_id];
        console.log(JSON.stringify(section_info));
        let slugs = [section_info.slug];
        let parent_id = section_info.parent;
        while (parent_id) {
            slugs.push(sections_info.value[parent_id].slug);
            parent_id = sections_info.value[parent_id].parent;
        }
        slugs.reverse();
        console.log('slugs');
        console.log(JSON.stringify(slugs));
        if (section_info.subsections.length > 0) {
            console.log('are subsections')
            let subsection_info = sections_info.value[section_info.subsections[0]];
            console.log('subsection_info');
            console.log(JSON.stringify(subsection_info));
            if (subsection_info && subsection_info.slug) {
                slugs.push(subsection_info.slug);
            }
        }
        console.log('slugs2');
        console.log(JSON.stringify(slugs));
        let path = "/sat/" + slugs.join('/');
        console.log('path');
        console.log(path);
        return path;
    }

    const get_section_first_child_path = (section_id) => {
        console.log('get_section_first_child_path');
        console.log(section_id);
        let first_child_slug = get_first_child_slug(section_id);
        let path = get_section_path(section_id);
        //below is unnecessary because in get_section_path, we already check if there is a first child slug and add it to the path
        return path;
        /*
        if (first_child_slug) {
            console.log('first_child_slug');
            path += '/' + first_child_slug;
            console.log('path');
            console.log(path);
            return path;
        } else {
            console.log('no first_child_slug');
            console.log(path);
            return path;
        }
        */
    }

    watch(
        () => route.path,
        () => {
            current_section_id.value = get_current_section_id();
            current_parent_id.value = get_current_parent_id();
            parent_level_sections.value = get_parent_level_sections();
            grandparent_id.value = get_grandparent_id();
            is_third_gen_or_more.value = check_if_third_gen_or_more(current_section_id.value);
        }
    )
</script>

<template>
    <div class='sat-guide-layout flex flex-col min-h-screen align-stretch'>  
        <div class='flex bg-white backdrop-filter backdrop-blur-sm bg-opacity-70 z-10 sticky top-0 justify-between items-center h-12 border-b border-gray-200 px-5'>
            <span>
                <img src="/images/logos/PrepULogo.png" class="h-8" />
            </span>
            <span class="flex gap-5 items-center">
                <span v-if="userState">
                    <UDropdown :items="user_menu_items" :popper="{ placement: 'bottom-start' }">
                        <UAvatar :alt="userState.user_metadata.name" size="md" />
                    </UDropdown>
                </span>
                <span v-else>
                    <UButton to="/login">Login</UButton>
                </span>
            </span>
        </div>

        <div class="grow flex flex-row justify-start">
            <div class="w-[12rem] shrink-0 border-r border-r-slate-300 p-2 flex flex-col gap-4">
                <div v-if="is_third_gen_or_more" class="flex flex-row gap-1 text-md font-bold border-b border-b-slate-400 pb-2 flex-wrap">
                    <span class="whitespace-nowrap"><ULink to="/sat/intro/about" class="text-indigo-500">SAT</ULink> <span class="text-zinc-300">...</span></span>
                    <span ><ULink :to="get_section_path(grandparent_id)" class="text-indigo-500">{{ sections_info[grandparent_id].title }}</ULink></span>
                </div>
                <div v-for="section_id in parent_level_sections" :key="section_id" >
                    <NuxtLink :to="get_section_first_child_path(section_id)" :class="[{'text-primary': current_parent_id == section_id}, 'font-semibold', 'hover:text-primary-800']">
                        {{ sections_info[section_id].title }}
                    </NuxtLink>
                    <div v-if="check_if_current_parent(section_id)" class="flex flex-col gap-1 text-sm">
                        <div v-for="subsection_id in sections_info[section_id].subsections" :key="subsection_id" class="pl-2 text-zinc-500">
                            <NuxtLink :to="get_section_path(subsection_id)" :class="[{'text-primary-500': current_section_id == subsection_id}, 'hover:text-zinc-900']">
                                {{ sections_info[subsection_id].title }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="h-10"></div>
                
            </div>
            <div class="sat-guide-page grow">
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
    
    
</style>

