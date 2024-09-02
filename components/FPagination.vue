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

const defaultClasses = ref('flex items-center justify-center px-3 py-1 border duration-150 cursor-pointer text-gray-500 \
 border-gray-300 bg-white hover:bg-gray-200');


const getPageClasses = (page: number | string) => {
  let classes = defaultClasses.value;

  page = typeof page === 'string' ? Number.parseInt(page) : page;
  
  classes += page === props.modelValue
    ? ' text-white !bg-blue-500 border-blue-400'
    : ' hover:text-gray-700';

  return classes;
};

const computedPages = computed(() => {
  const items = [];

  if (props.pages <= 7) {
    for(let i = 1; i <= props.pages; i++) {
      items.push(i);
      console.log(props.modelValue, props.pages, items);
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
  console.log(props.modelValue, props.pages, items);
  return items;
});

function previous() {
  if (props.modelValue > 1) {
    emit('update:modelValue', props.modelValue - 1);
  }
}

function next() {
  if (props.modelValue < props.pages) {
    emit('update:modelValue', props.modelValue + 1);
  }
}

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
        @click="emit('update:modelValue', modelValue)">
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