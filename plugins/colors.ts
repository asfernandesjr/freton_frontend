import { computed } from 'vue';
import { useAppConfig,useNuxtApp, useHead } from '#app';
import type { UiColors } from '~/types/core';


export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig();
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