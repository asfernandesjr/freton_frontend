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
  <div class='flex flex-col gap-4'>
    <div class='flex justify-between items-center'>
      <f-button class=''>
        Procurar
      </f-button>
      <f-button class=''>
        Filtros
      </f-button>
    </div>
  
    <table class='table-auto border-separate border-spacing-0 text-left border dark:border-zinc-700 dark:text-zinc-300 rounded-lg'>
      <thead>
        <tr>
          <th
            v-for='field in fields'
            :key='field.key'
            class='first:rounded-tl-lg last:rounded-tr-lg p-3 dark:bg-zinc-700'>
            {{ field.label }}
          </th>
          <th
            style='width: 0.1%;'
            class='first:rounded-tl-lg last:rounded-tr-lg p-3 bg-zinc-700 cursor-pointer'>
            <Icon
              name='material-symbols:more-vert'
              size='1.5rem' />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for='item in items'
          :key='item.key'>
          <td
            v-for='field in fields'
            :key='field.key'
            class='border-t border-zinc-700 p-3'>
            {{ item[field.key] || emptyLabel }}
          </td>
          <td
            style='width: 0.1%;'
            class='border-t border-zinc-700 p-3 cursor-pointer'>
            <Icon
              name='material-symbols:more-vert'
              size='1.5rem' />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>