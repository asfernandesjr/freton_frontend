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


const computedPages = computed(() => {
  const items = [];
  
  if (props.modelValue > 3) {
    items.push(1);
    items.push('...');
    items.push(props.modelValue - 1);
  } else {
    items.push(1);
    items.push(2);
  }
  items.push(props.modelValue);
  if (props.modelValue < props.pages - 2) {
    items.push(props.modelValue + 1);
    items.push('...');
    items.push(props.pages);
  } else {
    items.push(props.pages - 1);
    items.push(props.pages);
  }

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
        class='flex items-center justify-center px-3 py-1 border duration-150 cursor-pointer
        text-gray-500 border-gray-300 bg-white hover:bg-gray-100'
        @click='previous'>
        <span class=''>Anterior</span>
      </a>
    </li>
    <li
      v-for='page in computedPages'
      :key='page'>
      <a
        class='flex items-center justify-center px-3 py-1 border duration-150 cursor-pointer
        text-gray-500 border-gray-300 bg-white hover:bg-gray-100 hover:text-gray-700'
        :class="page === modelValue
          ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
          : ''"
        @click="emit('update:modelValue', modelValue)">
        {{ page }}
      </a>
    </li>
    <li>
      <a
        class='flex items-center justify-center px-3 py-1 border duration-150 cursor-pointer
        text-gray-500 border-gray-300 bg-white hover:bg-gray-100'
        @click='next'>
        <span class=''>Próximo</span>
      </a>
    </li>
  </ul>
</template>