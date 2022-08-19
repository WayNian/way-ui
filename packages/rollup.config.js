import vue from "rollup-plugin-vue";
import typescript2 from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/index.ts",
  output: {
    name: "packages",
    file: "lib/index.js",
    format: "esm",
    globals: {
      vue: "Vue",
    },
  },
  external: ["vue"], // 规定哪些是外部引用的模块
  plugins: [
    nodeResolve(),
    vue({
      css: false,
    }),
    typescript2({
      tsconfigOverride: {
        compilerOptions: { declaration: true }, // 生成.d.ts的文件
        exclude: ["tests/**/*.ts", "tests/**/*.tsx"],
      },
    }),
  ],
});
