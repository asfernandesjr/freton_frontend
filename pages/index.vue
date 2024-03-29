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
    <f-modal
      v-model='showModal'
      title='Cadastrar motorista'
      description='Preenchar o formulário com os dados do motorista'
      ok-title='Registrar motorista'>
      <div class='flex flex-col gap-4'>
        <div class=''>
          <h3 class='text-xl text-gray-400 border-b-2 border-gray-400 mb-4 pb-2'>
            Informações pessoais
          </h3>
          <div class='flex flex-col gap-2'>
            <label>Nome</label>
            <f-input class='block w-full' />
          </div>
        </div>
        <div class='flex gap-4 w-full'>
          <div class='flex flex-col gap-2 flex-grow'>
            <label>Sexo</label>
            <f-input class='block w-full' />
          </div>
          <div class='flex flex-col gap-2 flex-grow'>
            <label>Data de nascimento</label>
            <f-input class='block w-full' />
          </div>
        </div>
      </div>
    </f-modal>
  </div>
</template>