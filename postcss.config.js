import autoprefixer from 'autoprefixer';
import customMedia from 'postcss-custom-media';
import postcssImport from 'postcss-import';
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';
import { cwd } from 'node:process';

export default {
  plugins: [
    postcssImport({
      from: cwd() + "/assets/css/main.css",
      path: [cwd() + "/assets/css", cwd() + "/node_modules"]
    }),
    autoprefixer(),
    customMedia(),

    ...(
      process.env.HUGO_ENVIRONMENT === "production" ? [
        purgeCSSPlugin({
          content: ["./hugo_stats.json"],
          defaultExtractor: (content) => {
            const els = JSON.parse(content).htmlElements;
            return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
          }
        })] : []
    )
  ]
}
