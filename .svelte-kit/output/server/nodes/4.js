import * as universal from '../entries/pages/blog/_slug_/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/4.DNnq7M3V.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.CjXTJ6gS.js"];
export const stylesheets = [];
export const fonts = [];
