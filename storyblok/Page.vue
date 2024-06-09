<template>
  <div class="mb-12">
    
    <div v-editable="blok">
      <StoryblokComponent
      v-for="blok in blok.navigation"
      :key="blok._uid"
      :blok="blok" /> 
    </div>
    
    <div v-editable="blok">
      <StoryblokComponent 
      v-for="blok in blok.body" 
      :key="blok._uid" 
      :blok="blok" />
    </div>

    <div v-editable="blok">
      <StoryblokComponent
      v-for="blok in blok.footer"
      :key="blok._uid"
      :blok="blok" /> 
    </div>

  </div>
  
</template>



<script setup>
const props = defineProps({ blok: Object })

</script>
