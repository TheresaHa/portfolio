<template>

<div class="flex-col justify-center my-12">
  <div>
    <p v-editable="blok.headline" 
    class="font-serif font-bold text-3xl leading-snug text-center 
    underline underline-offset-8 decoration-4 decoration-rose-300">
    {{ blok.headline }}
    </p>
  </div>
  
  <div
    v-editable="blok" class="container mx-auto grid gap-12 my-12 place-items-center">
    <StoryblokComponent
      v-for="blok in blok.columns"
      :key="blok._uid"
      :blok="blok"
    />
  </div>

</div>

  
</template>

<script setup>
defineProps({ blok: Object })
</script>
