# Day 1 of React

> VS code uses Emmet to create boiler plate code

## React.createElement(tag type,{props},children);

Example:

```js
React.createElement("div",{id:"divID"}, React.createElement("h1",{},"Hello World"));
```

> O/p: This creates a `<div>` tag with attribute as id="divID" and it has a child tag `<h1>` in which is has the text "Hello World". This will eventually return an React object.

```js
<div>
  <h1>
    Hello World
  </h1>
</div>
```

> {} - Will have attributes which will be added to the tag defined.

## ReactDOM.createRoot(domNode,options)

> React will create a root for this DOM element and allow you to call functions on the root, such as render to display rendered React content.

## render()

> createRoot lets you create a root to display React components inside a browser DOM node. React Object is rendered to JS.
> Example:

```js
const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

---

> We can create sibling tags meaning, we can have 2 `<h1>` tags in same div by giving array of the children to the createElement functions

```js
React.createElement("div",{},[
  React.createElement("h1",{},"Hello"),
  React.createElement("h1",{},"World")
])
```

> `{}` is for giving attributes like id, class, href, etc
