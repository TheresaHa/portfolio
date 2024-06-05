<template>
    
    <a v-editable="blok" class="" :href="blok.link.cached_url" target="_blank">
    {{ blok.label }}
    </a>

  </template>
  
  <script setup>
  defineProps({ blok: Object })
  </script>
  