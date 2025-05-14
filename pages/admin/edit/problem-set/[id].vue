<script setup>
const route = useRoute()
const problem_set_id = route.params.id;

const { data, error: fetchError } = await useSupabaseClient()
    .from('problem_sets')
    .select('*')
    .eq('id', problem_set_id)
    .single();
if (fetchError) throw fetchError;

const problem_set = data;
</script>

<template>
    <div class="p-4">
        <div class="pb-4">
            <h1 class="text-2xl font-bold">Edit Problem Set</h1>
        </div>
        <div>
            <ClientOnly>
                <ProblemSetEditor :problemSet="problem_set" :problemSetId="problem_set_id" />
            </ClientOnly>
        </div>
    </div>
</template>