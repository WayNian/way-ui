/// <reference types="vitest" />

import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "modules",
    //打包文件目录
    outDir: "lib",
    //压缩
    minify: false,
    lib: {
      name: "way-ui",
      entry: resolve(__dirname, "src/index.ts"),
    },
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      input: ["src/index.ts"],
      output: [
        {
          format: "esm",
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: "lib",
          preserveModulesRoot: "src",
          globals: {
            vue: "Vue",
          },
        },
        // {
        //   format: "cjs",
        //   entryFileNames: "[name].js",
        //   //让打包目录和我们目录对应
        //   preserveModules: true,
        //   //配置打包根目录
        //   dir: "lib",
        //   preserveModulesRoot: "src",
        //   globals: {
        //     vue: "Vue",
        //   },
        // },
      ],
    },
  },
  plugins: [
    vue(),
    // dts({
    //   outputDir: "es",
    //   tsConfigFilePath: "../tsconfig.json",
    // }),
    dts({
      tsConfigFilePath: "./tsconfig.json",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
