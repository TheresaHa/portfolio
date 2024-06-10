<template>

<div v-if="blok.is_detail" class="flex-col justify-center">

  <div class="flex flex-wrap flex-row sm:flex-row sm:flex-nowrap pt-20 sm:pt-12 md:mx-12 lg:mx-28 xl:mx-48">
    <div class="w-full mx-10 mt-10 md:w-1/2 lg:mt-28 md:mt-18 sm:pt-8">

      <p v-editable="blok.preheadline" class="font-medium text-rose-300">
        {{ blok.pre_title }}
      </p>

      <h1 v-editable="blok" class="font-serif font-bold text-5xl leading-snug">
        {{ blok.title }}
      </h1>

      <div v-html="descriptionContent" class="text-slate-500 mt-4 mb-8"></div>
    </div>

    <div v-editable="blok" class="w-full md:w-auto">
      <div class="shadow-lg rounded-2xl space-y-4 p-6 lg:mt-18 md:mx-12 sm:mt-32 m-8">

      <h2 class="font-serif font-bold text-2xl leading-snug">Some Facts:</h2>
      
      <div v-editable="blok" class="flex flex-wrap space-x-2">
        <p class="text-slate-500 text-sm">Created with:</p>
        <StoryblokComponent
          v-for="blok in blok.created_with"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
      
      <div v-editable="blok" class="flex flex-wrap space-x-2">
        <p class="text-slate-500 text-sm">Subject:</p>
        <StoryblokComponent
            v-for="blok in blok.subject"
            :key="blok._uid"
            :blok="blok"
          />
      </div>

      <div v-editable="blok" class="flex flex-wrap space-x-2">
        <p class="text-slate-500 text-sm">Tools:</p>
        <StoryblokComponent
            v-for="blok in blok.tools"
            :key="blok._uid"
            :blok="blok"
          />
      </div>
      
      <p v-editable="blok" class="text-slate-500 text-sm">
        {{ blok.date }}
      </p>
      
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 md:mx-48 lg:mx-48 mx-12 my-12 md:space-x-12 space-y-12">
    <StoryblokComponent
        v-for="blok in blok.sliderItem"
        :key="blok._uid"
        :blok="blok"
        class="h-auto max-w-full shadow-md rounded-xl"
    />

</div>

</div>
  <div v-else class="sm:flex md:w-3/4 mx-12 p-12 shadow-2xl 
    transition ease-in-out duration-300 hover:bg-gray-100 rounded-3xl space-x-12">
    <div>
      <p v-editable="blok" class="font-serif font-bold text-xl leading-snug">
        {{ blok.title }}
      </p>

      <p v-editable="blok" class="text-slate-500 mt-4 mb-8">
        {{ blok.preview_text }}
      </p>

      <div v-editable="blok" class="space-x-2 my-5">
        <StoryblokComponent
          v-for="blok in blok.button"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
    </div>

    <div v-editable="blok" class="w-auto">
      <img :src="blok.image.filename" :alt="blok.image.alt" class="md:rounded-3xl rounded-xl sm:rounded-2xl" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const descriptionContent = computed(() =>
  renderRichText(props.blok.description)
);
</script>
