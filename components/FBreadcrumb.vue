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
  <div class='border px-6 py-4 border-zinc-400 dark:border-zinc-500 rounded-t'>
    <div class='flex items-center gap-1'>
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
          size='1rem'
          class='dark:text-zinc-500' />
      </div>
    </div>
  </div>
</template>