<template>
  <div class="flex flex-wrap-reverse sm:flex-nowrap">
    <div class="w-full mx-10 mt-10 lg:mx-32 lg:mt-32 md:mx-20 md:mt-20">
      <p v-editable="blok" class="">
        {{ blok.preheadline }}
      </p>

      <h1 v-editable="blok" class="font-serif font-bold text-5xl">
        {{ blok.headline }}
      </h1>

      <p v-editable="blok" class="">
        {{ blok.description }}
      </p>

      <div v-editable="blok" class="bg-rose-300 hover:bg-rose-100 text-white font-bold py-2 px-4 rounded w-24">
        <StoryblokComponent
          v-for="blok in blok.button"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
    </div>

    <div v-editable="blok" class="w-full ">
      <img :src="blok.image.filename" :alt="blok.image.alt">
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
