<template>
    <h1 class="sat-guide-page-header">
        Question vs Statement Problems
    </h1>

    <h2 class="sat-guide-section-header">How to Identify</h2>
    <div class="section-description">
        On these types of problems, you will notice that some of the answer choices (typically two) end with question marks, and the other ones end with periods.
    </div>

    <h2 class="sat-guide-section-header">Example Problem</h2>
    <div class="section-description">
        Below is an example of a question vs statement problem:
        <div class="pt-6">
            <ClientOnly>
                <SATProblem problem_id="ee017113-4883-4aa9-9fe4-91025944167d" />
            </ClientOnly>
        </div>
    </div>

    <h2 class="sat-guide-section-header">First, identify whether the sentence should be a statement or a question</h2>
    <div class="section-description">
        Based on the context around the sentence, you should be able to determine whether the sentence should be a statement or a question. Your gut is likely to be correct in telling you whether the sentence should be a statement or a question, but we'll give you some tips on things to look for.

        <div class="pt-6">
            <div class="font-bold pb-1">
                Identify the start of the main clause before the blank
            </div>
            <div>
                Often the start of the main clause is just the start of the sentence, but sometimes the sentence might start off with a nonessential clause followed by a comma before it gets to the main clause (e.g. in the sentence "Looking for an answer, John read the manuscript.", the main clause is "John read the manuscript"). 
            </div>
            <div class="font-bold pt-5 pb-1">
                Note how the main clause begins
            </div>
            <div>
                <div>
                    If the main clause starts off with a question word like "who", "what", "when", "where", "why", "which", or "how", then it's phrased like a question. For example, "If Charles didn't write this, who is the author?" In this sentence, the main clause is begins with "who" so it is phrased like a question. If the end were left blank (e.g. "If Charles didn't write this, who _____"), then we would still know it should be a question.
                </div>
                <div class="pt-4">
                    Also, if the main clause starts off with certain verbs, like "is", "are", "was", "were", "have", "has", "do", "does", "will", "would", "shall", "should", "can", "could", "may", "might", "must", "ought", then it's phrased like a question. For example, "After falling two stories, will Gary be okay?" In this sentence, the main clause begins with "will" so it is phrased like a question. If the end were left blank (e.g. "After falling two stories, will _____?"), then we would still know it should be a question because the main clause starts with the word "will".
                </div>
            </div>
        </div>
    </div>

    <h2 class="sat-guide-section-header">Eliminate the answer choices that end with the wrong punctuation</h2>
    <div class="section-description">
        If you determined that the sentence should be a question, then you should eliminate the answer choices that end with periods. If you determined that the sentence should be a statement, then you should eliminate the answer choices that end with question marks.
    </div>

    <h2 class="sat-guide-section-header">Pick the answer choice with wording that aligns with the sentence being a statement or a question</h2>
    <div class="section-description">
        If the sentence is a question, then the answer choice should be worded like a question. If it's a statement, then the answer choice should be worded like a statement. Your gut will probably tell you which answer choice is phrased correctly, but here are some things to look for:
        <div class="pt-6">
            <div class="font-bold pb-1">
                Indications that it is worded like a question
            </div>
            <div class="font-semibold text-sm pb-1">
                Certain verbs before a noun or pronoun
            </div>
            <div>
                If you see a certain verbs like the ones we listed above (e.g. "is", "are", "was", "were", "have", "has", "do", etc.) right before a noun or pronoun then it's phrased like a question. For example, if you see something like "is he", "will they", "can John", "did the car", etc. then it is phrased like a question. If you see two consecutive verbs (like 'did see' or 'will know') then it's phrased like a statement. If you see two verbs separated by a noun or pronoun (like 'Did you see' or 'will they know') then it'...
            </div>
            <div class="font-semibold text-sm pb-1 pt-4">
                Two verbs separated by a noun or pronoun
            </div>
            <div>
                If you see two verbs separated by a noun or pronoun (like 'Did you see' or 'will they know') then it's phrased like a question.
            </div>
        </div>
        <div class="pt-6">
            <div class="font-bold pb-1">
                Indications that it is worded like a statement
            </div>
            <div class="font-semibold text-sm pb-1">
                Two consecutive verbs
            </div>
            <div>
                If you see two consecutive verbs (like 'did see', 'will know', 'would be', 'should have', etc.) then it's phrased like a statement.
            </div>
        </div>
    </div>

    <div class='sat-guide-bottom-nav'>
        <div class='sat-guide-bottom-nav-item'>
            <UButton to='/sat/reading-writing/standard-english/question-types/punctuation/overview' variant='outline' size='xl'>
                Next: Punctuation Questions
                <template #trailing>
                    <UIcon name='i-lucide-chevron-right' size="xl" />
                </template>
            </UButton>
        </div>
    </div>
</template>
