import * as universal from '../entries/pages/_id_/_page.js';
import * as server from '../entries/pages/_id_/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[id]/+page.js";
export { server };
export const server_id = "src/routes/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/9.ClJ6Vr9_.js","_app/immutable/chunks/B6g3Bin6.js","_app/immutable/chunks/zPrH420j.js","_app/immutable/chunks/UbVWcMcJ.js","_app/immutable/chunks/CC72-6w7.js","_app/immutable/chunks/BMD4F-Ca.js","_app/immutable/chunks/DYYR5rGb.js","_app/immutable/chunks/BBG2m6xs.js","_app/immutable/chunks/CM2grR79.js","_app/immutable/chunks/Dos4q5xY.js","_app/immutable/chunks/BYz8CCko.js"];
export const stylesheets = ["_app/immutable/assets/9.MY-TKNRa.css","_app/immutable/assets/Card.qlzAGbde.css"];
export const fonts = [];
