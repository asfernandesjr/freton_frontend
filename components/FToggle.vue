<template>
  <label class='flex items-center gap-2'>
    <input
      type='checkbox'
      class='sr-only'>
    <div class='flex items-center border border-zinc-400 h-5 w-8 rounded-2xl bg-zinc-500'>
      <div class='left-[1px] rounded-full w-4 h-4 bg-white' />
    </div>
    <slot />
  </label>
</template>