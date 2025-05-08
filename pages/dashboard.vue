<script setup>

definePageMeta({
    middleware: ['auth']
});

const recentProblems = ref([
    { id: 1, type: 'practice_problem', name: 'SAT Math Problem #123', section: 'Math', date: '2024-04-03', score: '4/5' },
    { id: 2, type: 'practice_problem', name: 'SAT Reading Problem #456', section: 'Reading', date: '2024-04-02', score: '3/5' },
    { id: 3, type: 'drill', name: 'Grammar Rules Drill', section: 'Writing', date: '2024-04-01', score: '90%' },
])

const recentProblemSets = ref([
    { id: 1, name: 'Math Practice Set 1', section: 'Math', date: '2024-04-03', status: 'Completed', score: '85%' },
    { id: 2, name: 'Reading Practice Set 2', section: 'Reading', date: '2024-04-02', status: 'In Progress', score: '60%' },
    { id: 3, name: 'Writing Practice Set 1', section: 'Writing', date: '2024-04-01', status: 'Not Started', score: '0%' },
])

const sectionProgress = ref({
    math: { completed: 45, total: 100, mastery: 75 },
    reading: { completed: 30, total: 100, mastery: 65 },
    writing: { completed: 25, total: 100, mastery: 70 },
})

const skillProgress = ref({
    'Algebra': { completed: 20, total: 30, mastery: 80 },
    'Geometry': { completed: 15, total: 25, mastery: 70 },
    'Grammar': { completed: 25, total: 35, mastery: 75 },
    'Reading Comprehension': { completed: 20, total: 30, mastery: 65 },
})
</script>

<template>
    <div class="container mx-auto px-4 py-8">
        <!-- Warning Banner -->
        <UAlert
            title="Demo Dashboard"
            description="This dashboard currently shows placeholder data. Real progress tracking and statistics will be available soon!"
            icon="i-heroicons-information-circle"
            color="red"
            variant="soft"
            class="mb-8"
        />

        <!-- Welcome Section -->
        <div class="mb-8">
            <h1 class="text-3xl font-bold mb-2">Welcome back!</h1>
            <p class="text-gray-600">Track your progress and continue your SAT prep journey.</p>
        </div>

        <!-- Quick Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <UCard>
                <template #header>
                    <div class="flex items-center gap-2">
                        <UIcon name="i-heroicons-academic-cap" class="text-primary" />
                        <h3 class="font-semibold">Overall Progress</h3>
                    </div>
                </template>
                <div class="text-3xl font-bold text-primary">65%</div>
                <p class="text-sm text-gray-600 mt-1">of content covered</p>
            </UCard>

            <UCard>
                <template #header>
                    <div class="flex items-center gap-2">
                        <UIcon name="i-heroicons-star" class="text-primary" />
                        <h3 class="font-semibold">Average Mastery</h3>
                    </div>
                </template>
                <div class="text-3xl font-bold text-primary">70%</div>
                <p class="text-sm text-gray-600 mt-1">across all sections</p>
            </UCard>

            <UCard>
                <template #header>
                    <div class="flex items-center gap-2">
                        <UIcon name="i-heroicons-clock" class="text-primary" />
                        <h3 class="font-semibold">Study Streak</h3>
                    </div>
                </template>
                <div class="text-3xl font-bold text-primary">5 days</div>
                <p class="text-sm text-gray-600 mt-1">keep it up!</p>
            </UCard>
        </div>

        <!-- Section Progress -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">Section Progress</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <UCard v-for="(progress, section) in sectionProgress" :key="section">
                    <template #header>
                        <div class="flex items-center gap-2">
                            <UIcon :name="section === 'math' ? 'i-heroicons-calculator' : 
                                          section === 'reading' ? 'i-heroicons-book-open' : 
                                          'i-heroicons-pencil-square'" 
                                   class="text-primary" />
                            <h3 class="font-semibold capitalize">{{ section }}</h3>
                        </div>
                    </template>
                    <div class="space-y-4">
                        <div>
                            <div class="flex justify-between text-sm mb-1">
                                <span>Progress</span>
                                <span>{{ progress.completed }}/{{ progress.total }}</span>
                            </div>
                            <UProgress :value="(progress.completed / progress.total) * 100" />
                        </div>
                        <div>
                            <div class="flex justify-between text-sm mb-1">
                                <span>Mastery</span>
                                <span>{{ progress.mastery }}%</span>
                            </div>
                            <UProgress :value="progress.mastery" color="green" />
                        </div>
                    </div>
                </UCard>
            </div>
        </div>

        <!-- Recent Activity -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <!-- Recent Problems -->
            <div>
                <h2 class="text-xl font-semibold mb-4">Recent Problems</h2>
                <UCard v-for="problem in recentProblems" :key="problem.id" class="mb-4">
                    <div class="flex justify-between items-center">
                        <div>
                            <h3 class="font-medium">{{ problem.name }}</h3>
                            <p class="text-sm text-gray-600">{{ problem.section }} • {{ problem.date }}</p>
                        </div>
                        <UBadge :color="problem.score.includes('4') || problem.score.includes('90') ? 'green' : 'yellow'">
                            {{ problem.score }}
                        </UBadge>
                    </div>
                </UCard>
            </div>

            <!-- Recent Problem Sets -->
            <div>
                <h2 class="text-xl font-semibold mb-4">Recent Problem Sets</h2>
                <UCard v-for="set in recentProblemSets" :key="set.id" class="mb-4">
                    <div class="flex justify-between items-center">
                        <div>
                            <h3 class="font-medium">{{ set.name }}</h3>
                            <p class="text-sm text-gray-600">{{ set.section }} • {{ set.date }}</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <UBadge :color="set.status === 'Completed' ? 'green' : 
                                          set.status === 'In Progress' ? 'yellow' : 'gray'">
                                {{ set.status }}
                            </UBadge>
                            <span class="text-sm font-medium">{{ set.score }}</span>
                        </div>
                    </div>
                </UCard>
            </div>
        </div>

        <!-- Skill Progress -->
        <div>
            <h2 class="text-xl font-semibold mb-4">Skill Progress</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <UCard v-for="(progress, skill) in skillProgress" :key="skill">
                    <template #header>
                        <h3 class="font-semibold">{{ skill }}</h3>
                    </template>
                    <div class="space-y-4">
                        <div>
                            <div class="flex justify-between text-sm mb-1">
                                <span>Progress</span>
                                <span>{{ progress.completed }}/{{ progress.total }}</span>
                            </div>
                            <UProgress :value="(progress.completed / progress.total) * 100" />
                        </div>
                        <div>
                            <div class="flex justify-between text-sm mb-1">
                                <span>Mastery</span>
                                <span>{{ progress.mastery }}%</span>
                            </div>
                            <UProgress :value="progress.mastery" color="green" />
                        </div>
                    </div>
                </UCard>
            </div>
        </div>
    </div>
</template>
