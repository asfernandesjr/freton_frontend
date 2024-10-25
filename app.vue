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
  <div class='flex bg-zinc-900 font-sans'>
    <TheSidebar />
    <div class='block w-full m-4'>
      <div class='container p-0'>
        <f-breadcrumb :items='breadcrumbItems' />
      </div>
      <div class='container bg-zinc-800 border border-t-0 border-zinc-700 rounded-b p-6'>
        <NuxtPage />
      </div>
    </div>
    
    <!-- <NuxtWelcome /> -->
  </div>
</template>
