<template>

  <div class="flex flex-wrap-reverse flex-row-reverse sm:flex-row sm:flex-nowrap pt-8 sm:pt-12 ">
    <div class="w-full mx-10 mt-10 lg:mx-32 lg:mt-32 md:mx-20 md:mt-20 sm:pt-8">
      <p v-editable="blok.preheadline" class="font-medium text-rose-300">
        {{ blok.preheadline }}
      </p>

      <h1 v-editable="blok" class="font-serif font-bold text-5xl leading-snug">
        {{ blok.headline }}
      </h1>

      <div v-html="descriptionContent" class="text-slate-500 mt-4 mb-8"></div>

      <div v-editable="blok" class="space-x-2" >
        <StoryblokComponent
          v-for="blok in blok.button"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
    </div>

    <div v-editable="blok" class="md:w-full md:mr-0 w-1/2 xl:flex xl:justify-end">
      <img :src="blok.image.filename" :alt="blok.image.alt">
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const descriptionContent = computed(() =>
  renderRichText(props.blok.description));
</script>
