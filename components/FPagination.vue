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
    ? ' text-slate-600 bg-slate-200 hover:!bg-slate-300 hover:text-slate-700'
    : ' hover:text-gray-700';

  return classes;
};

const computedPages = computed(() => {
  const items = [];

  if (props.pages <= 9) {
    for(let i = 1; i <= props.pages; i++) {
      items.push(i);
      console.log(props.modelValue, props.pages, items);
    }
  } else {
    if (props.modelValue <= 5) {
      for(let i = 1; i <= 5; i++) {
        items.push(i);
      }
      items.push('6', '...');
    }
    for(let i = props.pages - 1; i <= props.pages; i++) {
      items.push(String(i));
    }
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