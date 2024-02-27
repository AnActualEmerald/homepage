import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: "header.svelte-1lvscg8{padding-block:var(--size-7)}a.svelte-1lvscg8{color:inherit;text-decoration:none}@media(min-width: 758px){header.svelte-1lvscg8{display:flex;justify-content:space-between}.links.svelte-1lvscg8{display:flex}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="svelte-1lvscg8" data-svelte-h="svelte-14dx7cc"><a href="/" class="svelte-1lvscg8">Home</a> <ul class="links svelte-1lvscg8"><li><a href="/blog" class="svelte-1lvscg8">Blog</a></li></ul> </header>`;
});
const css = {
  code: ".layout.svelte-1stgkyz{height:100%;max-inline-size:1440px;display:grid;grid-template-rows:auto 1fr auto;margin-inline:auto;padding-inline:var(--size-7)}main.svelte-1stgkyz{padding-block:var(--size-9)}@media(min-width: 1440px){.layout.svelte-1stgkyz{padding-inline:0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="layout svelte-1stgkyz">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-1stgkyz">${slots.default ? slots.default({}) : ``}</main> </div>`;
});
export {
  Layout as default
};
