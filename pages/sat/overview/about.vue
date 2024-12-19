<script setup>
const route = useRoute()
</script>

<template>
    <h2 class='sat-guide-section-header'>What is the SAT?</h2>
    <div class="section-description">
        The SAT is a standardized test used by most colleges in the US for their admissions process. It is designed to assess a student's readiness for college by evaluating their critical thinking, problem-solving, and writing skills.
    </div>
    <h2 class='sat-guide-section-header'>What isn't it?</h2>
    <div class="section-description">
        The SAT is not an IQ test, or a measure of your intelligence. Put simply, it's a test of how good you are at the skill of taking the SAT. While some students might find that this skill comes more naturally to them, like any skill, this skill can be learned and improved upon. Any student can dramatically increase their score by learning the right tricks and strategies, and putting in the work.
    </div>

    <h2 class='sat-guide-section-header'>Is the SAT important?</h2>
    <div class="section-description">
        How many different classes did you take in high school? How much time have you spent on each class? Obviously, your high school classes are important, but each class is just one among a multitude of classes you take in high school, and only accounts for a small fraction of your overall GPA. On the other hand, colleges will only see one, maybe two, standardized test scores from you. While your overall GPA might be more important to many schools, how you do on the SAT is likely to have a much bigger impact than how you do on any single class. So it only makes sense that you would want to put at least as much effort into your SAT preparation as you would for a high school class.
    </div>

    <h2 class='sat-guide-section-header'>On the other hand . . .</h2>
    <div class="section-description">
        Many colleges in the US don't require you to submit a standardized test score. So, it's very possible you can get into a great school without having to spend a second on the SAT, which I'm sure is very tempting. But just because a school doesn't require the SAT doesn't mean they won't factor it into their admissions decision if you do submit it. In today's increasingly (and rather insanely) competitive college admissions environment, submitting a good SAT score can give you a significant edge getting into any school.
    </div>

    <h2 class='sat-guide-section-header'>What if I don't do well?</h2>
    <div class="section-description">
        If you are applying to a test-optional school, you can always simply choose not to submit your score. Even among schools that do require a standardized test score, most of them accept superscores, which means they will only see your best math score and your best reading & writing score. So even if you bomb the test on one attempt, it won't matter if you do well any other attempts.
    </div>

    <h2 class='sat-guide-section-header'>Should I take the SAT?</h2>
    <div class="section-description">
        We may be biased here, but we think you should absolutely take a standardized test. If you are applying to test-optional schools, you can pick and choose which ones you send it to based on whether it will help your application for that particular school. If you are applying to schools that do require a standardized test score, then, well, you have to take it anyways.
    </div>

    <h2 class='sat-guide-section-header'>What about the ACT?</h2>
    <div class="section-description">
        These days, all colleges will take either test, so the ACT can be a great option as well. Some students click better with the SAT, while others click better with the ACT. Our advice is to take a practice test for each, and get a sense of which test is a better fit for you. With that being said, as we write this in late 2024, the ACT is preparing to make big changes to their test in the next year, so that is worth taking into account. If you prepare for the current version of the ACT, you might find that some of the work you put in doesn't transfer over to the new version. Once you've decided which test is a better fit, it's best to put most of your effort into preparing for that test, rather than splitting your focus between the two.
    </div>

    <h2 class='sat-guide-section-header'>Can PrepU help me prepare for the ACT?</h2>
    <div class="section-description">
        There is a large amount of overlap in the skills tested by the two tests, so preparing for either will help you with the other. But PrepU doesn't currently offer guidance specific to the ACT. Once we have fully optimized our process for SAT prep, and once the new ACT format has been established, we plan to develop a similar interactive experience for the ACT.
    </div>

    <div class='sat-guide-bottom-nav'>
        <div class='sat-guide-bottom-nav-item'>
            <UButton to='/sat/overview/format' variant='outline' size='xl'>
                Next: SAT Format
                <template #trailing>
                    <UIcon name='i-lucide-chevron-right' size="xl" />
                </template>
            </UButton>
        </div>
    </div>
</template>