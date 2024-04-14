import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/frontend/": [
    {
      text:"SSH",
      link: "/frontend/ssh/",
      prefix: "/frontend/ssh/",
      collapsible: true,
      children:['ceshi.md','ceshi3.md']
    },
    {
      text:"ES6",
      link: "/frontend/es6/",
      prefix: "/frontend/es6/",
      collapsible: true,
      children:['ceshi2.md']
    }
  ],
  "/backend/": "structure",
});
