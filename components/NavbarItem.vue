<script setup lang='ts'>
interface Props {
  iconName?: string,
  iconClasses?: string,
  active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  iconName: 'material-symbols:insert-chart-sharp',
  iconClasses: '',
  active: false,
});


const iconClasses = computed(() => {
  const defaultClasses = 'shrink-0';
  return props.iconClasses + ' ' + defaultClasses;
});

const componentTag = computed(() => {
  return 'nuxt-link'; // Alternativaly: 'a'; or 'nuxt-link' : 'span';
});
</script>

<template>
  <li class='inline-block lg:list-item'>
    <component
      :is='componentTag'
      :class='[active
                 ? "bg-blue-500 text-zinc-50" 
                 : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700",
               $attrs.class]'
      class='flex p-2 gap-3 items-center rounded-md duration-200 cursor-pointer'>
      <Icon
        :name='iconName'
        size='1.5rem'
        :class='iconClasses' />
      <span class='hidden lg:inline'>
        <slot />
      </span>
    </component>
  </li>
</template>