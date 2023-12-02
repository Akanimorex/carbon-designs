import pkg from "./package.json"
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";


import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

export default {
    input:'./index.js',
    output: [
        { file:pkg.main, format:"cjs" },
        { file:pkg.module, format:"esm" }
    ],
    plugins: [
        babel({
          babelHelpers: 'bundled',
          exclude: 'node_modules/**',
          presets: ['@babel/preset-env','@babel/preset-react']
        }),
        resolve(),
        commonjs(),
        terser()
      ],
    external: Object.keys(pkg.peerDependencies)
  };