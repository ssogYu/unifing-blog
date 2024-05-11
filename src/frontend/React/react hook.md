---
title: React Hook
article: true
---
react hook 使用和介绍
<!-- more -->
## **什么是hook**
Hooks 是 React 16.8 版本出现的特性，它是诸如 useState、useEffect 等一系列钩子函数。Hooks 的出现开发者在不需要写 class 组件时，也能具有 state 和其他 React 特性，函数组件从 stateless 变成 stateful。
- 告别复杂的 class 组件
class 组件中的方法，需要使用 bind 或者箭头函数让 this 指向组件，才能实现对 this 的访问。

- 实现更好的逻辑拆分
在 class 组件中，可能会把很多不相关的初始化逻辑都放在 componentDidMount，或者把相关的订阅和取消订阅逻辑分别散落在 componentDidMount 和 componentWillUnmount。useEffect 则很好的实现逻辑的拆分，将相关的逻辑放在同个 useEffect，将不相关的逻辑放在不同的 useEffect。

- 实现状态复用
使用自定义 Hooks，可以很好的实现状态逻辑的复用。

- 函数组件从设计思想上来看，更加契合 React 的理念
如果用公式来描述 React，可以表达为 UI = render(state)。函数组件非常契合这种数据驱动思想，函数组件能更方便的访问数据和控制数据的更改。

> [!important] 
> hook的使用原则：
> - 只在 React 函数中调用 Hook；
> - 不要在循环、条件或嵌套函数中调用 Hook。

## **Hook使用**

::: details useState
```js
//const [xxx, setXxx] = useState(initValue)
//const [xxx, setXxx] = useState(() => initValue)
//setXxx(xxx) setXxx(value => newValue)
const [count, setCount] = useState<number>();
setCount(1);
setCount((count) => count + 1);
```
:::

::: details useEffect & useLayoutEffect
### 1. useEffect
- useEffect & useLayoutEffect 用来处理一些副作用 比如网络请求、订阅、定时器、dom操作
- useEffect会在每次 DOM 渲染后执行，不会阻塞页面渲染。它同时具备componentDidMount、componentDidUpdate和componentWillUnmount三个生命周期函数的执行时机
```js
useEffect(
  () => {
    // 如果第二个参数为空数组 这里的代码块 等价于 componentDidMount，初次渲染时，会执行一次useEffect
    // do something...

    // return的写法 等价于 componentWillUnmount ，返回一个函数，每次依赖更新会先执行这个函数，再去副作用。
    return () => {
       // do something...
    };
  },
  // 依赖列表，当依赖的值有变更时候，执行副作用函数，等价于 componentDidUpdate，如果不传第二个参数，useEffect 会在初次渲染和每次更新时，都会执行。
  [ xxx，obj.xxx ]
);
```
> [!tip]
> 组件挂载 --> 执行副作用 --> 组件更新 --> 执行清理函数 --> 执行副作用 --> 组件更新 --> 执行清理函数 --> 组件卸载

### 2. useLayoutEffect
useLayoutEffect的用法跟useEffect的用法是完全一样的，都可以执行副作用和清理操作。它们之间唯一的区别就是执行的时机。
- useEffect会在渲染的内容更新到DOM上后执行，不会阻塞DOM的更新；
- useLayoutEffect会在渲染的内容更新到DOM上之前执行，会阻塞DOM的更新，即useEffect不会阻塞浏览器的绘制任务，它在浏览器渲染完成，页面更新后才会执行。

> [!tip] 
> 使用场景：useLayoutEffect通常用于处理需要同步更新DOM布局或样式的场景，如动画、测量元素尺寸等

:::

::: details useContext
Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props
1. 使用createContext建立一个context
2. 传递数据组件里使用Provide包裹着子组件，并且在用value属性来传递数据
3. 接受数据的组件导入定义的context使用Consumer来接收,可接收到的是一个函数。（消费组件)

组件A
```js 
import React from "react";
import B from "./B";
​
export const nameContext = React.createContext("");
export default function App() {
  return (
    <nameContext.Provider value={"ys"}>
      大家好，
      <B />
    </nameContext.Provider>
  );
}
```
组件B
```js
import C from "./C";
export default function B() {
  return (
    <>
      我是今天的分享者，
      <C />
    </>
  );
}
```
组件C（消费组件）
```js
import React from "react";
import { nameContext } from "./App";
​
export default function C() {
  const name = useContext(nameContext) //使用useContext方式获取
  return (
    <nameContext.Consumer>
      {(name) => <span>我叫{name}</span>}
    </nameContext.Consumer>
  );
}

```
:::

::: details useReducer
useReducer作为useState的一种替代方案： 在某些场景下，如果state的处理逻辑比较复杂，我们可以通过useReducer来对其进行拆分，当 state 的计算逻辑比较复杂又或者需要根据以前的值来计算时，使用这个 Hook 比useState会更好

案例
```js
import { useReducer } from "react";
const initialState = [
  { id: 1, name: "张三" },
  { id: 2, name: "李四" },
];

const reducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case "add":
      return [...state, payload];
    case "remove":
      return state.filter((item: any) => item.id !== payload.id);
    case "update":
      return state.map((item: any) =>
        item.id === payload.id ? { ...item, ...payload } : item
      );
    case "clear":
      return [];
    default:
      throw new Error();
  }
};

const List = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      List: {JSON.stringify(state)}
      <button
        onClick={() =>
          dispatch({ type: "add", payload: { id: 3, name: "周五" } })
        }
      >
        add
      </button>
      <button onClick={() => dispatch({ type: "remove", payload: { id: 1 } })}>
        remove
      </button>
      <button
        onClick={() =>
          dispatch({ type: "update", payload: { id: 2, name: "李四-update" } })
        }
      >
        update
      </button>
      <button onClick={() => dispatch({ type: "clear" })}>clear</button>
    </>
  );
};
export default List;

```
:::

::: details useCallback & useMemo & React.memo
### 1. useCallback
原理：useCallback会返回一个函数的 memoized（记忆的）值，在依赖不变的情况下，它会返回相同的引用，避免子组件进行无意义的重复渲染。
使用场景：用于性能优化，在将一个组件中的函数, 传递给子元素进行回调使用时, 使用useCallback对函数进行处理.同一组件中使用不会有性能优化作用。
```js
// 除非 `a` 或 `b` 改变，否则不会变
const memoizedCallback = useCallback(
  () => {
   xxxx
  },
  [a, b],
);

```
### 2. useMemo
原理：useMemo返回的也是一个 memoized（记忆的）值，在依赖不变的情况下，多次定义的时候，返回的值是相同的。
场景：useMemo复杂计算的应用，用于性能优化。
```js
// 除非 `a` 或 `b` 改变，否则memoData不会变,memoData的值就是value
const memoData = useMemo(()=>{return value},[a,b])
```
```js
useCallback(fn, deps) <==> useMemo(() => fn, deps)。
```
### 3. React.memo

:::

::: details useRef & useImperativeHandle
### 1. useRef
useRef类似于React.createRef,但是并不完全一样，useRef 返回的 ref 对象在组件的整个生命周期内保持不变，也就是说每次重新渲染函数组件时，返回的ref 对象都是同一个（使用 React.createRef ，每次重新渲染组件都会重新创建 ref）
- useRef 获取dom
```js
在类组件中：
class App extends React.Component {
  refInput = React.createRef();
  componentDidMount() {
    this.refInput.current && this.refInput.current.focus();
  }
  render() {
    return <input ref={this.refInput} />;
  }
}
在函数组件中使用：
  访问dom：
    const Index = () => {
      const inputEl = useRef(null);
      const handleFocus = () => {
        inputEl.current.focus();
      };
      return (
        <>
          <input ref={inputEl} type="text" />
          <button onClick={handleFocus}>Focus</button>
        </>
      );
  };
  访问组件：（通过forwardRef可以将ref转发到子组件）
    const Index = () => {
    const inputEl = useRef(null);
    const handleFocus = () => {
      inputEl.current.focus();
    };
    return (
        <>
          <Child ref={inputEl} />
          <button onClick={handleFocus}>Focus</button>
        </>
      );
    };
    const Child = forwardRef((props, ref) => {
      return <input ref={ref} />;
    });
```
- useRef 缓存数据

### 1. useImperativeHandle
:::


