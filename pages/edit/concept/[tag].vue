<script setup>
const route = useRoute()
const tag = route.params.tag
const client = useSupabaseClient()
const { data, error } = await client.from('concept_tags').select().eq('tag', tag)
const concept = data[0];    
</script>

<template>
    <div class="p-4">
        <div class="pb-4">
            <h1 class="text-2xl font-bold">Edit Concept</h1>
        </div>
        <div>
            <ClientOnly>
                <ConceptTagEditor :concept="concept" />
            </ClientOnly>
        </div>
    </div>
</template>
