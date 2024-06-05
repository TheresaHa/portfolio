<template>
  <div class="container flex">
    <div>
      <p v-editable="blok" class="">
        {{ blok.preheadline }}
      </p>

      <h1 v-editable="blok" class="">
        {{ blok.headline }}
      </h1>

      <p v-editable="blok" class="">
        {{ blok.description }}
      </p>

      <div v-editable="blok" class="px-4">
        <StoryblokComponent
          v-for="blok in blok.button"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
    </div>

    <div v-editable="blok">
      <p>Hier kommt Image</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
