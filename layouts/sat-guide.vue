<script setup>
    import '~/assets/css/sat-guide.css'
    const route = useRoute();
    const sections = ref([
        {id: 'overview', name: 'Overview'}, 
        {id: 'strategy', name: 'General Strategy'}, 
        {id: 'reading-writing', name: 'Reading & Writing'}, 
        {id: 'math', name: 'Math'}
    ]);
    const sections_info = ref({
        overview: {
            slug: 'overview',
            title: 'Overview',
            subsections: ['format', 'scoring', 'adaptive', 'digital', 'overview-reading-writing', 'overview-math']
        }, 
        strategy: {
            slug: 'strategy',
            title: 'General Strategy',
            subsections: []
        }, 
        'time-management': {
            slug: 'time-management',
            title: 'Time Management',
            subsections: []
        }, 
        'reading-writing': {
            slug: 'reading-writing',
            title: 'Reading & Writing',
            subsections: []
        }, 
        math: {
            slug: 'math',
            title: 'Math',
            subsections: []
        }, 
        format: {
            slug: 'format',
            title: 'Format',
            subsections: []
        }, 
        scoring: {
            slug: 'scoring',
            title: 'Scoring',
            subsections: []
        }, 
        adaptive: {
            slug: 'adaptive',
            title: 'Adaptive Nature',
            subsections: []
        }, 
        digital: {
            slug: 'digital',
            title: 'Digital Format',
            subsections: []
        }, 
        'overview-reading-writing': {
            slug: 'reading-writing',
            title: 'Reading & Writing',
            subsections: []
        }, 
        'overview-math': {
            slug: 'math',
            title: 'Math',
            subsections: []
        }
    })
    const get_subsection_title = (subsection_id) => {
        return sections_info.value[subsection_id]['title'];
    }

    const check_if_section_is_active = (section_id) => {
        return route.path.includes("/sat/" + sections_info.value[section_id].slug);
    }
</script>

<template>
    <div class='sat-guide-layout flex flex-col min-h-screen align-stretch'>  
        <div class='flex sticky top-0 justify-evenly items-center h-12  border-b border-b-slate-300 bg-white bg-opacity-80 backdrop-blur-sm'>
            <span>Moody Prep</span>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/add-problem">Add Problem</NuxtLink>
            <NuxtLink to="/sat">SAT Guide</NuxtLink>
            <UButton>Login</UButton>
        </div>
        <div class="grow flex flex-row justify-start">
            <div class="w-[10rem] shrink-0 border-r border-r-slate-300 p-2 flex flex-col gap-4">
                <div v-for="section in sections" :key="section.id" >
                    <NuxtLink :to="'/sat/' + sections_info[section.id].slug " :class="[{'text-primary': check_if_section_is_active(section.id)}, 'font-semibold', 'hover:text-primary-800']">
                        {{ section.name }}
                    </NuxtLink>
                    <div v-if="sections_info[section.id].subsections.length > 0" class="flex flex-col gap-1 text-sm">
                        <div v-for="subsection in sections_info[section.id].subsections" :key="subsection" class="pl-2 text-zinc-500">
                            <NuxtLink :to="'/sat/' + sections_info[section.id].slug + '/' + sections_info[subsection].slug" :class="[{'text-primary-500': route.path.includes(sections_info[subsection].slug)}, 'hover:text-zinc-900']">
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

