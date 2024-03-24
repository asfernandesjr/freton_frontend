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
  <div class='flex bg-gray-300'>
    <TheSidebar />
    <div class='block w-full m-4'>
      <div class='container p-0'>
        <f-breadcrumb :items='breadcrumbItems' />
      </div>
      <div class='container bg-gray-50 border border-t-0 border-gray-600 rounded-b p-6 shadow'>
        <NuxtPage />
      </div>
    </div>
    
    <!-- <NuxtWelcome /> -->
  </div>
</template>
