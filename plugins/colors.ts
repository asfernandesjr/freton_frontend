import { computed } from 'vue';
import { useNuxtApp, useHead } from '#app';
import type { UiColors } from '~/types/core';

// This is nowhere close to work.
// I need somehow to import tailwind color variables
// The idea here is to use like this:
// Import configured colors from tailwind
// all components used like this: 'text-[var(--ui-primary)]


export default defineNuxtPlugin(() => {
  // const appConfig = useAppConfig();
  const nuxtApp = useNuxtApp();

  const uiPrimaryColor = ref('emerald');

  const colorsStyles = computed(() => {

    return `@layer base {
    :root {
        --ui-primary: var(--color-${uiPrimaryColor}-500);
    }
    }`;
  });

  const headData: any = {
    style: [{
      innerHTML: () => colorsStyles.value,
      tagPriority: -2,
      id: 'ui-colors',
      type: 'text/css'
    }]
  };

  useHead(headData);
  nuxtApp.provide('setUiPrimaryColor', (color: UiColors) => {
    uiPrimaryColor.value = color;
  });

});