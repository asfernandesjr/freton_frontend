<script setup lang='ts'>
interface Props {
  iconName?: null | undefined | string,
  contentClass?: null | undefined | string,
  iconClasses?: string,
  active?: boolean,
  variant?: 'primary' | 'danger',
}

const props = withDefaults(defineProps<Props>(), {
  iconName: null,
  iconClasses: '',
  contentClass: '',
  active: false,
  variant: 'primary',
});

const variantClasses: { [key: string]: string } = {
  primary: 'dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-700 dark:active:bg-blue-500 dark:active:text-zinc-50 ' + 
    'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-200 active:bg-zinc-300 active:text-zinc-90',
  danger: 'text-red-700 dark:hover:bg-zinc-700 dark:active:bg-red-300/25 hover:bg-zinc-300 dark:active:text-red-600 active:text-red-600 active:bg-red-300'
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
      :class='contentClass'
      class='flex p-2 gap-3 items-center'>
      <Icon
        v-if='iconName'
        :name='iconName'
        size='1.5rem'
        :class='iconClasses' />
      <span>
        <slot />
      </span>
    </component>
  </li>
</template>