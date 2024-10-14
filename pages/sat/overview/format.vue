<script setup>
definePageMeta({
  layout: 'sat-guide'
})
</script>

<template>
    <h1>SAT Format</h1>
        <div class="section-description">
            The SAT is a digitally administered test, taken on a computer at at test center. It consists of two main sections: Reading & Writing, and Math. Each section is broken into two modules, for a total of four modules.
        </div>
        <div class="flex flex-row gap-4">
            <div class="flex flex-col gap-2">
                <h3 class="bg-green-200 p-4 rounded-md text-center">Reading & Writing</h3>
                <div class="bg-green-100 p-4 rounded-md text-center">
                    <div>
                        Module 1
                    </div>
                    <div>
                        27 questions
                    </div>
                    <div>
                        32 minutes
                    </div>
                </div>
                <div class="bg-green-100 p-4 rounded-md text-center">
                    <div>
                        Module 2
                    </div>
                    <div>
                        27 questions
                    </div>
                    <div>
                        32 minutes
                    </div>
                </div>
            </div>
            <div class="bg-slate-200 p-4 rounded-md flex flex-col items-center justify-center">
                <div>10 minute</div>
                <div>Break</div>
            </div>
            <div class="flex flex-col gap-2">
                <h3 class="bg-blue-200 p-4 rounded-md text-center">Math</h3>
                <div class="bg-blue-100 p-4 rounded-md text-center">
                    <div>
                        Module 1
                    </div>
                    <div>
                        22 questions
                    </div>
                    <div>
                        35 minutes
                    </div>
                </div>
                <div class="bg-blue-100 p-4 rounded-md text-center">
                    <div>
                        Module 2
                    </div>
                    <div>
                        22 questions
                    </div>
                    <div>
                        35 minutes
                    </div>
                </div>
            </div>

        </div>
</template>