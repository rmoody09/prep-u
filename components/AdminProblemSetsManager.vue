<script setup>
import { ref, onMounted } from 'vue'

const problemSets = ref([])
const loading = ref(true)
const error = ref(null)
const currentPage = ref(1)
const totalPages = ref(1)
const itemsPerPage = 10
const searchQuery = ref('')
const selectedSection = ref('')
const selectedType = ref('')

const testSections = [
    { id: 'reading_writing', label: 'Reading and Writing' },
    { id: 'math', label: 'Math' }
]

const problemSetTypes = [
    { id: 'practice', label: 'Practice Problems' },
    { id: 'drill', label: 'Drills' }
]

const fetchProblemSets = async () => {
    loading.value = true
    error.value = null
    try {
        const response = await $fetch('/api/admin/get/problem-sets', {
            method: 'GET',
            params: {
                page: currentPage.value,
                per_page: itemsPerPage,
                search: searchQuery.value,
                section: selectedSection.value,
                type: selectedType.value
            }
        })
        problemSets.value = response.data
        totalPages.value = Math.ceil(response.total / itemsPerPage)
    } catch (err) {
        error.value = 'Failed to load problem sets'
        console.error('Error fetching problem sets:', err)
    } finally {
        loading.value = false
    }
}

const handlePageChange = (page) => {
    currentPage.value = page
    fetchProblemSets()
}

const handleSearch = () => {
    currentPage.value = 1
    fetchProblemSets()
}

const handleFilter = () => {
    currentPage.value = 1
    fetchProblemSets()
}

const deleteProblemSet = async (id) => {
    if (!confirm('Are you sure you want to delete this problem set?')) return

    try {
        await $fetch(`/api/delete/problem-set/${id}`, {
            method: 'DELETE'
        })
        await fetchProblemSets()
    } catch (err) {
        error.value = 'Failed to delete problem set'
        console.error('Error deleting problem set:', err)
    }
}

onMounted(fetchProblemSets)

// Watch for changes in filters
watch([selectedSection, selectedType], handleFilter)
</script>

<template>
    <div class="space-y-6">
        <!-- Header with title and add button -->
        <div class="flex justify-between items-center">
            <h2 class="text-2xl font-semibold">Problem Sets</h2>
            <UButton
                to="/admin/add/problem-set"
                icon="i-heroicons-plus"
            >
                Add Problem Set
            </UButton>
        </div>

        <!-- Search and filters -->
        <div class="flex flex-col md:flex-row gap-4">
            <UInput
                v-model="searchQuery"
                placeholder="Search problem sets..."
                icon="i-heroicons-magnifying-glass"
                @keyup.enter="handleSearch"
                class="flex-grow"
            />
            <USelectMenu
                v-model="selectedSection"
                :options="testSections"
                placeholder="Filter by section"
                value-attribute="id"
                option-attribute="label"
                class="w-48"
            />
            <USelectMenu
                v-model="selectedType"
                :options="problemSetTypes"
                placeholder="Filter by type"
                value-attribute="id"
                option-attribute="label"
                class="w-48"
            />
        </div>

        <!-- Loading state -->
        <div v-if="loading" class="flex justify-center py-8">
            <UProgress animation="carousel" />
        </div>

        <!-- Error state -->
        <div v-else-if="error" class="text-red-500 p-4 bg-red-50 rounded-md">
            {{ error }}
        </div>

        <!-- Problem sets list -->
        <div v-else class="space-y-4">
            <div v-if="problemSets.length === 0" class="text-gray-500 text-center py-8">
                No problem sets found
            </div>
            
            <div v-else class="grid gap-4">
                <div v-for="problemSet in problemSets" :key="problemSet.id" 
                    class="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
                >
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-lg font-medium">{{ problemSet.name }}</h3>
                            <div class="text-sm text-gray-500 mt-1">
                                {{ testSections.find(s => s.id === problemSet.test_section)?.label }} - 
                                {{ problemSetTypes.find(t => t.id === problemSet.type)?.label }}
                            </div>
                            <div class="text-sm text-gray-500">
                                {{ problemSet.problems?.length || 0 }} problems
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <UButton
                                :to="`/problem-set/${problemSet.id}`"
                                variant="ghost"
                                icon="i-heroicons-eye"
                                size="sm"
                            />
                            <UButton
                                :to="`/admin/edit/problem-set/${problemSet.id}`"
                                variant="ghost"
                                icon="i-heroicons-pencil-square"
                                size="sm"
                            />
                            <UButton
                                variant="ghost"
                                icon="i-heroicons-trash"
                                size="sm"
                                color="red"
                                @click="deleteProblemSet(problemSet.id)"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="flex justify-center mt-6">
                <UPagination
                    v-model="currentPage"
                    :total="totalPages"
                    :ui="{
                        wrapper: 'flex items-center justify-center',
                        default: {
                            size: 'sm',
                            activeButton: {
                                base: 'bg-primary-500 text-white',
                                padding: 'px-3 py-1'
                            }
                        }
                    }"
                    @update:model-value="handlePageChange"
                />
            </div>
        </div>
    </div>
</template>
