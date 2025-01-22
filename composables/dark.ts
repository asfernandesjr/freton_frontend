import { useDark } from '@vueuse/core';


export const useDarkMode = () => {
  const isDark = useDark();
    
  const darkModeSettings = computed(() => {
    return {
      iconName: isDark ? 'material-symbols:clear-day-rounded' : 'material-symbols-light:mode-night'
    };
  });

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
  };


  return {
    isDark,
    darkModeSettings,
    toggleDarkMode,
  };
};