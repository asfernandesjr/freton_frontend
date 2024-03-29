<script setup lang='ts'>
const value = defineModel<any>();

</script>

<template>
  <input
    v-model='value'
    class='bg-transparent border border-gray-400 text-gray-600 outline-none rounded px-3 py-[0.375rem]
      duration-150 ease-in-out
    focus:border-sky-600 focus:text-gray-600 focus:ring-2 focus:ring-sky-300'>
</template>