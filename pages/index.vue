<script setup lang='ts'>


const page = ref(1);
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
  <div class='flex flex-col gap-6'>
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
    <div class='flex justify-end'>
      <f-pagination
        v-model='page'
        :pages='10' />
    </div>
    <f-modal
      v-model='showModal'
      title='Registrar motorista'
      description='Preenchar o formulário com os dados do motorista'
      ok-title='Registrar motorista'>
      <div class='flex flex-col gap-6'>
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
        <div class='flex flex-col gap-4'>
          <div class=''>
            <h3 class='text-xl text-gray-400 border-b-2 border-gray-400 mb-4 pb-2'>
              Carteira de Habilitação
            </h3>
          </div>
          <div class='flex gap-4 w-full'>
            <div class='flex flex-col gap-2 flex-grow'>
              <label>Registro</label>
              <f-input
                class='block w-full'
                placeholder='xxxxxxxxxxx' />
            </div>
            <div class='flex flex-col gap-2 flex-grow'>
              <label>Emissão</label>
              <f-input class='block w-full' />
            </div>
            <div class='flex flex-col gap-2 flex-grow'>
              <label>Validade</label>
              <f-input class='block w-full' />
            </div>
          </div>
          <div class='flex gap-4 w-full'>
            <div class='flex flex-col gap-2 flex-grow'>
              <label>Escolha as categorias</label>
              <f-select />
              <f-input class='block w-full' />
            </div>
          </div>
        </div>
      </div>
    </f-modal>
  </div>
</template>