<template>

<div class="flex p-12 bg-[#f7f6fd] rounded-[5px]">
    
    <div>
        <p v-editable="blok">
        {{ blok.title }}
        </p>

        <div v-html="descriptionContent" class="text-slate-500 mt-4 mb-8"></div>

        <p v-editable="blok" class="">
        {{ blok.date }}
        </p>

        <div v-editable="blok" class="space-x-2 my-5" >
        <StoryblokComponent
          v-for="blok in blok.button"
          :key="blok._uid"
          :blok="blok"
        />
      </div>


    </div>

    <div v-editable="blok" class="w-full ">
        <img :src="filename" :alt="alt">
    </div>

    
   
</div>

</template>

<script setup>
const props = defineProps({blok: Object});
const descriptionContent = computed(() =>
  renderRichText(props.blok.description));
</script>