<template>

    <div class="container flex w-fit bg-rose-100 rounded-xl space-x-2 px-3">
        <span v-html="emojiIcon"></span>
        <p v-editable="blok">{{ blok.label }}</p>
    </div>
    

</template>

<script setup>
const props = defineProps({blok: Object});
const emojiIcon = computed(() =>
  renderRichText(props.blok.emoji));
</script>