import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BX6SGdsd.js","_app/immutable/chunks/zPrH420j.js","_app/immutable/chunks/UbVWcMcJ.js","_app/immutable/chunks/CC72-6w7.js","_app/immutable/chunks/DYYR5rGb.js","_app/immutable/chunks/BBG2m6xs.js","_app/immutable/chunks/KzU9yUKL.js","_app/immutable/chunks/B74v-H4M.js","_app/immutable/chunks/B9C4UwGy.js"];
export const stylesheets = ["_app/immutable/assets/0.CnxGGTxO.css","_app/immutable/assets/Card.BSI3qT0O.css"];
export const fonts = [];
