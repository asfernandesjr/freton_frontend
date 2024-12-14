<script setup lang='ts'>
import { useDark } from '@vueuse/core';

const isDark = useDark();

const iconSettings = computed(() => {
  const settingsObj = {
    name: isDark ? 'material-symbols:clear-day-rounded' : 'material-symbols-light:mode-night'
  };
  return settingsObj;
});

const toggleDark = () => {
  isDark.value = !isDark.value;
};

</script>

<template>
  <f-button
    class='!p-2'
    variant='secondary'
    @click='toggleDark()'>
    <Icon
      :name='iconSettings.name'
      size='1.5rem'
      class='shrink-0' />
  </f-button>
</template>