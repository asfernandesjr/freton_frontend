<script setup lang="ts">

const showSidebar = ref(false);

const logout = () => {
  console.log('logout');
};

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};

</script>
<!-- class='fixed transition-all duration-150 w-full lg:h-lvh overflow-hidden top-0 left-0 bg-zinc-800 border-b lg:border-r lg:border-b-0 border-zinc-700 flex flex-row lg:flex-col justify-between px-3 py-4 shadow-lg'> -->

<template>
  <!-- the width is defined as the <navbar padding> + <item padding> + <icon width> -->
  <aside
    :class="[
      showSidebar ? 'lg:w-64 !translate-x-0' : 'lg:!w-16'
    ]"
    class='z-50 fixed -translate-x-full lg:translate-x-0 transition-all duration-150 w-64 h-lvh top-0 left-0 bg-zinc-800 border-r border-zinc-700 flex flex-col justify-between px-3 py-4 shadow-lg'>
    <div class='overflow-hidden'>
      <ul class='space-y-2'>
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
    <div class='flex flex-col gap-4 overflow-hidden'>
      <ul class='space-y-2'>
        <navbar-item
          variant='danger'
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
    <Teleport to='body'>
      <div
        v-show='showSidebar'
        class='inset-0 absolute bg-black/50 z-40'
        @click='showSidebar = false' />
      <navbar class='fixed lg:hidden bg-zinc-800 border-b border-zinc-700 w-full px-2 py-1'>
        <f-button
          variant='secondary'
          class='!p-2 !rounde-lg !border-0'
          @click='toggleSidebar()'>
          <Icon
            class='text-zinc-400'
            name='material-symbols:menu'
            size='1.5rem' />
        </f-button>
      </navbar>
    </Teleport>
  </aside>
</template>