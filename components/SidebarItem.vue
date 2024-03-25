<script setup lang='ts'>
interface Props {
  iconName?: string,
  iconClasses?: string,
  active?: boolean
}

withDefaults(defineProps<Props>(), {
  iconName: 'material-symbols:insert-chart-sharp',
  iconClasses: '',
  active: false,
});

</script>

<template>
  <a
    :class='[active
               ? "bg-blue-500 text-gray-50" 
               : "text-gray-300 hover:text-gray-100 hover:bg-gray-600",
             $attrs.class]'
    class='flex p-2 gap-3 items-center rounded duration-200 cursor-pointer'>
    <Icon
      :name='iconName'
      size='1.5rem'
      :class='iconClasses' />
    <slot />
  </a>
</template>