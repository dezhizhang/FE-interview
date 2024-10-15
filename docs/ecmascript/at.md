# ES2022 中的 `Array.at()`

`Array.at()` 是 ECMAScript 2022 (ES13) 中引入的一个新方法，用于从数组中获取指定位置的元素。该方法提供了一种简洁的方式来访问数组中的元素，并支持负数索引，使得从数组末尾获取元素变得更加方便。

## 主要特性

1. **正索引**：使用正数索引从数组的开头访问元素，索引从 `0` 开始。
2. **负索引**：使用负数索引可以从数组的末尾访问元素，`-1` 表示最后一个元素，`-2` 表示倒数第二个元素，以此类推。
3. **安全性**：如果指定的索引超出了数组的范围，`Array.at()` 将返回 `undefined`，而不会抛出错误。

## 语法

```javascript
array.at(index);
```

- index：要返回的元素的索引，可以是正数或负数。

### 1. 正索引

```js
const arr = [10, 20, 30, 40, 50];
console.log(arr.at(0)); // 输出: 10
console.log(arr.at(2)); // 输出: 30
console.log(arr.at(4)); // 输出: 50
console.log(arr.at(5)); // 输出: undefined
```

### 2.负索引

```js
const arr = [10, 20, 30, 40, 50];
console.log(arr.at(-1)); // 输出: 50
console.log(arr.at(-2)); // 输出: 40
console.log(arr.at(-5)); // 输出: 10
console.log(arr.at(-6)); // 输出: undefined
```

## 使用场景

- 更直观的数组元素访问：特别是在需要从数组末尾访问元素时，负索引使得代码更加清晰和简洁。
- 避免错误处理：通过返回 undefined 而不是抛出错误，可以简化代码逻辑，特别是在处理动态数组时。