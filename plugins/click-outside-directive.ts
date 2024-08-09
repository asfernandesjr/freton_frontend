interface IHTMLElementClickOutside extends HTMLElement {
  clickOutsideHandler?(event: Event): void;
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-out', {
    mounted(el: IHTMLElementClickOutside, binding) {
      if (binding.value && typeof binding.value === 'function') {
        el.clickOutsideHandler = (event: Event) => {
          // if (!e || !("nodeType" in e))
          if (!el.contains(event.target as Node)) {
            binding.value();
          }
        };
        document.addEventListener('click', el.clickOutsideHandler);
      }
    },
    beforeUpdate(el, binding) {
      if (typeof el.clickOutsideHandler === 'function') {
        document.removeEventListener('click', el.clickOutsideHandler);
      }
      if (typeof binding.value === 'function') {
        el.clickOutsideHandler = (event: Event) => {
          if (!el.contains(event.target as Node)) {
            binding.value();
          }
        };
        document.addEventListener('click', el.clickOutsideHandler);
      }
    },
    unmounted(el) {
      if (typeof el.clickOutsideHandler === 'function') {
        document.removeEventListener('click', el.clickOutsideHandler);
      }
    }
  });
});