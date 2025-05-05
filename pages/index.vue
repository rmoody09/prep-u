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
        <UButton to="/sat/intro/about" size="xl" :ui="{ rounded: 'rounded-full' }" class="px-8 py-3">
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
  
      <!-- Pricing Section -->
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
              <p class="text-gray-400">Empowering students to achieve their best SAT scores</p>
            </div>
            <div class="w-full md:w-1/4 mb-6 md:mb-0">
              <h5 class="text-xl font-semibold mb-4">Quick Links</h5>
              <ul class="space-y-2">
                <li><a href="#features" class="text-gray-400 hover:text-white transition duration-300">Features</a></li>
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
      description: 'Access in-depth guides covering all SAT sections, with expert tips and tricks. No need to purchase any prep books - PrepU\'s unparalleled content is 100% free.'
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
      question: 'What makes PrepU different from other SAT prep resources?',
      answer: 'PrepU combines comprehensive strategy guides with interactive, adaptive learning. Unlike static prep books, PrepU provides personalized practice problems and targeted drills that adapt to your skill level. Our platform is designed by an experienced SAT tutor who understands both test preparation and software development.'
    },
    {
      question: 'How should I prepare for the SAT?',
      answer: 'Start by familiarizing yourself with the SAT structure and content through our comprehensive guides. Then, use our interactive drills to master specific skills and practice problems to apply what you\'ve learned. We recommend starting preparation at least 12 weeks before your test date for optimal results.'
    },
    {
      question: 'When is the best time to take the SAT?',
      answer: 'While timing depends on individual circumstances, taking the SAT earlier has several advantages: it reduces test anxiety by allowing retakes if needed, increases chances of a better superscore through multiple attempts, and frees up time for other college application tasks. Recruited athletes and scholarship seekers may need to take it earlier.'
    },
    {
      question: 'Does PrepU help with ACT preparation?',
      answer: 'While there is significant overlap in the skills tested by both exams, PrepU currently focuses exclusively on SAT preparation. Once we have fully optimized our SAT prep process and the new ACT format is established, we plan to develop a similar interactive experience for the ACT.'
    },
    {
      question: 'How does PrepU help with test-taking strategies?',
      answer: 'PrepU provides comprehensive guidance on various aspects of test-taking, including pacing, intelligent guessing, identifying wrong answers, and test-day preparation. Our strategies are designed to help you maximize your score by optimizing how you approach the test, in addition to mastering the content.'
    }
  ])
  </script>

<style>
    html,body {
        font-family: 'Noto Sans', sans-serif;
    }
</style>


