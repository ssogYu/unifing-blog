---
title: JSON.parse实现
tag: 
  - 前端方案
  - 面试题
category:
  - 前端开发
article: true
sticky: false
---
## JSON.parse使用

**1. 基本语法**
```js
JSON.parse(text[, reviver])
```
- text：必需，要解析的 JSON 字符串。
- reviver：可选，一个转换函数，用来控制对解析结果的修改。

**2. 使用示例**
```js
  const jsonStr = '{"name": "John", "age": 30, "city": "New York"}';
  const obj = JSON.parse(jsonStr);
  {
    "name": "John",
    "age": 30,
    "city": "New York"
  }
```
```js
const jsonStr = '{"name": "John", "birthYear": 1990}';
function reviver(key, value) {
    if (key === 'birthYear') {
        return new Date().getFullYear() - value;
    }
    return value;
}
const obj = JSON.parse(jsonStr, reviver);
{
  "name":"John",
  "birthYear": 34
}
```
::: tip
- JSON 字符串必须符合严格的 JSON 语法规范，否则会抛出异常,所以使用JSON解析通常使用try...catch捕获
- JSON.parse() 不能解析包含函数和特殊对象（如正则表达式）的 JSON 字符串
- JSON.parse() 在处理日期类型时，会将其解析为字符串形式，而不是原生的 JavaScript 日期对象。这时需要自行进行处理，如通过 reviver 函数来转换为日期对象
:::

## JSON.parse手动实现