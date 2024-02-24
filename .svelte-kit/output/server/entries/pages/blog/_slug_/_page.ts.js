import { e as error } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const load = async ({ params }) => {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../posts/example.md": () => import("../../../../chunks/example.js").then((n) => n._) }), `../../../posts/${params.slug}.md`);
    return {
      content: post.default,
      meta: post.metadata
    };
  } catch (e) {
    console.error(`error loading post '${params.slug}':`, e);
    return error(404);
  }
};
export {
  load
};
