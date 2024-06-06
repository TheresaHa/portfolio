<template>
  <div class="flex p-12 shadow-2xl rounded-3xl">
    <div>
      <p v-editable="blok">
        {{ blok.title }}
      </p>

      <div v-html="descriptionContent" class="text-slate-500 mt-4 mb-8"></div>

      <p v-editable="blok" class="">
        {{ blok.date }}
      </p>

      
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
