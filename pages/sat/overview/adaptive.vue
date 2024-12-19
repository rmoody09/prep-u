<script setup>
definePageMeta({
  layout: 'sat-guide'
})
</script>

<template>
    <h1 class='sat-guide-page-header font-extrabold'>Adaptive Nature</h1>

    <h2 class="sat-guide-section-header">From Paper to Digital & Adaptive</h2>
    <div class="section-description">
        Prior to 2024, the SAT was paper-based. Everyone who took the test on the same date received the exact same test. Starting in 2024, the SAT moved to a digital "adaptive" format. 
        Why did they make this switch? Well, the paper-based test took 3 hours, with 154 questions. In other words, it was long and mentally exhausting. The theory behind the newer adaptive test is that it adapts to how you are doing, allowing it to more quickly drill down on your true ability with fewer questions. Now the test has been trimmed down to 2 hrs 14 minutes, with 98 questions, which is better for students. The downside is that there is now a more obscure algorithm behind the scenes determining your score, making the scoring less transparent.
    </div>

    <h2 class="sat-guide-section-header">Same 1st module for everyone, followed by a "hard" or "easy" 2nd Module</h2>
    <div class="section-description">
        So how does this adaptive format work? It's actually quite simple. Everyone gets the exact same first module for both Reading & Writing and Math. For the second module in each section, they have prepared an "easy" module where the questions are slightly easier than on the first module, and a "hard" module where the questions are a bit more difficult. 
        Your performance on the first module will determine whether you receive the "easy" or "hard" second module. If you answer enough questions correctly on the first module, you will receive the harder second module. If you fail to do so, you will get the easier second module. 
    </div>

    <h2 class="sat-guide-section-header">Why would I want a harder second module?</h2>
    <div class="section-description">
        Getting more difficult questions doesn't exactly seem like a reward, but trust me, you want to unlock the harder second module. While you'll probably miss more questions on the difficult module than you would have on the easier module, they won't penalize you as harshly for wrong answers because they know these questions are more difficult. If you fail to unlock the harder module, then even with a perfect score on the easier 2nd module, the best score you can achieve on that section will be somewhere around 560 points. If you unlock the harder module, then you can miss quite a few questions and still score higher than 560 points.
    </div>

    <h2 class="sat-guide-section-header">How many questions can you miss and still get the hard module?</h2>
    <div class="section-description">
        This can vary from test to test, and between sections, so there is not a clear-cut answer. On a somewhat typical test, you might be able to miss about 7 math questions and about 9 reading/writing questions and still get the hard module. This really does vary a good bit between tests, so just focus on doing the best you can on the first module.
    </div>

    <h2 class="sat-guide-section-header">Don't try to figure out which module you got</h2>
    <div class="section-description">
        The SAT does not tell you which module you got, and it is not going to be immediately obvious. The first few math questions will be fairly easy either way, so don't start freaking out, thinking you failed to access the harder module just because you think some of the questions are easy. Similarly, with the difficult Reading & Writing module, there will be plenty of questions that don't seem difficult even though you're on the harder module. Getting the harder module doesn't mean every problem will be difficult, just that on average, the problems will be a bit more difficult. Worrying about which module you got is only going to distract you from what's important: doing your best on the remainder of the test.
    </div>

    <h2 class="sat-guide-section-header">What does this mean for my strategy?</h2>
    <div class="section-description">
        This means that the first module is especially important, so make sure you are particularly focused there (but obviously you want to ideally be focused the entire test). Not only does your performance on the first module determine which module you get in the second section, but it also seems to be weighted slightly more heavily in the scoring algorithm, at least for those who get the harder module.
    </div>

    <h2 class="sat-guide-section-header">A visual summary</h2>
    <div class="section-description">
        Here's a visual summary of how the adaptive nature of the SAT works.
    </div>
    <div class="flex flex-row gap-4">
        <div class="flex flex-col gap-4">
            <h3 class="bg-emerald-500 p-4 rounded-md text-center font-bold text-white">Reading & Writing</h3>
            <div class="bg-emerald-100 p-4 rounded-md text-center">
                <div class="font-semibold">
                    Module 1
                </div>
                <div class="text-sm">
                    Same questions for everyone
                </div>
            </div>
            <div class="flex flex-row gap-2">
                <div class="bg-emerald-100 p-4 rounded-md text-center">
                    <div class="font-semibold">
                        Easy Module 2
                    </div>
                    <div class="text-sm">
                        Given to students who fail to answer enough questions correctly on Module 1
                    </div>
                </div>
                <div class="bg-emerald-100 p-4 rounded-md text-center">
                    <div class="font-semibold">
                        Hard Module 2
                    </div>
                    <div class="text-sm">
                        Given to students who answer enough questions correctly on Module 1
                    </div>
                </div>
                
                
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <h3 class="bg-indigo-500 p-4 rounded-md text-center font-bold text-white">Math</h3>
            <div class="bg-indigo-100 p-4 rounded-md text-center">
                <div class="font-semibold">
                    Module 1
                </div>
                <div class="text-sm">
                    Same questions for everyone
                </div>
            </div>
            <div class="flex flex-row gap-2">
                <div class="bg-indigo-100 p-4 rounded-md text-center">
                    <div class="font-semibold">
                        Easy Module 2
                    </div>
                    <div class="text-sm">
                        Given to students who fail to answer enough questions correctly on Module 1
                    </div>
                </div>
                <div class="bg-indigo-100 p-4 rounded-md text-center">
                    <div class="font-semibold">
                        Hard Module 2
                    </div>
                    <div class="text-sm">
                        Given to students who answer enough questions correctly on Module 1
                    </div>
                </div>
                
                
            </div>
        </div>

        

    </div>

    <div class='h-[80px]'></div>

    <div class='sat-guide-bottom-nav'>
        <div class='sat-guide-bottom-nav-item'>
            <UButton to='/sat/overview/digital' variant='outline' size='xl'>
                Next: Digital Format    
                <template #trailing>
                    <UIcon name='i-lucide-chevron-right' size="xl" />
                </template>
            </UButton>
        </div>
    </div>

    
</template>