<template>

    <div v-editable="blok" class="w-8">
        <a :href="blok.link.cached_url" target="_blank">
            <img :src="blok.icon.filename" :alt="blok.icon.alt" />
        </a>
    </div>

</template>

<script setup>
const props = defineProps({ blok: Object })

</script>