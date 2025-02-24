import { computed } from 'vue';
import { useAppConfig,useNuxtApp, useHead } from '#app';


export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig();
  const nuxtApp = useNuxtApp();

  const colorsStyles = computed(() => {


    return `@layer base {
    :root {
        --ui-primary: var(--color-emerald-500);
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

  //   if (import.meta.client && nuxtApp.isHydrating && !nuxtApp.payload.serverRendered) {
  //     const style = document.createElement('style');

  //     style.innerHTML = colorsStyles.value;
  //     style.setAttribute('data-nuxt-ui-colors', '');
  //     document.head.appendChild(style);

  //     headData.script = [{
  //       innerHTML: 'document.head.removeChild(document.querySelector(\'[data-nuxt-ui-colors]\'))'
  //     }];
  //   }

  useHead(headData);

});