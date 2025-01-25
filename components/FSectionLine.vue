<script setup lang="ts">

interface IProps {
    wrapperTag?: string
}

withDefaults(defineProps<IProps>(), { wrapperTag: 'h3' });
</script>

<template>
  <component
    :is='wrapperTag'
    class='text-xl border-b border-zinc-400 pb-2
        dark:text-zinc-100 dark:border-zinc-100'>
    <slot />
  </component>
</template>