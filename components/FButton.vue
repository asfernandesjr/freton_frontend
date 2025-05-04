<script setup lang='ts'>
import { type ComponentProps, type ComponentVariants, type ComponentSizes } from '@/types/core';


type FButtonProps = { type?: 'submit' | 'button' } & ComponentProps

const props = withDefaults(defineProps<FButtonProps>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
});

const variantClasses: Record<ComponentVariants, string> = {
  primary: 'text-zinc-100 border-blue-600 bg-blue-600 ' + 
    'enabled:hover:bg-blue-700 enabled:hover:text-zinc-200 enabled:active:bg-blue-700 enabled:active:ring-blue-400',
  secondary: 'text-zinc-600 bg-transparent border-zinc-600 hover:bg-zinc-200 ' +
    'hover:text-zinc-100 active:border-zinc-800 active:text-zinc-100 active:bg-zinc-100 active:ring-zinc-600 ' +
    'dark:text-zinc-300 dark:border-zinc-100 dark:active:bg-zinc-100 dark:active:text-zinc-800 dark:hover:text-zinc-800 ' +
    'dark:hover:bg-zinc-100 dark:active:ring-zinc-100 dark:active:border-zinc-200',
  danger: 'text-zinc-100 border-red-600 bg-red-600 ' + 
    'enabled:hover:bg-red-700 enabled:hover:text-zinc-200 enabled:active:bg-red-700 enabled:active:ring-red-400',
  success: 'text-zinc-100 border-green-600 bg-green-600 ' + 
    'enabled:hover:bg-green-700 enabled:hover:text-zinc-200 enabled:active:bg-green-700 enabled:active:ring-green-400',
};


const sizeClasses : Record<ComponentSizes, string> = {
  sm: 'text-sm px-2 py-1',
  md: 'px-3 py-1.5',
  lg: 'text-lg px-4 py-2'
};

const computedClass = computed(() => {
  let classes = variantClasses[props.variant];
  classes += ' ' + sizeClasses[props.size];
  return classes;
});

</script>

<template>
  <button
    :type='type'
    :class='computedClass'
    class='border disabled:opacity-75 rounded-md duration-150 enabled:active:ring-2 active:outline-none'>
    <slot />
  </button>
</template>