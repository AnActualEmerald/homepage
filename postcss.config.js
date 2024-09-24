import autoprefixer from 'autoprefixer';
import customMedia from 'postcss-custom-media';
import postcssImport from 'postcss-import';
import { cwd } from 'node:process';

export default {
  plugins : [
    postcssImport({
      from: cwd() + "/assets/css/main.css",
      path: [cwd() + "/node_modules"]
    }),
    autoprefixer,
    customMedia,
  ]
}
