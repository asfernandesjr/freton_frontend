<script setup lang='ts'>
interface Props {
  iconName?: string,
  label?: string,
  iconClasses?: string,
}

withDefaults(defineProps<Props>(), {
  iconName: 'material-symbols:insert-chart-sharp',
  label: 'Frete',
  iconClasses: '',
});
</script>

<template>
  <div
    :class='$attrs.class'
    class='flex p-2 gap-3 items-center rounded 
      text-gray-300 hover:text-gray-100 hover:bg-gray-600 duration-200'>
    <Icon
      :name='iconName'
      size='1.5rem'
      :class='iconClasses' />
    <span>{{ label }}</span>
  </div>
</template>