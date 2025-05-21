<script setup>
const route = useRoute()
const userState = useState('user');

const problem_id = route.params.id;
const resp = await useFetch('/api/get/sat-problem/' + problem_id)
const problem = resp.data.value.data;



const unapproveProblem = async () => {
    const resp = await $fetch('/api/admin/unapprove/sat-problem/' + problem_id, {
        method: 'POST'
    });
    if (resp.error) {return;}
    problem.manually_approved = false;
    problem.expert_approved = false;
}

const approveProblem = async () => {
    const client = useSupabaseClient();
    /*let params = {manually_approved: true}
    if (userState.value.profile.admin_role == 'super_admin') {
        params.expert_approved = true;
    }*/
    const resp = await $fetch('/api/admin/approve/sat-problem/' + problem_id, {
        method: 'POST'
    });
    if (resp.error) {return;}
    problem.manually_approved = true;
    if (userState.value.profile.admin_role == 'super_admin') {
        problem.expert_approved = true;
    }
}

</script>

<template>
    <div class="p-4">
        <div class="pb-4">
            <h1 class="text-2xl font-bold">SAT Problem</h1>
        </div>
        <div>
            <ClientOnly>
                <SATProblem :problem="problem" />
            </ClientOnly>
        </div>
        <ClientOnly>
            <SATProblemAdminSection :problem="problem" />
        </ClientOnly>
    </div>
</template>
