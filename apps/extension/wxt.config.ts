import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'FYP IQ',
    description: 'AI watches your FYP. Gets you a score.',
    permissions: ['storage', 'activeTab'],
    host_permissions: ['*://*.tiktok.com/*'],
  },
});
