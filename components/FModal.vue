<script setup lang='ts'>

interface Props {
  title?: string,
  description?: string,
  okTitle?: string,
  cancelTitle?: string,
  bodyWrapperClasses?: string,
}

withDefaults(defineProps<Props>(), {
  show: false,
  title: 'Default title',
  description: 'Modal description',
  okTitle: 'Criar',
  cancelTitle: 'Cancelar',
  bodyWrapperClasses: 'px-6'
});


const show = defineModel<boolean>();


</script>

<template>
  <Teleport to='body'>
    <Transition
      enter-active-class='duration-200 ease-out'
      enter-from-class='transform opacity-0 -translate-y-6'
      enter-to-class='opacity-100'
      leave-active-class='duration-200 ease-in'
      leave-from-class='opacity-100'
      leave-to-class='transform opacity-0 -translate-y-6'>
      <!-- Backdrop -->
      <div
        v-if='show'
        class='inset-0 absolute bg-black/50 z-50'
        @click.self='show = false'>
        <!-- Modal/dialog -->
        <div class='bg-gray-50 border border-gray-500 w-[800px] rounded-lg shadow-lg mx-auto my-8'>
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
          <div :class='bodyWrapperClasses'>
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
    </Transition>
  </Teleport>
</template>