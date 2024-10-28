<script setup lang='ts'>

interface Props {
  title?: string,
  description?: string,
  okTitle?: string,
  loading?: boolean,
  cancelTitle?: string,
  bodyWrapperClasses?: string,
}

withDefaults(defineProps<Props>(), {
  show: false,
  title: 'Default title',
  description: 'Modal description',
  okTitle: 'Criar',
  loading: false,
  cancelTitle: 'Cancelar',
  bodyWrapperClasses: 'px-6'
});


const show = defineModel<boolean>();

const emit = defineEmits(['ok', 'cancel']);

const ok = () => {
  emit('ok');
};

const cancel = () => {
  emit('cancel');
};
</script>

<template>
  <Teleport to='body'>
    <Transition
      enter-active-class='duration-200 ease-out'
      enter-from-class='transform opacity-0 -tranzinc-y-6'
      enter-to-class='opacity-100'
      leave-active-class='duration-200 ease-in'
      leave-from-class='opacity-100'
      leave-to-class='transform opacity-0 -tranzinc-y-6'>
      <!-- Backdrop -->
      <div
        v-if='show'
        class='inset-0 absolute bg-black/50 z-30'
        @click.self='show = false'>
        <!-- Modal/dialog -->
        <div class='relative overflow-hidden bg-zinc-50 dark:bg-zinc-800 border dark:border-zinc-700 border-zinc-500 w-[800px] rounded-lg shadow mx-auto my-8'>
          <div
            v-if='loading'
            class='absolute bg-black/50 h-full w-full'>
            <Icon
              name='material-symbols:close'
              @click='show = false' />
          </div>
          <!-- Header -->
          <div class='p-6 flex justify-between items-start'>
            <div class='flex flex-col gap-2'>
              <h2 class='font-bold text-2xl text-zinc-100'>
                {{ title }}
              </h2>
              <p class='text-zinc-300'>
                {{ description }}
              </p>
            </div>
            <div class='text-zinc-300'>
              <Icon
                name='material-symbols:close'
                @click='show = false' />
            </div>
          </div>
          <!-- Body -->
          <div :class='bodyWrapperClasses'>
            <slot />
          </div>
          <!-- Footer -->
          <div class='p-6 gap-4 flex justify-end items-center'>
            <f-button
              variant='secondary'
              @click='cancel()'>
              {{ cancelTitle }}
            </f-button>
            <f-button @click='ok()'>
              {{ okTitle }}
            </f-button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>