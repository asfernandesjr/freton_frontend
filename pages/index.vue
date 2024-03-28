<script setup lang='ts'>


const showModal = ref(false);
const tableFields = ref([
  {
    key: 'name',
    label: 'Nome'
  },
  {
    key: 'birth',
    label: 'Data de nascimento'
  },
  {
    key: 'dl_categories',
    label: 'Categorias CNH'
  },
  {
    key: 'dl_validity_date',
    label: 'Validade da CNH'
  },
]);

const tableItems = ref([
  {
    name: 'Fonseca Silva',
    birth: '15/07/1992',
    dl_categories: 'A, B e C',
    dl_validity_date: '04/05/2030'
  },
  {
    name: 'Fonseca Silva',
    birth: '15/07/1992',
    dl_categories: 'A, B e C',
    dl_validity_date: '04/05/2030'
  },
  {
    name: 'Fonseca Silva',
    birth: '15/07/1992',
    dl_categories: 'A, B e C',
    dl_validity_date: '04/05/2030'
  },
  {
    name: 'Fonseca Silva',
    birth: '15/07/1992',
    dl_categories: 'A, B e C',
    dl_validity_date: '04/05/2030'
  }
]);

</script>

<template>
  <div>
    <div class='flex justify-between pb-6'>
      <h4 class='text-3xl font-semibold'>
        Lista de motoristas
      </h4>
      <f-button @click='showModal = true'>
        Adicionar motorista
      </f-button>
    </div>
    <f-table
      :items='tableItems'
      :fields='tableFields' />
    <f-modal v-model='showModal'>
      <div>YEAH YEAH!</div>
    </f-modal>
  </div>
</template>