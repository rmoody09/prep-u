<template>
    <h1 class="sat-guide-page-header">Standard English Process</h1>

    <div class="section-description">
        The tool below is a step-by-step guide that will help you understand the process to go through to arrive at the correct answer for a Standard English question. You can try pulling up this tool as you go through some practice problems to see how it works, and see if it gets you to the correct answer.
    </div>

    <ClientOnly>
        <template #fallback>
            <StandardEnglishProcessFlowFallback />
        </template>
        <StandardEnglishProcessFlow />
    </ClientOnly>

    <div class="h-10"></div>

    <div class='sat-guide-bottom-nav'>
        <div class='sat-guide-bottom-nav-item'>
            <UButton to='/sat/reading-writing/expression-of-ideas/transitions' variant='outline' size='xl'>
                Next: Transition Questions
                <template #trailing>
                    <UIcon name='i-lucide-chevron-right' size="xl" />
                </template>
            </UButton>
        </div>
    </div>
</template>