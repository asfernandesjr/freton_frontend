<script setup lang='ts'>


interface Props {
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary'
});

const variantClasses: { [key: string] : string } = {
  primary: 'bg-blue-500 border border-blue-500 text-zinc-100 enabled:hover:bg-blue-600 enabled:hover:text-zinc-200 enabled:active:bg-blue-700 enabled:active:ring-blue-400',
  secondary: 'border duration-150 active:ring-2 ' +
    'text-zinc-500 dark:text-zinc-300 bg-zinc-100 dark:hover:text-zinc-100 dark:bg-zinc-800 border-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 ' +
    'hover:text-zinc-600 active:border-zinc-400 active:text-zinc-600 active:bg-zinc-100 active:ring-zinc-600 dark:active:bg-zinc-800 dark:active:text-zinc-100'
};

const computedClass = computed(() => {
  const classes = variantClasses[props.variant];
  return classes;
});

</script>

<template>
  <button
    :class='computedClass'
    class='disabled:opacity-75 px-3 py-1.5 rounded-md duration-150 enabled:active:ring-2 active:outline-none'>
    <slot />
  </button>
</template>