import { clientPlugin, defineConfig } from '@vitebook/client/node';
import { defaultThemePlugin } from '@vitebook/theme-default/node';

export default defineConfig({
  include: ['src/stories/*.story.svelte'],
  plugins: [
    clientPlugin({ appFile: 'App.svelte' }),
    defaultThemePlugin()
  ],
  site: {
    title: '',
    description: '',
    baseUrl: '/svelte-typewriter/',
    /** @type {(import('@vitebook/theme-default/node').DefaultThemeConfig} */
    theme: {},
  },
});
