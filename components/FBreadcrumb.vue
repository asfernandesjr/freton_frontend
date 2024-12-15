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
  <div class='border px-6 py-4 dark:bg-zinc-800 dark:border-zinc-600 rounded-t'>
    <div class='flex items-center gap-2'>
      <div
        v-for='(item, idx) in items'
        :key='item.text'
        :class='{
          "dark:text-zinc-300": item.active,
          "dark:text-zinc-400": !item.active,
        }'>
        {{ item.text }}
        <Icon
          v-if='idx !== items.length - 1'
          name='material-symbols:chevron-right'
          size='1.25rem'
          class='dark:text-zinc-600' />
      </div>
    </div>
  </div>
</template>