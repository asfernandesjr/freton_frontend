<script setup lang='ts'>
const { toggleDarkMode, darkModeSettings } = useDarkMode();

definePageMeta({
  layout: false
});

</script>

<template>
  <div class='inset-0 p-4 absolute dark:bg-zinc-900 bg-zinc-100'>
    <div
      class='mx-auto my-32 px-4 py-6 relative align-middle sm:w-96
      border rounded shadow-lg
      dark:border-zinc-600 dark:bg-zinc-800
      border-zinc-400'>
      <div class='dark:text-zinc-400 text-zinc-500 float-right cursor-pointer'>
        <Icon
          :name='darkModeSettings.iconName'
          size='1.25rem'
          @click='toggleDarkMode' />
      </div>
      <h4 class='text-center text-2xl font-normal dark:text-zinc-200'>
        Login
      </h4>
      <div class='flex flex-col gap-4'>
        <div class='text-zinc-100 flex flex-col gap-2'>
          <f-label>Usuário</f-label>
          <f-input class='block w-full' />
        </div>
        <div class='text-zinc-100 flex flex-col gap-2'>
          <f-label>Senha</f-label>
          <f-input
            type='password'
            class='block w-full' />
        </div>
        <div class='flex justify-end gap-2 items-center'>
          <a
            class='text-sky-600 hover:text-sky-400'
            href='/register'>Registrar</a>
          <f-button>Entrar</f-button>
        </div>
      </div>
    </div>
  </div>
</template>