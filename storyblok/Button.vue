
<template>
      <a v-editable="blok" v-if="blok.is_primary" class="bg-rose-300 hover:bg-rose-400 font-medium py-2 px-4 rounded-xl w-24" 
      :href="blok.link.cached_url" target="_blank">
      {{ blok.label }}
      </a>
      <a v-editable="blok" v-else class="border border-slate-500 hover:bg-rose-200 hover:border-slate-400 font-medium py-2 px-4 rounded-xl w-24" 
      :href="blok.link.cached_url" target="_blank">
      {{ blok.label }}
    </a>
</template>
  
  
  <script setup>
  defineProps({ blok: Object })
  </script>
  