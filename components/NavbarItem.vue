<script setup lang='ts'>
interface Props {
  iconName?: string,
  iconClasses?: string,
  active?: boolean,
  variant?: 'primary' | 'danger',
}

const props = withDefaults(defineProps<Props>(), {
  iconName: 'material-symbols:insert-chart-sharp',
  iconClasses: '',
  active: false,
  variant: 'primary',
});

const variantClasses: { [key: string]: string } = {
  primary: 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 active:bg-blue-500 active:text-zinc-50',
  danger: 'text-red-500 hover:bg-zinc-700  active:text-zinc-100 active:bg-red-400'
};

const rootTagClass = computed(() => {
  const classes = variantClasses[props.variant];

  return classes;
});

const iconClasses = computed(() => {
  const defaultClasses = 'shrink-0';
  return props.iconClasses + ' ' + defaultClasses;
});

const componentTag = computed(() => {
  return 'nuxt-link'; // Alternativaly: 'a'; or 'to' in attrs ? 'nuxt-link' : 'span';
});
</script>

<template>
  <li
    :class='rootTagClass'
    class='list-item rounded-md duration-200 cursor-pointer'>
    <component
      :is='componentTag'
      class='flex p-2 gap-3 items-center'>
      <Icon
        :name='iconName'
        size='1.5rem'
        :class='iconClasses' />
      <span>
        <slot />
      </span>
    </component>
  </li>
</template>