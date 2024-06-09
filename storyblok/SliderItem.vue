<template>
    <img :src="blok.image.filename" :alt="blok.image.alt" />
</template>

<script setup>
defineProps({ blok: Object })
</script>