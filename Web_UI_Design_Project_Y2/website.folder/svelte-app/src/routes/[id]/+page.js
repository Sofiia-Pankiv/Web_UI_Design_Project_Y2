
// @ts-ignore
import { catalogue } from '$lib/catalogue.js';
import { base } from '$app/paths';

/**
 * SvelteKit page load function.
 * @param {Object} context - Contains route params and other info
 * @returns {{ item: any }} - Returns the matched item to be passed to the page
 */
// @ts-ignore
export function load({ params }) {
  // @ts-ignore
  const item = catalogue.find((i) => i.id === params.id);



  if (!item) {
    // You could use `error(404, 'Item not found')` here if preferred
    throw new Error('Item not found');
  }

  return { item };
  
}
  