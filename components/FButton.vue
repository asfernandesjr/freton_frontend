<script setup lang='ts'>


interface Props {
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary'
});

const variantClasses: { [key: string] : string } = {
  primary: 'bg-blue-500 text-gray-100 enabled:hover:bg-blue-600 enabled:hover:text-gray-200 enabled:active:bg-blue-700 enabled:active:ring-blue-300',
  secondary: 'bg-none border border-gray-600 text-black enabled:hover:bg-gray-600 enabled:hover:text-gray-200 enabled:active:bg-black enabled:active:ring-gray-300'
};

const computedClass = computed(() => {
  const classes = variantClasses[props.variant];
  return classes;
});

</script>

<template>
  <button
    :class='computedClass'
    class='disabled:opacity-75 px-4 py-2 rounded-md duration-200 enabled:active:ring-2 active:outline-none'>
    <slot />
  </button>
</template>