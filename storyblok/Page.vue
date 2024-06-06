<template>
  <p class="bg-rose-300">Hier kommt NAV</p>

  <div v-editable="blok" class="">
    <StoryblokComponent 
    v-for="blok in blok.body" 
    :key="blok._uid" 
    :blok="blok" />
  </div>

  <p>Hier kommt Footer</p>
</template>



<script setup>
const props = defineProps({ blok: Object })

</script>
