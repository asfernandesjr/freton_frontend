<script setup lang='ts'>
interface Props {
  items?: {
    text: string,
    href: string,
    active?: boolean
  }[],
}

withDefaults(defineProps<Props>(), {
  items: () => ([]),
});

</script>

<template>
  <div class='px-6 py-4 bg-gray-100 border border-gray-400 rounded-t'>
    <div class='flex items-center gap-2'>
      <div
        v-for='(item, idx) in items'
        :key='item.text'
        :class='{
          "text-gray-800": item.active,
          "text-gray-600": !item.active,
        }'>
        {{ item.text }}
        <Icon
          v-if='idx !== items.length - 1'
          name='material-symbols:chevron-right'
          size='1.25rem'
          class='text-gray-600' />
      </div>
    </div>
  </div>
</template>