<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang='ts'>
const breadcrumbItems = ref([
  {
    text: 'Empresa',
    href: '/'
  },
  {
    text: 'Motoristas',
    href: '/motoristas',
    active: true,
  }
]);
</script>

<template>
  <div
    class='flex flex-col min-h-lvh lg:flex-row'>
    <the-navbar />
    <div class='flex-1 mt-16 lg:mt-0 ml-0 lg:ml-16 p-4 flex flex-col items-center bg-zinc-200 dark:bg-zinc-700'>
      <div class='md:container !p-0 bg-zinc-50 dark:bg-zinc-800'>
        <f-breadcrumb :items='breadcrumbItems' />
      </div>
      <div class='md:container bg-zinc-50 dark:bg-zinc-800 border border-t-0 border-zinc-400 dark:border-zinc-500 rounded-b p-6'>
        <NuxtPage />
      </div>
    </div>
    
    <!-- <NuxtWelcome /> -->
  </div>
</template>