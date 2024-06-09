<template>
    <p v-editable="blok" class="text-center text-slate-400 text-sm mb-4">
        {{ blok.message }}
    </p>

    <div v-editable="blok" class="flex justify-center space-x-4">
      <StoryblokComponent
      v-for="blok in blok.socials_item"
      :key="blok._uid"
      :blok="blok" /> 
    </div>


</template>

<script setup>
const props = defineProps({ blok: Object })

</script>