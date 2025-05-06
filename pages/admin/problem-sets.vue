<script setup>
/*
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()

// Redirect if not admin
if (!auth.isAdmin) {
    navigateTo('/')
}
*/
</script>

<template>
    <div class="container mx-auto px-4 py-8">
        <div class="mb-6">
            <h1 class="text-3xl font-bold">Problem Sets Management</h1>
            <p class="text-gray-600 mt-2">
                View, edit, and manage all problem sets in the system.
            </p>
        </div>

        <AdminProblemSetsManager />
    </div>
</template>
