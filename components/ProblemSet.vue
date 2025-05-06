<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    problemSet: {
        type: Object,
        required: false
    },
    problemSetId: {
        type: String,
        required: false
    }
});

const currentProblemSet = ref(null);
const currentProblemIndex = ref(0);
const loading = ref(true);
const error = ref(null);

const fetchProblemSet = async (id) => {
    try {
        const { data, error: fetchError } = await useSupabaseClient()
            .from('problem_sets')
            .select('*')
            .eq('id', id)
            .single();

        if (fetchError) throw fetchError;
        return data;
    } catch (err) {
        console.error('Error fetching problem set:', err);
        error.value = 'Failed to load problem set';
        return null;
    }
};

const fetchProblems = async (problemIds) => {
    try {
        const { data, error: fetchError } = await useSupabaseClient()
            .from('sat_problems')
            .select('*')
            .in('id', problemIds);

        if (fetchError) throw fetchError;
        return data;
    } catch (err) {
        console.error('Error fetching problems:', err);
        error.value = 'Failed to load problems';
        return [];
    }
};

const initializeProblemSet = async () => {
    loading.value = true;
    error.value = null;

    try {
        if (props.problemSet) {
            currentProblemSet.value = props.problemSet;
        } else if (props.problemSetId) {
            console.log('fetching problem set');
            currentProblemSet.value = await fetchProblemSet(props.problemSetId);
            console.log('problem set fetched');
            console.log(JSON.stringify(currentProblemSet.value));
        }
        /*
        if (currentProblemSet.value) {
            const problems = await fetchProblems(currentProblemSet.value.problems);
            currentProblemSet.value.problems = problems;
        }
        */
    } catch (err) {
        error.value = 'Failed to initialize problem set';
    } finally {
        loading.value = false;
    }
};

const nextProblem = () => {
    if (currentProblemIndex.value < currentProblemSet.value.problems.length - 1) {
        currentProblemIndex.value++;
    }
};

const previousProblem = () => {
    if (currentProblemIndex.value > 0) {
        currentProblemIndex.value--;
    }
};

const getCurrentProblem = () => {
    console.log('getCurrentProblem');
    console.log(currentProblemIndex.value);
    if (!currentProblemSet.value || !currentProblemSet.value.problems) return null;
    console.log(JSON.stringify(currentProblemSet.value));
    console.log(JSON.stringify(currentProblemSet.value.problems));
    console.log(currentProblemSet.value.problems[currentProblemIndex.value]);
    return currentProblemSet.value.problems[currentProblemIndex.value];
};

onMounted(() => {
    initializeProblemSet();
});

watch(() => props.problemSetId, () => {
    initializeProblemSet();
});
</script>

<template>
    <div class="problem-set-container">
        <div v-if="loading" class="flex justify-center items-center p-8">
            <UProgress animation="carousel" />
        </div>

        <div v-else-if="error" class="text-red-500 p-4">
            {{ error }}
        </div>

        <div v-else-if="currentProblemSet" class="flex flex-col gap-4">
            <div class="flex justify-between items-center">
                <h2 class="text-xl font-semibold">{{ currentProblemSet.name }}</h2>
                <div class="text-sm text-gray-500">
                    Problem {{ currentProblemIndex + 1 }} of {{ currentProblemSet.problems.length }}
                </div>
            </div>

            <div class="problem-container">
                <ClientOnly>
                    <GeneralProblem :problem_id="getCurrentProblem()" />
                </ClientOnly>
            </div>

            <div class="flex justify-between items-center mt-4">
                <UButton
                    :disabled="currentProblemIndex === 0"
                    @click="previousProblem"
                    icon="i-heroicons-arrow-left"
                >
                    Previous
                </UButton>
                <UButton
                    :disabled="currentProblemIndex === currentProblemSet.problems.length - 1"
                    @click="nextProblem"
                    icon="i-heroicons-arrow-right"
                    icon-right
                >
                    Next
                </UButton>
            </div>
        </div>

        <div v-else class="text-gray-500 p-4">
            No problem set found
        </div>
    </div>
</template>

<style scoped>
.problem-set-container {
    @apply max-w-4xl mx-auto;
}

.problem-container {
    @apply min-h-[400px] flex items-center justify-center;
}
</style>
