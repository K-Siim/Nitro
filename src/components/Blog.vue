// Blog.vue
<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-6 py-8">
        <h1 class="text-4xl font-bold text-gray-900">Blogs</h1>
        <p class="text-gray-600 mt-2">Discover insights, best practices, and cutting-edge research from here</p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-6 py-12">
      <!-- Category Filter -->
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-xl font-semibold text-gray-900">All Posts</h2>
        <button class="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
          Category
        </button>
      </div>

      <!-- Blog Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="post in blogPosts"
          :key="post.id"
          @click="navigateToBlogPost(post.id)"
          class="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 border border-gray-200"
        >
          <!-- Image -->
          <div class="relative h-48 bg-gray-200 overflow-hidden">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {{ post.title }}
            </h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              {{ post.excerpt }}
            </p>

            <!-- Tags -->
            <div class="flex gap-2 flex-wrap">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center items-center gap-2 mt-12">
        <button class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-600 hover:bg-gray-50">←</button>
        <button v-for="n in 5" :key="n" class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-600 hover:bg-gray-50">
          {{ n }}
        </button>
        <button class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-600 hover:bg-gray-50">→</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const blogPosts = ref([
  {
    id: 1,
    title: 'The importance of a strong brand identity',
    excerpt: 'Learn why establishing a strong brand identity is crucial for building a lasting connection with your audience.',
    image: 'https://picsum.photos/1200/600',
    tags: ['Branding', 'Design']
  },
  {
    id: 2,
    title: 'Top 10 UI and UX design mistakes to avoid',
    excerpt: 'Discover the most common design mistakes and how to avoid them to create better user experiences.',
    image: 'https://picsum.photos/1200/600',
    tags: ['Design', 'UX']
  },
  {
    id: 3,
    title: 'The benefits of using a web framework',
    excerpt: 'Explore why web frameworks are essential tools for modern development and how they accelerate your workflow.',
    image: 'https://picsum.photos/1200/600',
    tags: ['Development', 'Framework']
  },
  {
    id: 4,
    title: 'Understanding responsive web design',
    excerpt: 'A comprehensive guide to building websites that work seamlessly across all devices and screen sizes.',
    image: 'https://picsum.photos/1200/600',
    tags: ['Design', 'Web']
  },
  {
    id: 5,
    title: 'Best practices in modern development',
    excerpt: 'Learn the industry standards and best practices that every developer should follow in 2024.',
    image: 'https://picsum.photos/1200/600',
    tags: ['Development', 'Best+Practices']
  },
  {
    id: 6,
    title: 'Creating engaging content for your blog',
    excerpt: 'Tips and strategies for writing content that resonates with your audience and drives engagement.',
    image: 'https://picsum.photos/1200/600',
    tags: ['Content', 'Writing']
  }
])

const navigateToBlogPost = (postId) => {
  router.push({ name: 'BlogPost', params: { id: postId } })
}
</script>