import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "ssogYu'blog",
  description: "技术分享",
  dest: "build",
  theme,
});
