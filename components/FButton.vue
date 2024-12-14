<script setup lang='ts'>


interface Props {
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary'
});

const variantClasses: { [key: string] : string } = {
  primary: 'bg-blue-500 border border-blue-500 text-zinc-100 enabled:hover:bg-blue-600 enabled:hover:text-zinc-200 enabled:active:bg-blue-700 enabled:active:ring-blue-400',
  secondary: 'bg-none dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600 enabled:dark:hover:bg-zinc-600 ' +
    'enabled:dark:hover:text-zinc-200 hover:bg-zinc-200 enabled:dark:active:bg-zinc-800 ' + 
    'enabled:dark:active:ring-zinc-300 enabled:active:bg-zinc-200 enabled:active:ring-zinc-800'
};

const computedClass = computed(() => {
  const classes = variantClasses[props.variant];
  return classes;
});

</script>

<template>
  <button
    :class='computedClass'
    class='disabled:opacity-75 px-3 py-1.5 rounded-md duration-200 enabled:active:ring-2 active:outline-none'>
    <slot />
  </button>
</template>