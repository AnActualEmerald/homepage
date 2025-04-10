import autoprefixer from 'autoprefixer';
import customMedia from 'postcss-custom-media';
import postcssImport from 'postcss-import';
import postcssJitProps from 'postcss-jit-props';
import OpenProps from 'open-props';
import { cwd } from 'node:process';

export default {
  plugins : [
    postcssImport({
      from: cwd() + "/assets/css/main.css",
      path: [cwd() + "/assets/css", cwd() + "/node_modules"]
    }),
    postcssJitProps(OpenProps),
    autoprefixer,
    customMedia,
  ]
}
