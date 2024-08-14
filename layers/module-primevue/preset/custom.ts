import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
import { getColors } from 'theme-colors';

export default definePreset(Aura, {
  semantic: {
    primary: getColors('#165dff'),
  },
});
