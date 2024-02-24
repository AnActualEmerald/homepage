import { c as create_ssr_component } from "./ssr.js";
const metadata = { "title": "Example", "draft": false };
const Example = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-3pirmy">Hello world</h1>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Example,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};
