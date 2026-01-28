import { createClient } from 'microcms-js-sdk';

const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN ?? process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY ?? process.env.MICROCMS_API_KEY;

if (!serviceDomain) {
  console.error('[microCMS] serviceDomain is missing');
}
if (!apiKey) {
  console.error('[microCMS] apiKey is missing');
}

export const client = createClient({
  serviceDomain: serviceDomain ?? '',
  apiKey: apiKey ?? '',
});
