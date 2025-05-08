<script setup>
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  multiple: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue'])

const client = useSupabaseClient()
const searchQuery = ref('')
const selectedConcepts = ref([])
const currentConcept = ref(null)
const parentConcepts = ref([])
const subConcepts = ref([])
const searchResults = ref([])
const isSearching = ref(false)

// Watch for changes in selectedConcepts and emit updates
watch(selectedConcepts, (newValue) => {
  emit('update:modelValue', newValue)
}, { deep: true })

// Load initial concept (sat-test) and selected concepts
onMounted(async () => {
  await loadConcept('sat-test')
  await loadSelectedConcepts()
})

// Load selected concepts from IDs
async function loadSelectedConcepts() {
  if (!props.modelValue.length) return
  
  // Check if we received IDs or full objects
  const isIds = typeof props.modelValue[0] === 'string' || typeof props.modelValue[0] === 'number'
  
  if (isIds) {
    // If we received IDs, load the full objects
    const { data, error } = await client.from('concept_tags')
      .select()
      .in('id', props.modelValue)
    
    if (error) {
      console.error('Error loading selected concepts:', error)
      return
    }
    
    selectedConcepts.value = data
  } else {
    // If we received full objects, use them directly
    selectedConcepts.value = props.modelValue
  }
}

// Load a specific concept and its relationships
async function loadConcept(tag) {
  const { data, error } = await client.from('concept_tags').select().eq('tag', tag)
  if (error) {
    console.error('Error loading concept:', error)
    return
  }
  
  currentConcept.value = data[0]
  
  // Load parent concepts
  if (currentConcept.value.parent_concepts?.length) {
    const { data: parents } = await client.from('concept_tags')
      .select()
      .in('id', currentConcept.value.parent_concepts)
    parentConcepts.value = parents
  } else {
    parentConcepts.value = []
  }
  
  // Load sub concepts
  if (currentConcept.value.sub_concepts?.length) {
    const { data: subs } = await client.from('concept_tags')
      .select()
      .in('id', currentConcept.value.sub_concepts)
    subConcepts.value = subs
  } else {
    subConcepts.value = []
  }
}

// Search for concepts
async function searchConcepts() {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    isSearching.value = false
    return
  }
  
  isSearching.value = true
  const { data, error } = await client.from('concept_tags')
    .select()
    .ilike('name', `%${searchQuery.value}%`)
    .limit(10)
  
  if (error) {
    console.error('Error searching concepts:', error)
    return
  }
  
  searchResults.value = data
}

// Toggle concept selection
function toggleConcept(concept) {
  if (props.multiple) {
    const index = selectedConcepts.value.findIndex(c => c.id === concept.id)
    if (index === -1) {
      selectedConcepts.value.push(concept)
    } else {
      selectedConcepts.value.splice(index, 1)
    }
  } else {
    selectedConcepts.value = [concept]
  }
}

// Check if a concept is selected
function isSelected(concept) {
  return selectedConcepts.value.some(c => c.id === concept.id)
}

// Navigate to concept without selecting it
function navigateToConcept(concept) {
  loadConcept(concept.tag)
}
</script>

<template>
  <div class="concepts-selector bg-white rounded-lg shadow-lg p-4">
    <!-- Search Bar -->
    <div class="mb-4">
      <input
        v-model="searchQuery"
        @input="searchConcepts"
        type="text"
        placeholder="Search concepts..."
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    <!-- Search Results -->
    <div v-if="isSearching && searchResults.length > 0" class="mb-4">
      <h3 class="text-lg font-semibold mb-2">Search Results</h3>
      <div class="space-y-2">
        <div
          v-for="concept in searchResults"
          :key="concept.id"
          class="flex items-center justify-between p-2 rounded-md hover:bg-gray-100"
          :class="{ 'bg-blue-50': isSelected(concept) }"
        >
          <span>{{ concept.name }}</span>
          <div class="flex items-center gap-2">
            <button
              @click="navigateToConcept(concept)"
              class="text-gray-600 hover:text-gray-800"
              title="Navigate to concept"
            >
              →
            </button>
            <button
              @click="toggleConcept(concept)"
              class="text-blue-600 hover:text-blue-800"
              :title="isSelected(concept) ? 'Remove from selection' : 'Add to selection'"
            >
              {{ isSelected(concept) ? '✓' : '+' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Current Concept Navigation -->
    <div v-if="currentConcept && !isSearching" class="mb-4">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-lg font-semibold">{{ currentConcept.name }}</h3>
        <div class="flex items-center gap-2">
          <button
            v-if="currentConcept.tag !== 'sat-test'"
            @click="loadConcept('sat-test')"
            class="text-sm text-blue-600 hover:text-blue-800"
          >
            Back to Top
          </button>
          <button
            @click="toggleConcept(currentConcept)"
            class="text-blue-600 hover:text-blue-800"
            :title="isSelected(currentConcept) ? 'Remove from selection' : 'Add to selection'"
          >
            {{ isSelected(currentConcept) ? '✓' : '+' }}
          </button>
        </div>
      </div>
      
      <!-- Parent Concepts -->
      <div v-if="parentConcepts.length > 0" class="mb-4">
        <h4 class="text-sm font-medium text-gray-600 mb-2">Parent Concepts</h4>
        <div class="space-y-2">
          <div
            v-for="parent in parentConcepts"
            :key="parent.id"
            class="flex items-center justify-between p-2 rounded-md hover:bg-gray-100"
            :class="{ 'bg-blue-50': isSelected(parent) }"
          >
            <span>{{ parent.name }}</span>
            <div class="flex items-center gap-2">
              <button
                @click="navigateToConcept(parent)"
                class="text-gray-600 hover:text-gray-800"
                title="Navigate to concept"
              >
                →
              </button>
              <button
                @click="toggleConcept(parent)"
                class="text-blue-600 hover:text-blue-800"
                :title="isSelected(parent) ? 'Remove from selection' : 'Add to selection'"
              >
                {{ isSelected(parent) ? '✓' : '+' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Sub Concepts -->
      <div v-if="subConcepts.length > 0">
        <h4 class="text-sm font-medium text-gray-600 mb-2">Sub Concepts</h4>
        <div class="space-y-2">
          <div
            v-for="sub in subConcepts"
            :key="sub.id"
            class="flex items-center justify-between p-2 rounded-md hover:bg-gray-100"
            :class="{ 'bg-blue-50': isSelected(sub) }"
          >
            <span>{{ sub.name }}</span>
            <div class="flex items-center gap-2">
              <button
                @click="navigateToConcept(sub)"
                class="text-gray-600 hover:text-gray-800"
                title="Navigate to concept"
              >
                →
              </button>
              <button
                @click="toggleConcept(sub)"
                class="text-blue-600 hover:text-blue-800"
                :title="isSelected(sub) ? 'Remove from selection' : 'Add to selection'"
              >
                {{ isSelected(sub) ? '✓' : '+' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Selected Concepts -->
    <div v-if="selectedConcepts.length > 0" class="mt-4 pt-4 border-t">
      <h3 class="text-lg font-semibold mb-2">Selected Concepts</h3>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="concept in selectedConcepts"
          :key="concept.id"
          class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
        >
          <span>{{ concept.name }}</span>
          <button
            @click="toggleConcept(concept)"
            class="ml-2 text-blue-600 hover:text-blue-800"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.concepts-selector {
  max-height: 600px;
  overflow-y: auto;
}
</style>
