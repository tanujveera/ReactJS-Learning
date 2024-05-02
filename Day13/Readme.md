# Day 13 of React

# Testing

Types of testing that a developer can do.

- Unit Testing
- Integration Testing
- End to End Testing (E2E)

Unit testing and Integration testing are main testing types which we will deal with.

## React Testing Library

To test react, we have `React Testing Library`. There are testing libraries for other frameworks like Angular, Vue.

These libraries have a parent library called DOM testing library which is the base to all the specific framework testing libraries.

> Step 1
> Command to install the library

```sh
npm install -D @testing-library/react
```

## JEST

React Testing Library uses `Jest` library. So DOM & React testing library inherently uses `Jest` library.

> Step 2

```js
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Since we are babel, we have configure it in our app. Create a file in project root directory `babel.config.js`.

> Step 3 Install Jest

```sh
npm i -D jest
```

> Step 4 Configure Babel - [Link](https://jestjs.io/docs/getting-started "Babel Test")

```js
// babel.config.js
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```

Parcel uses Babel inherently. So there might be a conflict between them. We have to configure babel to work with parcel. [Parcel-Babel](https://parceljs.org/languages/javascript/#babel "Babel")

> Step 5 Configure Parcel file to disable default babel transpilation

create a file `.parcelrc`

```js
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```

> Step 6 Jest Configuration which creates a `jest.config.js`

```sh
npx jest --init
```

![CMD line](image.png)

## jsdom

`jsdom` is the test environment that will be used for testing. The test cases will not run on browsers.

It is a kind of browser. When a component is loaded, it loads in to jsdom.

**NOTE** If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.

```js
npm install --save-dev jest-environment-jsdom
```

---

When you run test command

```sh
npm run test
```

It gives error saying, jest has checked for the folder with this regex pattern `**/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x)`

We have to keep all the test js files in `__test__` folder and file name is `**.test.js`/`**.test.ts` or `**spec.js`/`**.test.ts`

`__ __` (2 underscores as prefix and suffix) is known as `Dunder`.

---

**CODE** for Jest test cases

```js
import { sum } from "../components/sum";

test("Sum Function should calculate sum of numbers", () => {
  const result = sum(2, 3);
  //Assertion
  expect(result).toBe(5);
});
```

Test template

```js
test(<descrition>,callback function)
```

`expect()` - It expects input from the a component or function.

`toBe()` - It verifies whether the input is same as expected.
