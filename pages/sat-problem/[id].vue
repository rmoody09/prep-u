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
            <div v-if="userState?.profile?.admin_role" class="mt-10 border border-indigo-400 rounded-md">
                <h3 class="flex items-center gap-2 font-bold text-lg p-4 bg-indigo-50">
                    <UIcon name="i-lucide-user-cog" /> <span>Admin Actions</span>
                </h3>
                <div class="p-4">
                    <div v-if="problem.manually_approved">
                        <UIcon variant="outline" name="i-lucide-check" /> <span>Manually approved</span>
                    </div>
                    <div v-if="problem.expert_approved">
                        <UIcon variant="outline" name="i-lucide-check" /> <span>Super Admin approved</span>
                    </div>
                    <div class="pt-4">
                        <UButton variant="outline" :to="`/admin/edit/sat-problem/${problem_id}`">Edit</UButton>
                    </div>
                    <div class="pt-4" v-if="problem.manually_approved || problem.expert_approved">
                        <UButton variant="outline" @click="unapproveProblem">Unapprove</UButton>
                    </div>
                    <div class="pt-4" v-if="userState?.profile?.admin_role === 'super_admin' && !problem.expert_approved">
                        <UButton variant="outline" @click="approveProblem">Approve</UButton>
                    </div>
                    <div class="pt-4" v-else-if="!problem.manually_approved">
                        <UButton variant="outline" @click="approveProblem">Approve</UButton>
                    </div>
                </div>
            </div>
        </ClientOnly>
    </div>
</template>
