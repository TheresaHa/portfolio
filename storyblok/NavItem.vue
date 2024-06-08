<template>

    <div v-editable="blok">
        <a :href="blok.link.cached_url">
            {{ blok.label }}
        </a>
    </div>

</template>

<script setup>
const props = defineProps({ blok: Object })
</script>