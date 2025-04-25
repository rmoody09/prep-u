<script setup>
const route = useRoute()
const tag = route.params.tag
const client = useSupabaseClient()
const { data, error } = await client.from('concept_tags').select().eq('tag', tag)
const parent_concept = data[0];  
console.log('add sub concept page');
console.log(JSON.stringify(parent_concept));
const concept = {
    parent_concepts: [parent_concept.id]
}
if (parent_concept.section) {
    concept.section = parent_concept.section;
}
if (parent_concept.cb_domain) {
    concept.cb_domain = parent_concept.cb_domain;
}
if (parent_concept.cb_skill) {
    concept.cb_skill = parent_concept.cb_skill;
}
console.log('concept');
console.log(JSON.stringify(concept));
</script>

<template>
    <div class="p-4">
        <div class="pb-4">
            <h1 class="text-2xl font-bold">Add Sub Concept</h1>
        </div>
        <div>
            <ClientOnly>
                <ConceptTagEditor :concept="concept" />
            </ClientOnly>
        </div>
    </div>
</template>
