export default defineContentScript({
  matches: ['*://*.tiktok.com/*'],
  main() {
    console.log('[fyp-iq] content script loaded');
  },
});
