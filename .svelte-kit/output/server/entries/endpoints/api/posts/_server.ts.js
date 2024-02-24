import { _ as __vite_glob_0_0 } from "../../../../chunks/example.js";
import { j as json } from "../../../../chunks/index.js";
import { D as DEV } from "../../../../chunks/prod-ssr.js";
const dev = DEV;
async function getPosts() {
  let posts = [];
  const paths = /* @__PURE__ */ Object.assign({ "/src/posts/example.md": __vite_glob_0_0 });
  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");
    if (file && typeof file === "object" && "metadata" in file && slug) {
      const meta = file.metadata;
      const post = { ...meta, slug };
      (post.published || dev) && posts.push(post);
    }
  }
  return posts;
}
const GET = async () => {
  const posts = await getPosts();
  return json(posts);
};
export {
  GET
};
