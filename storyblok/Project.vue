<template>

  <div v-if="blok.is_detail" class="flex flex-wrap flex-row sm:flex-row sm:flex-nowrap pt-20 sm:pt-12 ">
    <div class="w-full mx-10 mt-10 lg:mx-32 lg:mt-28 md:mx-20 md:mt-20 sm:pt-8">

      <p v-editable="blok.preheadline" class="font-medium text-rose-300">
        {{ blok.pre_title }}
      </p>

      <h1 v-editable="blok" class="font-serif font-bold text-5xl leading-snug">
        {{ blok.title }}
      </h1>

      <div v-html="descriptionContent" class="text-slate-500 mt-4 mb-8"></div>
    </div>

    <div v-editable="blok" class="md:w-full w-1/2">

      <div class="shadow mx-10 mt-4 lg:mx-32 lg:mt-48 md:mx-20 sm:mt-32">
        <h2>Some Facts:</h2>
      <p>Created with:</p>
      <div v-editable="blok" class="flex">
        <StoryblokComponent
          v-for="blok in blok.created_with"
          :key="blok._uid"
          :blok="blok"
        />
      </div>

      <p>Subject:</p>
      <div v-editable="blok" class="flex">
        <StoryblokComponent
          v-for="blok in blok.subject"
          :key="blok._uid"
          :blok="blok"
        />
      </div>

      <p>Tools:</p>
      <div v-editable="blok" class="flex">
        <StoryblokComponent
          v-for="blok in blok.tools"
          :key="blok._uid"
          :blok="blok"
        />
      </div>

      <p v-editable="blok" class="">
        {{ blok.date }}
      </p>
      
      </div>



    </div>
  </div>

  <div v-else class="flex p-12 shadow-2xl rounded-3xl">
    <div>
      <p v-editable="blok">
        {{ blok.title }}
      </p>

      <div v-html="descriptionContent" class="text-slate-500 mt-4 mb-8"></div>

      <div v-editable="blok" class="space-x-2 my-5">
        <StoryblokComponent
          v-for="blok in blok.button"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
    </div>

    <div v-editable="blok" class="w-full">
      <img :src="blok.image.filename" :alt="blok.image.alt" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const descriptionContent = computed(() =>
  renderRichText(props.blok.description)
);
</script>
