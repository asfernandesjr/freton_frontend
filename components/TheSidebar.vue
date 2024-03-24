<template>
  <div class='relative h-lvh top-0 left-0 w-[250px] bg-gray-800 flex flex-col justify-between px-4 py-6 shadow-xl'>
    <div class='flex flex-col gap-2'>
      <sidebar-item
        label='Fretes'
        icon-name='material-symbols:chart-data-outline' />
      <sidebar-item
        label='Veiculos'
        icon-name='material-symbols:directions-bus' />
      <sidebar-item
        label='Motoristas'
        icon-name='material-symbols:id-card-outline' />
    </div>
    <div class='flex flex-col gap-4'>
      <div class='flex flex-col gap-2'>
        <sidebar-item
          label='Deslogar'
          class='text-red-500 hover:text-red-500 hover:bg-red-300 bg-opacity-50 hover:bg-opacity-50'
          icon-classes='rotate-180'
          icon-name='material-symbols:logout' />
        <sidebar-item
          label='Tema'
          icon-name='material-symbols:toggle-off' />
      </div>
      <sidebar-item
        label='Esconder'
        icon-name='material-symbols:collapse-all'
        icon-classes='rotate-90' />
    </div>
  </div>
</template>