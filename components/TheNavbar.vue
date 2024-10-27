<script setup lang="ts">

const showSidebar = ref(true);

const logout = () => {
  console.log('logout');
};

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};

</script>

<template>
  <!-- the width is defined as the <navbar padding> + <item padding> + <icon width> -->
  <nav
    :class="[
      showSidebar ? 'lg:w-64' : 'lg:!w-16'
    ]"
    class='relative w-full lg:h-lvh overflow-hidden top-0 left-0 bg-zinc-800 flex flex-row lg:flex-col justify-between px-3 py-4 shadow-lg'>
    <div class='overflow-hidden'>
      <ul class='space-x-2 lg:space-x-0 lg:space-y-2'>
        <navbar-item
          icon-name='material-symbols:chart-data-outline'
          to='/'>
          Fretes
        </navbar-item>
        <navbar-item
          icon-name='material-symbols:directions-bus'
          to='/veiculos'>
          Veiculos
        </navbar-item>
        <navbar-item
          icon-name='material-symbols:id-card-outline'
          active
          to='/motoristas'>
          Motoristas
        </navbar-item>
      </ul>
    </div>
    <div class='flex lg:flex-col gap-4 overflow-hidden'>
      <ul class='space-x-2 lg:space-x-0 lg:space-y-2'>
        <navbar-item
          class='text-red-500 hover:text-red-500 hover:bg-red-300 bg-opacity-50 hover:bg-opacity-50'
          icon-classes='rotate-180'
          icon-name='material-symbols:logout'
          @click='logout()'>
          Deslogar
        </navbar-item>
        <navbar-item
          icon-name='material-symbols:toggle-off'>
          Tema
        </navbar-item>
      </ul>
      <ul>
        <navbar-item
          icon-name='material-symbols:collapse-all'
          icon-classes='rotate-90'
          @click='toggleSidebar()'>
          Esconder
        </navbar-item>
      </ul>
    </div>
  </nav>
</template>