<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Problem Categories</h1>
      <UButton
        to="/admin/add/sat-category"
        icon="i-lucide-plus"
        color="primary"
      >
        Add Category
      </UButton>
    </div>
    
    <!-- Group by section -->
    <div v-for="section in groupedCategories" :key="section.name" class="mb-8">
      <h2 class="text-xl font-semibold mb-4">{{ section.name }}</h2>
      
      <!-- Group by domain within section -->
      <div v-for="domain in section.domains" :key="domain.name" class="mb-6">
        <h3 class="text-lg font-medium mb-3">{{ domain.name }}</h3>
        
        <!-- Categories in this domain -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="category in domain.categories" :key="category.id" 
               class="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="font-medium">{{ category.name }}</h4>
                <p class="text-gray-600 text-sm mt-1">{{ category.description }}</p>
              </div>
              <UButton
                :to="`/admin/edit/sat-category/${category.id}`"
                icon="i-lucide-edit"
                size="xs"
                variant="outline"
              >
                Edit
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()

// Fetch problem categories
const { data: categories, error } = await supabase
  .from('problem_categories')
  .select('*')
  .eq('discipline', 'SAT')
  .order('section')
  .order('domain')
  .order('name')

if (error) {
  console.error('Error fetching categories:', error)
}

// Group categories by section and domain
const groupedCategories = computed(() => {
  const sections = {}
  
  categories?.forEach(category => {
    // Initialize section if it doesn't exist
    if (!sections[category.test_section]) {
      sections[category.test_section] = {
        name: category.test_section,
        domains: {}
      }
    }
    
    // Initialize domain if it doesn't exist
    if (!sections[category.test_section].domains[category.domain]) {
      sections[category.test_section].domains[category.domain] = {
        name: category.domain,
        categories: []
      }
    }
    
    // Add category to its domain
    sections[category.test_section].domains[category.domain].categories.push(category)
  })
  
  // Convert to array format
  return Object.values(sections).map(section => ({
    ...section,
    domains: Object.values(section.domains)
  }))
})
</script>
