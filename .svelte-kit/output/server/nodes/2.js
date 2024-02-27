

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.B-j-5VOs.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.CjXTJ6gS.js"];
export const stylesheets = [];
export const fonts = [];
