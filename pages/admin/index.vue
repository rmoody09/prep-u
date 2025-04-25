<script setup>
const adminCards = [
    {
        title: 'SAT Problems',
        description: 'Manage SAT practice problems, including creation, editing, and deletion.',
        icon: 'i-lucide-book-open',
        to: '/admin/sat-problems',
        actions: [
            { label: 'View All', to: '/admin/sat-problems' },
            { label: 'Add New', to: '/add/sat-problem' },
            { label: 'Import from PDF', to: '/admin/add-problems-from-sb-pdf' }
        ]
    },
    {
        title: 'SAT Drills',
        description: 'Create and manage practice drills combining multiple problems.',
        icon: 'i-lucide-dumbbell',
        to: '/admin/sat-drills',
        actions: [
            { label: 'View All', to: '/admin/sat-drills' },
            { label: 'Create New', to: '/add/sat-drill' }
        ]
    },
    {
        title: 'SAT Concepts',
        description: 'Manage SAT concepts and their relationships.',
        icon: 'i-lucide-list-tree',
        to: '/admin/sat-concepts',
        actions: [
            { label: 'View All', to: '/admin/sat-concepts' },
            { label: 'Add New', to: '/add/concept' }
        ]
    },
    {
        title: 'Users',
        description: 'Manage user accounts, roles, and permissions.',
        icon: 'i-lucide-users',
        to: '/admin/users',
        actions: [
            { label: 'View All', to: '/admin/users' }
        ]
    }
];

definePageMeta({
    middleware: ['admin']
});
</script>

<template>
    <div class="p-6">
        <h1 class="text-3xl font-black mb-8">Admin Dashboard</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <UCard 
                v-for="card in adminCards" 
                :key="card.title"
                class="hover:shadow-lg transition-shadow duration-200"
            >
                <template #header>
                    <div class="flex items-center gap-3">
                        <UIcon :name="card.icon" class="w-6 h-6 text-primary" />
                        <h2 class="text-xl font-bold">{{ card.title }}</h2>
                    </div>
                </template>

                <p class="text-gray-600 mb-4">{{ card.description }}</p>

                <template #footer>
                    <div class="flex flex-wrap gap-2">
                        <UButton
                            v-for="action in card.actions"
                            :key="action.label"
                            :to="action.to"
                            size="sm"
                            :variant="action.label === 'View All' ? 'solid' : 'outline'"
                        >
                            {{ action.label }}
                        </UButton>
                    </div>
                </template>
            </UCard>
        </div>

        <!-- Quick Stats Section -->
        <div class="mt-12">
            <h2 class="text-2xl font-bold mb-6">Quick Stats</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <UCard>
                    <template #header>
                        <div class="flex items-center justify-between">
                            <span class="text-gray-600">Total Problems</span>
                            <UIcon name="i-lucide-book-open" class="w-5 h-5 text-primary" />
                        </div>
                    </template>
                    <p class="text-2xl font-bold">Loading...</p>
                </UCard>

                <UCard>
                    <template #header>
                        <div class="flex items-center justify-between">
                            <span class="text-gray-600">Active Drills</span>
                            <UIcon name="i-lucide-dumbbell" class="w-5 h-5 text-primary" />
                        </div>
                    </template>
                    <p class="text-2xl font-bold">Loading...</p>
                </UCard>

                <UCard>
                    <template #header>
                        <div class="flex items-center justify-between">
                            <span class="text-gray-600">Total Skills</span>
                            <UIcon name="i-lucide-list-tree" class="w-5 h-5 text-primary" />
                        </div>
                    </template>
                    <p class="text-2xl font-bold">Loading...</p>
                </UCard>

                <UCard>
                    <template #header>
                        <div class="flex items-center justify-between">
                            <span class="text-gray-600">Active Users</span>
                            <UIcon name="i-lucide-users" class="w-5 h-5 text-primary" />
                        </div>
                    </template>
                    <p class="text-2xl font-bold">Loading...</p>
                </UCard>
            </div>
        </div>
    </div>
</template>
