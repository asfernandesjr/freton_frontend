<script setup lang='ts'>
interface Props {
  modelValue?: number,
  pages?: number,
}

const props = withDefaults(defineProps<Props>(), {
  pages: 0,
  modelValue: 0,
});

const emit = defineEmits(['update:modelValue']);

const defaultClasses = ref('flex items-center justify-center px-3 py-1 border duration-150 cursor-pointer text-zinc-300 \
 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-700');


const getPageClasses = (page: number | string) => {
  let classes = defaultClasses.value;

  page = typeof page === 'string' ? Number.parseInt(page) : page;
  
  classes += page === props.modelValue
    ? ' text-white !bg-zinc-600 border-zinc-600'
    : ' hover:text-zinc-200';

  return classes;
};

const computedPages = computed(() => {
  const items = [];

  if (props.pages <= 7) {
    for(let i = 1; i <= props.pages; i++) {
      items.push(i);
    }
  } else {
    if (props.modelValue <= 4) {
      for(let i = 1; i <= 5; i++) {
        items.push(String(i));
      }
      items.push('...', String(props.pages));
      return items;
    }
    items.push('1', '...');
    if (props.modelValue >= props.pages - 4) {
      for(let i = props.pages - 5; i <= props.pages; i++) {
        items.push(String(i));
      }
      return items;
    }
    items.push(props.modelValue - 1, props.modelValue, props.modelValue + 1);
    items.push('...', String(props.pages));
  }
  return items;
});

const previous = () => {
  if (props.modelValue > 1) {
    emit('update:modelValue', props.modelValue - 1);
  }
};

const next = () => {
  if (props.modelValue < props.pages) {
    emit('update:modelValue', props.modelValue + 1);
  }
};

const selectPage = (page: number | string) => {
  if (typeof page === 'string') {
    if (page === '...') {
      return;
    }
    page = Number.parseInt(page);
  }
  emit('update:modelValue', page);
};

</script>

<template>
  <ul class='inline-flex text-sm'>
    <li>
      <a
        :class='defaultClasses'
        @click='previous'>
        <span class=''>Anterior</span>
      </a>
    </li>
    <li
      v-for='page in computedPages'
      :key='page'>
      <a
        :class='getPageClasses(page)'
        @click='selectPage(page)'>
        {{ page }}
      </a>
    </li>
    <li>
      <a
        :class='defaultClasses'
        @click='next'>
        <span class=''>Próximo</span>
      </a>
    </li>
  </ul>
</template>