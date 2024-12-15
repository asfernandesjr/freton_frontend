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
    'text-zinc-500 bg-zinc-100 border-zinc-400 hover:text-zinc-100 hover:bg-zinc-600 hover:border-zinc-600 ' +
    'active:border-zinc-400 active:text-zinc-500 active:bg-zinc-100 active:ring-zinc-600'
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