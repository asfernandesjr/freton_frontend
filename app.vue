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
  <div class='flex flex-col min-h-lvh lg:flex-row bg-zinc-900 font-sans'>
    <the-navbar />
    <div class='flex-1 mt-16 lg:mt-0 ml-0 lg:ml-16 p-4'>
      <div class='md:container !p-0'>
        <f-breadcrumb :items='breadcrumbItems' />
      </div>
      <div class='md:container bg-zinc-800 border border-t-0 border-zinc-700 rounded-b p-6'>
        <NuxtPage />
      </div>
    </div>
    
    <!-- <NuxtWelcome /> -->
  </div>
</template>

1.5 + 1 + 1.5
1.5 + 1.5
24 + 16 + 24