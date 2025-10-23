<template>
 <section id="works" class="py-16 bg-[#001412]">
    <div class="container">
      <div class="mb-6 flex items-center justify-between">
        <div>
          <h2 class="text-2xl md:text-3xl font-semibold">Selected works</h2>
          <p class="mt-1 text-sm text-white/70">See our featured works here.</p>
        </div>
        <a href="#" class="hidden sm:inline-flex rounded-md border border-white/30 px-4 py-2 text-sm hover:bg-white/10">View All</a>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <!-- work card -->
        <article class="overflow-hidden rounded-md bg-card ring-1 ring-white/10">
          <div class="aspect-[16/9] w-full bg-black/20">
            <img src="../Pictures/BoxedWater.jpg" class="h-full w-full object-cover" alt="">
          </div>
          <div class="p-5">
            <h3 class="font-semibold">XoolTech</h3>
            <p class="mt-1 text-sm text-white/70">We partnered with XoolTech’s amazing team...</p>
            <span class="mt-3 inline-block rounded bg-base2 px-2 py-1 text-xs text-white/80">Brand Identity</span>
          </div>
        </article>

        <article class="overflow-hidden rounded-md bg-card ring-1 ring-white/10">
          <div class="aspect-[16/9] w-full bg-black/20">
            <img src="../Pictures/Lapakas.jpg" class="h-full w-full object-cover" alt="">
          </div>
          <div class="p-5">
            <h3 class="font-semibold">Flinkerk</h3>
            <p class="mt-1 text-sm text-white/70">Helping streamline project development...</p>
            <span class="mt-3 inline-block rounded bg-base2 px-2 py-1 text-xs text-white/80">Web Design</span>
          </div>
        </article>

        <article class="overflow-hidden rounded-md bg-card ring-1 ring-white/10">
          <div class="aspect-[16/9] w-full bg-black/20">
            <img src="../Pictures/meik.jpg" class="h-full w-full object-cover" alt="">
          </div>
          <div class="p-5">
            <h3 class="font-semibold">Alberto Maya</h3>
            <p class="mt-1 text-sm text-white/70">A fully automated and highly configurable solution...</p>
            <span class="mt-3 inline-block rounded bg-base2 px-2 py-1 text-xs text-white/80">Web Development</span>
          </div>
        </article>

        <article class="overflow-hidden rounded-md bg-card ring-1 ring-white/10">
          <div class="aspect-[16/9] w-full bg-black/20">
            <img src="../Pictures/Lapakas.jpg" alt="" class="h-full w-full object-cover">
          </div>
          <div class="p-5">
            <h3 class="font-semibold">Flickerd</h3>
            <p class="mt-1 text-sm text-white/70">Custom web and app solutions for efficiency...</p>
            <span class="mt-3 inline-block rounded bg-base2 px-2 py-1 text-xs text-white/80">Graphic Design</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
// Work page component
</script>
