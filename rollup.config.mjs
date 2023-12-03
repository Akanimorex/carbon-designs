import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { createRequire } from "node:module";

const requireFile = createRequire(import.meta.url);
const packageJson = requireFile("./package.json");

export default {
  input: "./components/index.js",
  // external: ["react", "react-dom"],
  output: [
    {
      file: packageJson.main,
      format: "cjs",
    },
    {
      file: packageJson.module,
      format: "esm"
    },
  ],
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
      babelHelpers: "runtime",
    }),
    ,
    resolve(),
    commonjs(),
    peerDepsExternal(),
  ],
};