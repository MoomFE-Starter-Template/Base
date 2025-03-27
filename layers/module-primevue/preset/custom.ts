import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { getColors } from 'theme-colors';

export default definePreset(Aura, {
  semantic: {
    primary: getColors('#165dff'),
  },
});
