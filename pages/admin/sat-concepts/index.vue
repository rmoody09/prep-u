<script setup>
const concept_tag = 'sat-test';
const client = useSupabaseClient()
const { data, error } = await client.from('concept_tags').select().eq('tag', concept_tag)
const concept = data[0];
console.log('concept data');
console.log(JSON.stringify(data));
const { data: parent_concepts, error: parent_concepts_error } = await client.from('concept_tags').select().in('id', concept.parent_concepts)
console.log('parent concepts data');
console.log(JSON.stringify(parent_concepts));
const { data: sub_concepts, error: sub_concepts_error } = await client.from('concept_tags').select().in('id', concept.sub_concepts)
console.log('sub concepts data');
console.log(JSON.stringify(sub_concepts));

const router = useRouter();
const createSubconcept = () => {
    router.push(`/add/sub-concept/${concept.tag}`);
}
</script>

<template>
    <div class="concept-page max-w-4xl mx-auto px-4 py-8">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl font-bold text-gray-800">{{ concept.name }}</h1>
            <div class="flex gap-4">
                <button 
                    @click="createSubconcept"
                    class="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                    <span class="mr-2">+</span>
                    Add Subconcept
                </button>
                <NuxtLink 
                    :to="`/edit/concept/${concept.tag}`"
                    class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    <span class="mr-2">✎</span>
                    Edit Concept
                </NuxtLink>
            </div>
        </div>
        
        <div class="concept-description prose prose-lg mb-8" v-html="concept.description_html"></div>
        
        <div class="concept-relationships grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="parent-concepts bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 class="text-xl font-semibold mb-4 text-gray-700">Parent Concepts</h2>
                <div class="space-y-2">
                    <NuxtLink v-for="parent in parent_concepts" :key="parent.id" 
                         :to="`/admin/sat-concepts/${parent.tag}`"
                         class="block p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow hover:bg-gray-50">
                        <span class="text-gray-600">{{ parent.name }}</span>
                    </NuxtLink>
                </div>
            </div>
            
            <div class="sub-concepts bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 class="text-xl font-semibold mb-4 text-gray-700">Sub Concepts</h2>
                <div class="space-y-2">
                    <NuxtLink v-for="sub in sub_concepts" :key="sub.id"
                         :to="`/admin/sat-concepts/${sub.tag}`"
                         class="block p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow hover:bg-gray-50">
                        <span class="text-gray-600">{{ sub.name }}</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.concept-page {
    min-height: 100vh;
}

.concept-description :deep(p) {
    margin-bottom: 1rem;
}

.concept-description :deep(ul), 
.concept-description :deep(ol) {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
}

.concept-description :deep(li) {
    margin-bottom: 0.5rem;
}
</style>
    