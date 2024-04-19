---
title: 标题
tag: 
  - tag
category:
  - category
  - demo
article: false
sticky: false #置顶设置，支持数字
star: false #星标
cover: /assets/image/cover3.jpg
---
文章的摘要
<!-- more -->
文章内容

<!-- 导入文件（只导入的行数） -->
<!-- @include: tool/vpn.md -->
<!-- @include: tool/vpn.md{20-28} -->



<!-- 脚注使用 -->
脚注 1 跳转的脚注[^first]<br/>
脚注 2 跳转的脚注2[^second]。

[^first]: 定义的脚注1
[^second]: 定义的脚注1


<!-- 选项卡的使用 -->
::: tabs

@tab 标题 1

tab 1 内容

@tab 标题 2

tab 2 内容

@tab:active 标题 3

tab 3 将会被默认激活

tab 3 内容

:::


<!-- 提示文字 -->
> [!note]
> 注释文字

> [!important]
> 重要文字

> [!tip]
> 提示文字

> [!warning]
> 注意文字

> [!caution]
> 警告文字

<!-- 提示容器 -->
::: important
重要容器。
:::

::: info
信息容器。
:::

::: note
注释容器。
:::

::: tip
提示容器
:::

::: warning
警告容器
:::

::: caution
危险容器
:::

::: details
详情容器
:::


<!-- 标记 -->
VuePress Theme Hope ==非常== 强大!

<!-- 自定义对齐 -->
::: left
左对齐的内容
:::

::: center
居中的内容
:::

::: right
右对齐的内容
:::

::: justify
两端对齐的内容
:::

<!-- 图片引入 -->
<img src="/assets/image/article.jpg"/>

![img](/assets/image/article.jpg)

[img](/assets/image/article.jpg)