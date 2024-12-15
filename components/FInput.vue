<script setup lang='ts'>
const value = defineModel<any>();

</script>

<template>
  <input
    v-model='value'
    class='bg-transparent border focus:ring-1 outline-none rounded px-3 py-[0.375rem] duration-150 ease-in-out
    text-zinc-400 border-zinc-400 focus:text-zinc-800
    dark:text-zinc-400 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:text-zinc-100
    focus:border-sky-600 focus:ring-sky-300'>
</template>