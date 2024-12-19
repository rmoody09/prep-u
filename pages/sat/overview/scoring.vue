<template>
    <h1 class='sat-guide-page-header'>Scoring</h1>

    <div class="section-description">
        Each section of the SAT is scored out of a maximum of 800 points. So a perfect score on the SAT is 1600 (800 for Reading & Writing and 800 for Math). 
        The lowest you can score on either section is 200 points, even if you omit or miss every single question. So, the minimum total score you can receive is 400.
    </div>

    <h2 class="sat-guide-section-header">Curved Score</h2>
    <div class="section-description">
        The SAT is scored on a curve, meaning that even if the test on one date happens to have slightly easier or harder questions than the test on another date, the same percentage of students will score around the same levels. So, if you happen to receive an "easier" test, you'll probably have to get more questions right to get the same score as someone who received a harder test. However, the makers behind the test (College Board) put a lot of effort into making the test pretty consistent, so you're very unlikely to see much of a difference in difficulty between the tests given on different dates.
    </div>

    <h2 class="sat-guide-section-header">Is each question worth the same?</h2>
    <div class="section-description">
        On the old paper-based test, the answer was yes. Each question was worth the same amount of points. On the new SAT, the answer is more complicated. Because of the new adaptive nature (more on that later), there is an algorithm behind the scenes that determines your score, and that algorithm is not made transparent by the College Board. However, we do know some things about how that algorithm works, partly based on what College Board has said, and partly through experimentation with missing different questions and comparing scores. It seems that overall, missing easier questions will hurt you slightly more than missing harder questions. College Board has stated that they use "Item Response Theory" to weigh the difficulty of each question while arriving at your score. We won't dive into the details of this theory, but you are welcome to read more about it <a href="https://en.wikipedia.org/wiki/Item_response_theory" target="_blank">here</a>.
    </div>

    <h2 class="sat-guide-section-header">Am I penalized for guessing?</h2>
    <div class="section-description">
        No, you are not penalized for guessing. You will never do worse by guessing than by leaving a question blank, so you should always enter an answer for every question. There is one important thing to be aware of when guessing, though, which not many people are aware of. On the older paper-based test, if you were running out of time, it wasn't a bad strategy to just pick a letter and use it for all the remaining questions. Now, with the algorithm behind the digital SAT, they try to identify if it looks like you're just guessing, and if so, they will discount guessed answers that you happened to get right. You still won't be worse off than if you left the question blank, but you won't get as much credit as if they didn't think you were guessing. So what's the takeaway? If you need to guess, try to make your guesses as random as possible, rather than defaulting to the same letter every time.
    </div>

    <h2 class="sat-guide-section-header">Experimental Questions</h2>
    <div class="section-description">
        On every SAT, there are a few questions that are "experimental". These questions are questions that they haven't thoroughly vetted as well as other questions, so they are using students taking the test as their guinea pigs. These questions are not scored, so how you perform on them won't effect your score. So the good news is that even if you know you missed some questions, it's possible they were experimental and won't hurt you. But, unfortunately, they don't identify which questions are experimental, so you have to treat each question as if it will be counted.
    </div>

    <h2 class="sat-guide-section-header">What's a good score?</h2>
    <div class="section-description">
        This all depends on where you want to go to school. You shouldn't be asking what a good score is in general, but rather what a good score is for the schools that you are interested in. For any school, you should be able to find some stats on their SAT scores, like the average SAT score of their admitted students, as well as the 25th and 75th percentile scores, which will give you a good idea of what a competitive score might be. If you are curious how various scores stack up nationally, you can find national percentiles by score <a href="https://research.collegeboard.org/reports/sat-suite/understanding-scores/sat" target="_blank">here</a>.
    </div>

    <div class='sat-guide-bottom-nav'>
        <div class='sat-guide-bottom-nav-item'>
            <UButton to='/sat/overview/adaptive' variant='outline' size='xl'>
                Next: Adaptive Nature
                <template #trailing>
                    <UIcon name='i-lucide-chevron-right' size="xl" />
                </template>
            </UButton>
        </div>
    </div>
</template>