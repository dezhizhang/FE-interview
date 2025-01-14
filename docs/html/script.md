# `<script>`、`<script async>` 和 `<script defer>` 的区别

在 HTML 中，`<script>` 标签用于引入 JavaScript 代码。为了优化页面加载性能，HTML5 引入了 `async` 和 `defer` 属性。下面将详细解释这三种方式的区别。

---

#### 1. `<script>`

- **定义**：最基本的用法，不带任何属性。
- **加载和执行**：
- 默认情况下，浏览器在遇到 `<script>` 标签时会立即停止解析 HTML，开始下载并执行 JavaScript。
- 这可能导致页面的渲染延迟，特别是当脚本文件较大或网络较慢时。
- **使用场景**：
- 当 JavaScript 必须在页面其他部分加载和执行之前完成时使用。

---

#### 2. `<script async>`

- **定义**：带有 `async` 属性的 `<script>` 标签。
- **加载和执行**：
- 浏览器会异步加载脚本文件，不会阻塞 HTML 的解析。
- 一旦脚本下载完成，立即执行该脚本，可能会在文档解析的任意时刻执行。
- **特点**：
- 适用于不依赖于其他脚本的独立脚本，例如第三方库（如广告脚本或分析工具）。
- **注意事项**：
- 执行顺序不一定与脚本在文档中的顺序一致。

---

#### 3. `<script defer>`

- **定义**：带有 `defer` 属性的 `<script>` 标签。
- **加载和执行**：
- 浏览器会异步加载脚本文件，但不会立即执行。
- 直到整个 HTML 文档解析完成后，才会按照在文档中出现的顺序执行所有 `defer` 脚本。
- **特点**：
- 适用于依赖于 DOM 元素的脚本，例如需要在页面加载完成后操作 DOM 的脚本。
- **注意事项**：
- `defer` 脚本在文档解析后按顺序执行，确保脚本依赖关系的正确性。

---

### 总结

| 属性             | 加载方式             | 执行时机               | 执行顺序         | 使用场景                      |
| ---------------- | -------------------- | ---------------------- | ---------------- | ----------------------------- |
| `<script>`       | 阻塞，停止 HTML 解析 | 脚本下载完成后立即执行 | 按照文档中的顺序 | 需要在 DOM 加载之前执行的脚本 |
| `<script async>` | 异步加载，不阻塞解析 | 脚本下载完成后立即执行 | 无法保证顺序     | 不依赖于其他脚本的独立脚本    |
| `<script defer>` | 异步加载，不阻塞解析 | 文档解析完成后执行     | 按照文档中的顺序 | 依赖于 DOM 的脚本             |

通过合理使用这三种 `<script>` 标签的方式，可以有效优化网页的加载性能，提升用户体验。
