// SPDX-FileCopyrightText: 2022 aas-core3.0rc02-typescript AUTHORS
//
// SPDX-License-Identifier: MIT

import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

const extensions = [".js", ".ts"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundles/bundle.esm.js",
      format: "esm",
      sourcemap: true
    },
    {
      file: "dist/bundles/bundle.esm.min.js",
      format: "esm",
      plugins: [terser()],
      sourcemap: true
    }
  ],
  plugins: [
    resolve({ extensions }),
    babel({
      babelHelpers: "bundled",
      include: ["src/**/*.ts"],
      extensions,
      exclude: "./node_modules/**"
    })
  ]
}