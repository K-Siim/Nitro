<template>
    <div>
      <nav class="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a3ec529632909.55fc107b84b8c.png" alt="Logo" class="rounded-full w-10 h-10 object-cover" />
          <span class="text-xl font-semibold text-gray-800">MyApp</span>
        </div>
  
        <!-- Desktop Nav -->
        <div class="hidden md:flex space-x-6">
          <router-link to="/" class="text-gray-700 hover:text-blue-600 font-medium transition">Home</router-link>
          <router-link to="/about" class="text-gray-700 hover:text-blue-600 font-medium transition">About</router-link>
          <router-link to="/contact" class="text-gray-700 hover:text-blue-600 font-medium transition">Contact</router-link>
        </div>
  
        <!-- Mobile hamburger -->
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="text-gray-700 hover:text-blue-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </nav>
  
      <!-- Mobile menu dropdown -->
      <div v-if="isMenuOpen" class="md:hidden bg-white shadow-md px-6 py-4 space-y-2">
        <router-link to="/" class="block text-gray-700 hover:text-blue-600 font-medium transition">Home</router-link>
        <router-link to="/about" class="block text-gray-700 hover:text-blue-600 font-medium transition">About</router-link>
        <router-link to="/contact" class="block text-gray-700 hover:text-blue-600 font-medium transition">Contact</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isMenuOpen = ref(false)
  </script>
  
  <style scoped>
  /* Saad lisada animatsioone või muud stylingut siia */
  </style>
  