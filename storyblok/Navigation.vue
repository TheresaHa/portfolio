<template>

<nav class="bg-rose-200 fixed w-full sm:flex py-4 px-10 md:px-24 shadow-lg xl:shadow-2xl">
    <a href="/" v-editable="blok" class="w-full"> {{ blok.page_title }} </a>

    <div class="w-full flex">
        <StoryblokComponent
        v-for="blok in blok.nav_item"
        :key="blok._uid"
        :blok="blok" 
        class="flex-1 text-center hover:underline hover:underline-offset-4"/> 
    </div>

</nav>

</template>

<script setup>
const props = defineProps({blok: Object});
</script>