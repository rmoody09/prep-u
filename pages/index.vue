<template>
    <div class="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <!-- Navigation -->
      <!--
      <nav class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold text-blue-600">PrepU</div>
          <div class="hidden md:flex space-x-6">
            <a href="#features" class="text-gray-600 hover:text-blue-600 transition duration-300">Features</a>
            <a href="#testimonials" class="text-gray-600 hover:text-blue-600 transition duration-300">Testimonials</a>
            <a href="#pricing" class="text-gray-600 hover:text-blue-600 transition duration-300">Pricing</a>
            <a href="#faq" class="text-gray-600 hover:text-blue-600 transition duration-300">FAQ</a>
          </div>
          <button class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </nav>
      -->
  
      <!-- Hero Section -->
      <section class="container mx-auto px-6 py-16 text-center">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800">Master the SAT with Prep<span class="text-green-500">U</span></h1>
        <p class="text-xl mb-8 text-gray-600">Your digital guide to SAT success with interactive strategy guides, dynamic drills, and abundant practice problems</p>
        <UButton to="/sat-guide" size="xl" :ui="{ rounded: 'rounded-full' }" class="px-8 py-3">
          Start Your Prep Journey
        </UButton>
      </section>
  
      <!-- Features Section -->
      <section id="features" class="container mx-auto px-6 py-16">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Prep<span class="text-green-500">U</span>?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <!--<component :is="feature.icon" class="w-12 h-12 text-blue-600 mb-4" />-->
            <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section id="testimonials" class="bg-blue-50 py-16">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">What Our Students Say</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-white p-6 rounded-lg shadow-md">
              <p class="text-gray-600 mb-4">"{{ testimonial.quote }}"</p>
              <div class="flex items-center gap-2">
                <UAvatar :alt="testimonial.name" size="lg" />
                <div>
                  <h4 class="font-semibold text-gray-800">{{ testimonial.name }}</h4>
                  <p class="text-gray-600">{{ testimonial.score }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Pricing Section -->
      <!--
      <section id="pricing" class="container mx-auto px-6 py-16">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Choose Your Prep Plan</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="plan in pricingPlans" :key="plan.title" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 class="text-2xl font-semibold mb-4 text-gray-800">{{ plan.title }}</h3>
            <p class="text-4xl font-bold mb-6 text-blue-600">${{ plan.price }}<span class="text-sm text-gray-600">/month</span></p>
            <ul class="mb-6">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center mb-2">
                <CheckIcon class="w-5 h-5 text-green-500 mr-2" />
                <span class="text-gray-600">{{ feature }}</span>
              </li>
            </ul>
            <button class="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>
      -->

      <section id="pricing" class="container px-6 py-16 bg-blue-50">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Pricing</h2>
        <div class="flex flex-col gap-4">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold mb-4 text-gray-800 text-center">Free</h3>
            <div class="flex flex-row justify-center">
                <div>
                    We will eventually offer tiered options, but for now, everything is 100% free!
                </div>
            </div>
          </div>
        </div>
      </section>
      <!-- FAQ Section -->
      <section id="faq" class="bg-blue-50 py-16">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          <div class="space-y-4">
            <div v-for="faq in faqs" :key="faq.question" class="bg-white p-6 rounded-lg shadow-md">
              <h4 class="font-semibold text-gray-800 mb-2">{{ faq.question }}</h4>
              <p class="text-gray-600">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-6">
          <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-1/4 mb-6 md:mb-0">
              <h5 class="text-xl font-semibold mb-4">PrepU</h5>
              <p class="text-gray-400">Empowering students to achieve their best SAT scores.</p>
            </div>
            <div class="w-full md:w-1/4 mb-6 md:mb-0">
              <h5 class="text-xl font-semibold mb-4">Quick Links</h5>
              <ul class="space-y-2">
                <li><a href="#features" class="text-gray-400 hover:text-white transition duration-300">Features</a></li>
                <li><a href="#testimonials" class="text-gray-400 hover:text-white transition duration-300">Testimonials</a></li>
                <li><a href="#pricing" class="text-gray-400 hover:text-white transition duration-300">Pricing</a></li>
                <li><a href="#faq" class="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 mb-6 md:mb-0">
              <h5 class="text-xl font-semibold mb-4">Contact Us</h5>
              <p class="text-gray-400">Email: info@prepu.com</p>
            </div>
            <!--
            <div class="w-full md:w-1/4">
              <h5 class="text-xl font-semibold mb-4">Follow Us</h5>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                  <FacebookIcon class="w-6 h-6" />
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                  <TwitterIcon class="w-6 h-6" />
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                  <InstagramIcon class="w-6 h-6" />
                </a>
              </div>
            </div>
            -->
          </div>
          <div class="mt-8 text-center text-gray-400">
            <p>&copy; 2024 PrepU. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'

  definePageMeta({
    layout: 'landing'
  })
  //import { BookOpenIcon, PuzzlePieceIcon, ChartBarIcon, CheckIcon, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-vue-next'
  
  const features = ref([
    {
      //icon: BookOpenIcon,
      title: 'Comprehensive Strategy Guides',
      description: 'Access in-depth guides covering all SAT sections, with expert tips and tricks.'
    },
    {
      //icon: PuzzlePieceIcon,
      title: 'Interactive Drills',
      description: 'Master the skills with interactive drills to ensure you nail the concepts.'
    },
    {
      //icon: ChartBarIcon,
      title: 'Dynamic Practice Problems',
      description: 'Practice with dynamic problems that adapt to your skill level and learning pace.'
    }
  ])
  
  const testimonials = ref([
    {
      quote: 'PrepU helped me boost my SAT score by 200 points! The strategy guides and practice problems were invaluable.',
      name: 'Emily Chen',
      score: 'SAT Score: 1520',
      avatar: '/placeholder.svg?height=48&width=48'
    },
    {
      quote: 'PrepU really helped me focus on my weak areas. I saw improvement within weeks!',
      name: 'Michael Johnson',
      score: 'SAT Score: 1480',
      avatar: '/placeholder.svg?height=48&width=48'
    }
  ])
  
  const pricingPlans = ref([
    {
      title: 'Basic',
      price: 19,
      features: ['Access to strategy guides', 'Limited practice problems', 'Basic progress tracking']
    },
    {
      title: 'Premium',
      price: 39,
      features: ['Full access to strategy guides', 'Unlimited practice problems', 'Advanced analytics', 'Personalized study plan']
    },
    {
      title: 'Ultimate',
      price: 59,
      features: ['Everything in Premium', 'One-on-one tutoring sessions', 'Essay review service', 'Guaranteed score improvement']
    }
  ])
  
  const faqs = ref([
    {
      question: 'How long does it take to see improvement in SAT scores?',
      answer: 'While individual results may vary, many students see significant improvement within 4-6 weeks of consistent practice with PrepU.'
    },
    {
      question: 'Can I access PrepU on mobile devices?',
      answer: 'Yes, PrepU is fully responsive and can be accessed on smartphones, tablets, and desktop computers.'
    }
  ])
  </script>

<style>
    html,body {
        font-family: 'Noto Sans', sans-serif;
    }
</style>


