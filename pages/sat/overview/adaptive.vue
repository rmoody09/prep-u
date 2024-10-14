<script setup>
definePageMeta({
  layout: 'sat-guide'
})
</script>

<template>
    <h1 class='sat-guide-page-header font-extrabold'>Adaptive Nature</h1>
    <div class="section-description">
        Prior to 2024, the SAT was paper-based. Everyone who took the test on the same date received the exact same test. Starting in 2024, the SAT moved to a digital "adaptive" format. 
        Why did they make this switch? Well, the paper-based test took 3 hours, with 154 questions. In other words, it was long and mentally exhausting. The theory behind the newer adaptive test is that it adapts to how you are doing, allowing it to more quickly drill down on your true ability with fewer questions. Now the test has been trimmed down to 2 hrs 14 minutes, with 98 questions, which is better for students. The downside is that there is now a more obscure algorithm behind the scenes determining your score, making the scoring less transparent.
    </div>

    <h2>Same 1st module for everyone, followed by a "hard" or "easy" 2nd Module</h2>
    <div class="section-description">
        So how does this adaptive format work? It's actually quite simple. Everyone gets the exact same first module for both Reading & Writing and Math. For the second module in each section, they have prepared an "easy" module where the questions are on slightly easier than the first module, and a "hard" module where the questions are a bit more difficult. 
        Your performance on the first module will determine whether you receive the "easy" or "hard" second module. If you answer enough questions correctly on the first module, you will receive the harder second module. If you fail to do so, you will get the easier second module. 
        While the scoring algorithm is not transparent, students who get the harder second module will be able to miss more questions while still scoring higher than students who get the easier second module.
    </div>
    <div class="flex flex-row gap-4">
        <div class="flex flex-col gap-4">
            <h3 class="bg-green-200 p-4 rounded-md text-center">Reading & Writing</h3>
            <div class="bg-green-100 p-4 rounded-md text-center">
                <div>
                    Module 1
                </div>
                <div>
                    Same questions for everyone
                </div>
            </div>
            <div class="flex flex-row gap-2">
                <div class="bg-green-100 p-4 rounded-md text-center">
                    <div>
                        Easy Module 2
                    </div>
                    <div>
                        Given to students who fail to answer enough questions correctly on Module 1
                    </div>
                </div>
                <div class="bg-green-100 p-4 rounded-md text-center">
                    <div>
                        Hard Module 2
                    </div>
                    <div>
                        Given to students who answer enough questions correctly on Module 1
                    </div>
                </div>
                
                
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <h3 class="bg-blue-200 p-4 rounded-md text-center">Math</h3>
            <div class="bg-blue-100 p-4 rounded-md text-center">
                <div>
                    Module 1
                </div>
                <div>
                    Same questions for everyone
                </div>
            </div>
            <div class="flex flex-row gap-2">
                <div class="bg-green-100 p-4 rounded-md text-center">
                    <div>
                        Easy Module 2
                    </div>
                    <div>
                        Given to students who fail to answer enough questions correctly on Module 1
                    </div>
                </div>
                <div class="bg-green-100 p-4 rounded-md text-center">
                    <div>
                        Hard Module 2
                    </div>
                    <div>
                        Given to students who answer enough questions correctly on Module 1
                    </div>
                </div>
                
                
            </div>
        </div>

    </div>

    <h2>How many questions can you miss and still get the hard module?</h2>
    <div class="section-description">
        This can vary from test to test, so there is not a clear-cut answer. On a somewhat typical test, you might be able to miss about 7 math questions and about 9 reading/writing questions and still get the hard module. This really does vary a good bit between tests, so just focus on doing the best you can on the first module.
    </div>
</template>