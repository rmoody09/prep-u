<script setup>
definePageMeta({
    middleware: 'admin'
})

const route = useRoute()
const categoryId = route.params.id
const category = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
    try {
        const client = useSupabaseClient()
        const { data, error: fetchError } = await client
            .from('problem_categories')
            .select('*')
            .eq('id', categoryId)
            .single()

        if (fetchError) {
            throw fetchError
        }

        category.value = data
    } catch (e) {
        error.value = e.message
    } finally {
        loading.value = false
    }
})
</script>

<template>
    <div class="p-6">
        <div v-if="loading" class="flex justify-center">
            <UProgress animation="carousel" />
        </div>
        <div v-else-if="error" class="text-red-500">
            Error loading category: {{ error }}
        </div>
        <div v-else>
            <h1 class="text-xl font-extrabold pb-6">Edit Category</h1>
            <CategoryEditor :category="category" />
        </div>
    </div>
</template>
