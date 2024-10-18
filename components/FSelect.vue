<script setup lang='ts'>
import { Icon } from '#components';

interface Props {
  items?: any[],
  multiple?: boolean,
  labelKey?: string,
  valueKey?: string,
}

const props = withDefaults(defineProps<Props>(), {
  items: () => ([]),
  multiple: false,
  labelKey: 'text',
  valueKey: 'value'
});

const modelValue = defineModel<any | any[]>({
  get(val) {
    if (isProxy(val)) {
      return toRaw(val);
    }
    return val;
  }
});

// const emit = defineEmits(['selected']);

const _showItems = ref(false);
// const _hideTimeout = ref<null | ReturnType<typeof setTimeout>>(null);

function itemClick(item: any) {
  console.log(item);
  if (Array.isArray(modelValue.value) && item && !modelValue.value.includes(item[props.valueKey])) {
    console.log(modelValue.value);
    const val = props.multiple ? [...modelValue.value, item] : item;
    console.log('aa');
    console.log(val);
    modelValue.value = val;
    console.log(modelValue.value);
  }
  console.log(modelValue.value);
  // emit('update:modelValue', val);
}

const _items = computed(() => {
  if (isProxy(props.items)) {
    return toRaw(props.items);
  }
  return props.items;
});

function clickOutHandler() {
  _showItems.value = false;
}

const SelectedBadgeCloseIcon = () => h(
  Icon,
  { name: 'material-symbols:close-small' }
);

const SelectedBadge = ({ text }: { text: string }) => h(
  h(
    'span',
    {
      class: 'flex items-center gap-1 bg-blue-500 text-sm px-2 text-gray-100 rounded'
    },
    [
      text, // Should be a property or slot
      h(
        'button',
        { class: 'self-stretch flex items-center' },
        [
          SelectedBadgeCloseIcon()
        ]
      )
    ]
  ),
);

</script>

<template>
  <div
    v-click-out='clickOutHandler'
    class='relative border rounded
    border-gray-400 text-gray-600 duration-150 ease-in-out
    focus-within:ring-2 focus-within:ring-sky-300 focus-within:border-sky-500'>
    <div class='flex justify-between items-center px-3 py-[0.375rem]'>
      <div class='flex flex-wrap w-full gap-1'>
        <template
          v-if='props.multiple && Array.isArray(modelValue)'>
          <selected-badge
            v-for='selectedItem in modelValue'
            :key='selectedItem[props.valueKey]'
            :text='selectedItem[props.labelKey]' />
        </template>
        <selected-badge
          v-else-if='modelValue && !Array.isArray(modelValue)'
          :text='modelValue[props.labelKey]' />
        <input
          class='flex-grow outline-none'
          @focusin='_showItems = true'>
      </div>
      <button
        class='self-stretch flex items-center px-3'>
        <Icon name='material-symbols:arrow-drop-down' />
      </button>
    </div>
    <div
      :class="_showItems ? 'block' : 'hidden'"
      class='absolute top-full mt-[0.125rem] w-full z-[100]'>
      <ul class='rounded bg-gray-50 drop-shadow-lg'>
        <li
          v-for='item in _items'
          :key='item[props.valueKey]'
          class='px-4 py-1 duration-100 ease-in-out
          hover:bg-sky-100 hover:border hover:border-sky-500
          border-y border-y-transparent
          border-x border-x-gray-400
          first:rounded-t first:border-t-gray-400
          last:rounded-b last:border-b-gray-400'
          @click='itemClick(item)'>
          {{ item[props.labelKey] }}
        </li>
      </ul>
    </div>
  </div>
</template>