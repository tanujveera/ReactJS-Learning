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
export const name = "Tanuj Veera";
export const gender = "Male";

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
