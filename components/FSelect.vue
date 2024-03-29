<script setup lang='ts'>
import { Icon } from '#components';

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
    class='border rounded px-3 py-[0.375rem]
    border-gray-400 text-gray-600'>
    <div class='flex justify-between items-center'>
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
        <input class='flex-grow outline-none'>
      </div>
      <button class='self-stretch flex items-center px-3'>
        <Icon name='material-symbols:arrow-drop-down' />
      </button>
    </div>
  </div>
</template>