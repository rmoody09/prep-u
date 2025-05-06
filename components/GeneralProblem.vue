<script setup>
import { ref, onMounted, watch } from 'vue'
import SATProblem from '~/components/SATProblem.vue'
import SATDrill from '~/components/SATDrill.vue'

const props = defineProps({
  problem: { type: Object, required: false },
  problem_id: { type: [String, Number], required: false }
})

const loadedProblem = ref(props.problem || null)
const loading = ref(false)
const error = ref(null)

const fetchProblem = async (id) => {
  loading.value = true
  error.value = null
  console.log('fetching problem');
  console.log(id);
  try {
    const { data, error: fetchError } = await useSupabaseClient()
      .from('problems')
      .select('*')
      .eq('id', id)
      .single()
    if (fetchError) throw fetchError
    console.log('problem fetched');
    console.log(data);
    console.log(error);
    loadedProblem.value = data
  } catch (err) {
    error.value = 'Failed to load problem'
  } finally {
    loading.value = false
  }
}

const initialize = () => {
  if (props.problem) {
    loadedProblem.value = props.problem
  } else if (props.problem_id) {
    fetchProblem(props.problem_id)
  } else {
    loadedProblem.value = null
  }
}

onMounted(initialize)
watch(() => props.problem, initialize)
watch(() => props.problem_id, initialize)
</script>

<template>
  <div>
    <UProgress v-if="loading" animation="carousel" />
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <template v-else-if="loadedProblem">
      <SATProblem
        v-if="loadedProblem.problem_type === 'practice_problem'"
        :problem_id="loadedProblem.id"
      />
      <SATDrill
        v-else-if="loadedProblem.problem_type === 'drill'"
        :problem_id="loadedProblem.id"
      />
      <div v-else class="text-gray-500">Unknown problem type</div>
    </template>
    <div v-else class="text-gray-500">No problem found</div>
  </div>
</template>
