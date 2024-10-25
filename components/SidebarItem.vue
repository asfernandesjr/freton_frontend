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
               ? "bg-blue-500 text-zinc-50" 
               : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700",
             $attrs.class]'
    class='flex p-2 gap-3 items-center rounded duration-200 cursor-pointer'>
    <Icon
      :name='iconName'
      size='1.5rem'
      :class='iconClasses' />
    <slot />
  </a>
</template>