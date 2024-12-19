<script setup>
    const userState = useState('user');
    import '~/assets/css/sat-guide.css'
    const route = useRoute();
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
            top_level: true
        },
        'intro-about': {
            slug: 'about',
            title: 'About PrepU',
            subsections: [],
            top_level: false
        },
        overview: {
            slug: 'overview',
            title: 'Overview',
            subsections: ['overview-format', 'overview-scoring', 'overview-adaptive', 'overview-digital', 'overview-reading-writing', 'overview-math'],    
            top_level: true
        }, 
        'overview-format': {
            slug: 'format',
            title: 'Format',
            subsections: [],
            top_level: false
        }, 
        'overview-scoring': {
            slug: 'scoring',
            title: 'Scoring',
            subsections: [],
            top_level: false
        }, 
        'overview-adaptive': {
            slug: 'adaptive',
            title: 'Adaptive Nature',
            subsections: [],
            top_level: false
        }, 
        'overview-digital': {
            slug: 'digital',
            title: 'Digital Format',
            subsections: [],
            top_level: false
        }, 
        'overview-reading-writing': {
            slug: 'reading-writing',
            title: 'Reading & Writing',
            subsections: [],
            top_level: false
        }, 
        'overview-math': {
            slug: 'math',
            title: 'Math',
            subsections: [],
            top_level: false
        },
        strategy: {
            slug: 'strategy',
            title: 'General Strategy',
            subsections: ['strategy-overview', 'strategy-planning', 'strategy-superscore', 'strategy-pacing', 'strategy-guessing', 'strategy-reading-writing', 'strategy-math', 'strategy-test-day'],
            top_level: true
        }, 
        'strategy-overview': {
            slug: 'overview',
            title: 'Overview',
            subsections: [],
            top_level: false
        }, 
        'strategy-planning': {
            slug: 'planning',
            title: 'Planning & Preparation',
            subsections: [],
            top_level: false
        }, 
        'strategy-superscore': {
            slug: 'superscore',
            title: 'Max Your Superscore',
            subsections: [],
            top_level: false
        },
        'strategy-pacing': {
            slug: 'pacing',
            title: 'Pacing & Flow',
            subsections: [],
            top_level: false
        }, 
        'strategy-guessing': {
            slug: 'guessing',
            title: 'Guessing',
            subsections: [],
            top_level: false
        }, 
        'strategy-reading-writing': {
            slug: 'reading-writing',
            title: 'Reading & Writing',
            subsections: [],
            top_level: false
        }, 
        'strategy-math': {
            slug: 'math',
            title: 'Math',
            subsections: [],
            top_level: false
        },
        'strategy-test-day': {
            slug: 'test-day',
            title: 'Test Day',
            subsections: [],
            top_level: false
        },
        'reading-writing': {
            slug: 'reading-writing',
            title: 'Reading & Writing',
            subsections: [],
            top_level: true
        }, 
        math: {
            slug: 'math',
            title: 'Math',
            subsections: [],
            top_level: true
        }, 
         
        
    })

    const get_current_section_id = () => {
        let sat_path_parts = route.path.split('/sat/');
        let sat_path = sat_path_parts[1];
        let path_parts = sat_path.split('/');
        let section_id = path_parts.join("-");
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

    const check_if_current_parent = (section_id) => {
        return sections_info.value[section_id].subsections.includes(current_section_id.value);
    }

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
        return "/sat/" + sections_info.value[section_id].slug + "/" + sections_info.value[section_id].subsections[0];
    }

    watch(
        () => route.path,
        () => {
            current_section_id.value = get_current_section_id()
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
                        <UAvatar :alt="userState.name" size="md" />
                    </UDropdown>
                </span>
                <span v-else>
                    <UButton to="/login">Login</UButton>
                </span>
            </span>
        </div>

        <div class="grow flex flex-row justify-start">
            <div class="w-[10rem] shrink-0 border-r border-r-slate-300 p-2 flex flex-col gap-4">
                <div v-for="section in sections" :key="section.id" >
                    <NuxtLink :to="'/sat/' + sections_info[section.id].slug + '/' + get_first_child_slug(section.id)" :class="[{'text-primary': check_if_section_is_active(section.id)}, 'font-semibold', 'hover:text-primary-800']">
                        {{ section.name }}
                    </NuxtLink>
                    <div v-if="check_if_current_parent(section.id)" class="flex flex-col gap-1 text-sm">
                        <div v-for="subsection in sections_info[section.id].subsections" :key="subsection" class="pl-2 text-zinc-500">
                            <NuxtLink :to="'/sat/' + sections_info[section.id].slug + '/' + sections_info[subsection].slug" :class="[{'text-primary-500': current_section_id == subsection}, 'hover:text-zinc-900']">
                                {{ sections_info[subsection].title }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="sat-guide-page grow">
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .sat-guide-layout {
        font-family: 'Noto Sans', sans-serif;
    }
    
</style>

