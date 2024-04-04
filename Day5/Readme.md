# Day 5 of React

# Swiggy Structure

- Header
- - Logo
- - Nav Bar
- Body
- - Search
- - Restaurant Container
- Card
- - Img
- - Name of Res, stars, rating, cuisine, delivery time
- Footer
- - Copyright
- - Links
- - Address
- - Contact

There is a conventional way in industry to keep React code in 'src' source folder.

Usually, each component are written in separate files.

There are two types of exports:

1. Named Exports: It can export multiple functions, variables

```js
//Named Export
// name.js
// use export for every export variable or function
export const name = "Tanuj Veera";
export const gender = "Male";

//or use export in this way
const name = "Tanuj Veera";
const gender = "Male";

export { name, gender };

//Importing Named Export
// user.js
// Named export will always import using {}
import { name, gender } from "./user.js";
```

2. Default Exports: It can only export a single object (function or variable).

```js
//Default Export
// name.js
const name = "Tanuj Veera";
export default name;

//Importing Default Export
// user.js
import name from "./user.js";
```

# React Hooks

> Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own.

> There are normal JavaScript utility functions

There are 2 important hooks:

- useState()
- useEffect()

**NOTE** There are other React Hooks. check out at [React Hooks](https://react.dev/reference/react/hooks "React Hooks Docs")

## useState()
