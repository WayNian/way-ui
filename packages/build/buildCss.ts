import cpy from "cpy";
import { resolve } from "path";
import glob from "fast-glob";
import { compile } from "sass";
import { promises as fs } from "fs";

const sourceDir = resolve(__dirname, "../src");
const targetLib = resolve(__dirname, "../lib");
const targeEs = resolve(__dirname, "../es");

//src目录

const srcDir = resolve(__dirname, "../src");

const buildCss = async () => {
  await cpy(`${sourceDir}/**/*.scss`, targetLib);
  await cpy(`${sourceDir}/**/*.scss`, targeEs);
  const cssPaths = await glob("**/*.scss", { cwd: srcDir, onlyFiles: true });

  cssPaths.forEach(async (ele) => {
    const path = resolve(`src/${ele}`);
    const result = compile(path).css;

    const cssPath = ele.replace(".scss", ".css");

    await fs.writeFile(resolve(targetLib, cssPath), result);
    await fs.writeFile(resolve(targeEs, cssPath), result);
  });
};

buildCss();
