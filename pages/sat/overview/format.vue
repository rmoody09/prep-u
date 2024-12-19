<script setup>
definePageMeta({
  layout: 'sat-guide'
})
</script>

<template>
    <h1 class="sat-guide-page-header">SAT Format</h1>
    <div class="section-description">
        The SAT is a digitally administered test, taken on a computer at at test center. 
        <div class='pt-4'>
            It consists of two main sections: Reading & Writing, and Math. Each section is broken into two modules, for a total of four modules.
        </div>   
        <div class='pt-4'>
            The graphic below gives you a visual overview of how the SAT is structured.
        </div>
    </div>
    <div class="flex flex-row gap-4 mb-10">
        <div class="flex flex-col gap-2">
            <h3 class="bg-emerald-500 text-white p-4 rounded-md text-center font-bold">Reading & Writing</h3>
            <div class="bg-emerald-100 p-4 rounded-md text-center">
                <div class="font-semibold">
                    Module 1
                </div>
                <div class="text-sm text-gray-800">
                    27 questions
                </div>
                <div class="text-sm text-gray-800">
                    35 minutes
                </div>
            </div>
            <div class="bg-emerald-100 p-4 rounded-md text-center">
                <div class="font-semibold">
                    Module 2
                </div>
                <div class="text-sm text-gray-800">
                    27 questions
                </div>
                <div class="text-sm text-gray-800">
                    35 minutes
                </div>
            </div>
        </div>
        <div class="bg-slate-200 p-4 rounded-md flex flex-col items-center justify-center">
            <div>10 minute</div>
            <div>break</div>
        </div>
        <div class="flex flex-col gap-2">
            <h3 class="bg-indigo-500 text-white p-4 rounded-md text-center font-bold">Math</h3>
            <div class="bg-indigo-100 p-4 rounded-md text-center">
                <div class="font-semibold">
                    Module 1
                </div>
                <div class="text-sm text-gray-800">
                    22 questions
                </div>
                <div class="text-sm text-gray-800">
                    32 minutes
                </div>
            </div>
            <div class="bg-indigo-100 p-4 rounded-md text-center">
                <div class="font-semibold">
                    Module 2
                </div>
                <div class="text-sm text-gray-800">
                    22 questions
                </div>
                <div class="text-sm text-gray-800">
                    32 minutes
                </div>
            </div>
        </div>

    </div>

    <h2 class="sat-guide-section-header">Timing</h2>
    <div class="section-description">
        In total, the SAT takes 2 hours and 14 minutes (or 2 hours and 24 minutes including the break). The Reading & Writing section takes 70 minutes, while the Math section takes 64 minutes.
        <div class='pt-4'>
            I almost don't even want to mention this, because it can encourage bad habits, but <b>on average</b> this breaks down to an average of 77 seconds per question on Reading & Writing, and 82 seconds per question on Math. This gives you a sense of how much you might spend on a typical question, but <b>do not take this to mean this is how long you should be spending on each question!</b>
            Keep in mind that some questions take longer to process and solve, while others can be solved very quickly. Don't get psyched out just because you had to spend 2 minutes on one of the problems.
                
        </div>   
        
    </div>

    <h2 class="sat-guide-section-header">Multiple Choice (mostly)</h2>
    <div class="section-description">
        All of the Reading & Writing questions are multiple choice. The Math section is also mostly multiple choice, with a few "student-produced response" questions, meaning you type in the correct answer.
        Every multiple choice question will have 4 answer choices (A, B, C, D).
    </div>

    <h2 class="sat-guide-section-header">Question Order</h2>
    <div class="section-description">
        The questions are ordered very differently in the Reading & Writing and Math sections. In Reading & Writing, the questions are grouped together by question type, while in Math, the questions are ordered by difficulty, going from easy to hard. We'll deeper into the structure of each section later.
    </div>

    <div class='sat-guide-bottom-nav'>
        <div class='sat-guide-bottom-nav-item'>
            <UButton to='/sat/overview/scoring' variant='outline' size='xl'>
                Next: SAT Scoring
                <template #trailing>
                    <UIcon name='i-lucide-chevron-right' size="xl" />
                </template>
            </UButton>
        </div>
    </div>
</template>