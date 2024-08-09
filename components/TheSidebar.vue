<template>
  <div class='relative h-lvh top-0 left-0 w-[350px] bg-gray-800 flex flex-col justify-between px-4 py-6 shadow-lg'>
    <div class='flex flex-col gap-2'>
      <sidebar-item
        icon-name='material-symbols:chart-data-outline'
        href='/'>
        Fretes
      </sidebar-item>
      <sidebar-item
        icon-name='material-symbols:directions-bus'
        href='/veiculos'>
        Veiculos
      </sidebar-item>
      <sidebar-item
        icon-name='material-symbols:id-card-outline'
        active
        href='/motoristas'>
        Motoristas
      </sidebar-item>
    </div>
    <div class='flex flex-col gap-4'>
      <div class='flex flex-col gap-2'>
        <sidebar-item
          class='text-red-500 hover:text-red-500 hover:bg-red-300 bg-opacity-50 hover:bg-opacity-50'
          icon-classes='rotate-180'
          icon-name='material-symbols:logout'>
          Deslogar
        </sidebar-item>
        <sidebar-item
          icon-name='material-symbols:toggle-off'>
          Tema
        </sidebar-item>
      </div>
      <sidebar-item
        icon-name='material-symbols:collapse-all'
        icon-classes='rotate-90'>
        Esconder
      </sidebar-item>
    </div>
  </div>
</template>