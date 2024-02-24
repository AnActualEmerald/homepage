import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${each(data.posts, (post) => {
    return `<a href="${"/blog/" + escape(post.slug, true)}" class="preview"><h1>${escape(post.title)}</h1> <h2>${escape(post.description ?? "")}</h2> </a>`;
  })}`;
});
export {
  Page as default
};
