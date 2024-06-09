<template>

<p v-editable="blok.preheadline" class="font-medium text-rose-300 ">
        {{ blok.title }}
</p>

<div class="grid grid-cols-2 md:grid-cols-3 gap-4 ">
    
    <StoryblokComponent
        v-for="blok in blok.sliderItem"
        :key="blok._uid"
        :blok="blok"
        class="h-auto max-w-full rounded-lg shadow-md"
    />

</div>





</template>

<script setup>
defineProps({ blok: Object })
</script>