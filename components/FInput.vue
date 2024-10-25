<script setup lang='ts'>
const value = defineModel<any>();

</script>

<template>
  <input
    v-model='value'
    class='dark:bg-zinc-700 bg-transparent border dark:border-zinc-600 border-zinc-400 dark:text-zinc-200 outline-none rounded px-3 py-[0.375rem]
      duration-150 ease-in-out 
    focus:border-sky-600 focus:text-zinc-200 focus:ring-1 focus:ring-sky-300'>
</template>