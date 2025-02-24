<script setup lang='ts'>
import Inputmask from 'inputmask';

const loading = ref(false);
const page = ref(3);
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

const dlCategories = ref([
  { text: 'A', value: 1 },
  { text: 'B', value: 2 },
  { text: 'C', value: 3 },
  { text: 'D', value: 4 },
  { text: 'D', value: 4 },
  { text: 'D', value: 4 },
  { text: 'D', value: 4 },
]);

const categories = ref([]);

const setupMasks = () => {
  const birthDateInput = document.getElementById('birth-date-input');
  if (birthDateInput && !birthDateInput.inputmask) {
    Inputmask(
      '99/99/9999',
      {
        inputFormat: 'dd/mm/yyyy',
        placeholder: 'dd/mm/yyyy',
        tabThrough: true,
        groupSeparator: '/'
      },
    ).mask(birthDateInput);
  }
};

onUpdated(() => {
  setupMasks();
});

onMounted(() => {
  setupMasks();
});
</script>

<template>
  <div class='flex flex-col gap-4'>
    <div class='flex flex-col mx-auto max-w-[768px] gap-6 text-center dark:bg-blue-600 bg-blue-700 rounded-2xl py-12 px-32'>
      <h2 class='text-3xl font-bold text-zinc-900 dark:text-zinc-900 bg-(--ui-primary)'>
        Celta 2014 - Gasolina
      </h2>
      <p class='text-zinc-200 dark:text-zinc-700'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, exercitationem commodi illo, consectetur tempore
        cum similique quas laborum officia eaque repellendus fugit deserunt nulla laboriosam quidem voluptatibus culpa numquam molestias.
      </p>
      <div class='flex justify-center gap-4'>
        <f-button variant='success'>
          Relatório
        </f-button>
        <f-button variant='secondary'>
          Detalhes
        </f-button>
      </div>
    </div>

    <div class='flex justify-between flex-wrap md:flex-nowrap gap-2 md:gap-0'>
      <h4 class='text-2xl font-semibold dark:text-zinc-200'>
        Lista de motoristas
      </h4>
      <f-button
        class='w-full md:w-auto block md:inline-block'
        @click='showModal = true'>
        Adicionar motorista
      </f-button>
    </div>
    <f-table
      :items='tableItems'
      :fields='tableFields' />
    <div class='flex justify-end'>
      <f-pagination
        v-model='page'
        :pages='15' />
    </div>
    <f-modal
      v-model='showModal'
      description='Preencha o formulário com os dados do veículo'
      content-class='overflow-visible'
      ok-title='Registrar veículo'
      :loading='loading'
      title='Registrar veículo'
      @ok='loading = !loading'>
      <div class='flex flex-col gap-4'>
        <div class='flex flex-col gap-4'>
          <f-section-line>
            Informações pessoais
          </f-section-line>
          <div class='flex flex-col'>
            <div class='text-zinc-100 flex flex-col gap-1'>
              <f-label>Nome</f-label>
              <f-input class='block w-full' />
            </div>
          </div>
          <div class='flex gap-4 w-full'>
            <div class='text-zinc-100 flex flex-col gap-1 flex-grow'>
              <f-label>Sexo</f-label>
              <f-input class='block w-full' />
            </div>
            <div class='text-zinc-100 flex flex-col gap-1 flex-grow'>
              <f-label>Data de nascimento</f-label>
              <f-input
                id='birth-date-input'
                class='block w-full' />
            </div>
          </div>
        </div>
        <div class='flex flex-col gap-6'>
          <f-section-line>
            Carteira de Habilitação
          </f-section-line>
          <div class='flex gap-4 w-full'>
            <div class='text-zinc-100 flex flex-col gap-1 flex-grow'>
              <f-label>Registro</f-label>
              <f-input
                class='block w-full'
                placeholder='xxxxxxxxxxx' />
            </div>
            <div class='text-zinc-100 flex flex-col gap-1 flex-grow'>
              <f-label>Emissão</f-label>
              <f-input class='block w-full' />
            </div>
            <div class='text-zinc-100 flex flex-col gap-1 flex-grow'>
              <f-label>Validade</f-label>
              <f-input class='block w-full' />
            </div>
          </div>
          <div class='flex gap-4 w-full'>
            <div class='text-zinc-100 flex flex-col gap-1 flex-grow'>
              <f-label>Escolha as categorias</f-label>
              <f-select
                v-model='categories'
                :items='dlCategories' />
            </div>
          </div>
        </div>
      </div>
    </f-modal>
  </div>
</template>