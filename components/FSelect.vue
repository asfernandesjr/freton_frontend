<script setup lang='ts'>
import { Icon } from '#components';

interface Props {
  items?: any[],
  value?: null | any | any[],
  multiple?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  items: () => ([]),
  value: null,
  multiple: false,
});

const selected = defineModel<Props['items']>();

const emit = defineEmits(['selected']);

const _showItems = ref(false);
const _hideTimeout = ref<null | ReturnType<typeof setTimeout>>(null);


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

function itemClick(item: Props['items']) {
  console.log('aa');
  const val = props.multiple ? [...props.value, item] : item;
  console.log(val);
  emit('selected', val);
}

function focusOutHandler() {
  console.log(document.activeElement);
}

function test () {
  console.log('test');
}

function test2() {
  console.log('test2');
}

const swapBind = ref(false);

</script>

<template>
  <div
    v-click-out='swapBind ? test : test2'
    class='relative border rounded
    border-gray-400 text-gray-600 duration-150 ease-in-out
    focus-within:ring-2 focus-within:ring-sky-300 focus-within:border-sky-500'>
    <input
      v-model='swapBind'
      type='checkbox'>
    <div class='flex justify-between items-center px-3 py-[0.375rem]'>
      <div class='flex flex-wrap w-full gap-1'>
        <SelectedBadge text='Teste' />
        <SelectedBadge text='Teste' />
        <SelectedBadge text='Teste' />
        <SelectedBadge text='Teste' />
        <SelectedBadge text='Teste' />
        <SelectedBadge text='Teste' />
        <SelectedBadge text='Teste' />
        <SelectedBadge text='Teste' />
        <SelectedBadge text='Teste' />
        <input
          class='flex-grow outline-none'>
      </div>
      <button class='self-stretch flex items-center px-3'>
        <Icon name='material-symbols:arrow-drop-down' />
      </button>
    </div>
    <div
      :class="_showItems ? 'block' : 'hidden'"
      class='absolute top-full mt-[0.125rem] w-full z-[100]'>
      <ul class='rounded bg-gray-50 drop-shadow-lg'>
        <li
          v-for='item in items'
          :key='item.value'
          class='px-4 py-1 duration-100 ease-in-out
          hover:bg-sky-100 hover:border hover:border-sky-500
          border-y border-y-transparent
          border-x border-x-gray-400
          first:rounded-t first:border-t-gray-400
          last:rounded-b last:border-b-gray-400'
          @click='itemClick(item)'>
          {{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>