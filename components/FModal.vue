<script setup lang='ts'>

interface Props {
  title?: string,
  description?: string,
  okTitle?: string,
  cancelTitle?: string,
}

withDefaults(defineProps<Props>(), {
  show: false,
  title: 'Default title',
  description: 'Modal description',
  okTitle: 'Criar',
  cancelTitle: 'Cancelar',
});


const show = defineModel<boolean>();


</script>

<template>
  <Teleport to='body'>
    <!-- Backdrop -->
    <div
      v-if='show'
      class='inset-0 absolute bg-black/50 flex items-center justify-center'
      @click.self='show = false'>
      <!-- Modal/dialog -->
      <div class='bg-gray-50 border border-gray-500 w-[800px] rounded-lg shadow-lg'>
        <!-- Header -->
        <div class='p-6 flex justify-between items-start'>
          <div class='flex flex-col gap-2'>
            <h2 class='font-bold text-2xl text-gray-900'>
              {{ title }}
            </h2>
            <p class='text-gray-600'>
              {{ description }}
            </p>
          </div>
          <div class='text-gray-600'>
            <Icon
              name='material-symbols:close'
              @click='show = false' />
          </div>
        </div>
        <!-- Body -->
        <div class='p-6'>
          <slot />
        <!-- Footer -->
        </div>
        <div class='p-6 gap-4 flex justify-end items-center'>
          <f-button variant='secondary'>
            {{ cancelTitle }}
          </f-button>
          <f-button>{{ okTitle }}</f-button>
        </div>
      </div>
    </div>
  </Teleport>
</template>