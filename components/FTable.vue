<script setup lang='ts'>

interface Props {
  fields?: {
    label: string,
    key: string,
  }[],
  items?: any[],
  emptyLabel?: string,
}

withDefaults(defineProps<Props>(), {
  fields: () => ([]),
  items: () => ([]),
  emptyLabel: 'Vazio'
});

</script>

<template>
  <div class='relative overflow-auto'>
    <table
      class='w-full text-left border rounded
        text-zinc-500 border-zinc-400
        dark:border-zinc-600 dark:text-zinc-400'>
      <thead class='text-xs uppercase border-b border-zinc-400 bg-zinc-50 dark:bg-zinc-700 dark:border-zinc-600'>
        <tr>
          <th
            v-for='field in fields'
            :key='field.key'
            class='py-3 px-6'>
            {{ field.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for='item in items'
          :key='item.key'
          class='font-medium duration-150
            bg-zinc-50 border-b border-zinc-400 hover:bg-zinc-300
            dark:bg-zinc-800 dark:border-zinc-600 dark:hover:bg-zinc-700'>
          <td
            v-for='field in fields'
            :key='field.key'
            class='py-4 px-6 whitespace-nowrap'>
            {{ item[field.key] || emptyLabel }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>