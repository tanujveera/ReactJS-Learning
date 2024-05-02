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

>Step 1
Command to install the library
```sh
npm install -D @testing-library/react
```

## JEST
React Testing Library uses `Jest` library. So DOM & React testing library inherently uses `Jest` library.

>Step 2
```js
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Since we are babel, we have configure it in our app. Create a file in project root directory `babel.config.js`.

>Step 3
```js
// babel.config.js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

Parcel uses Babel inherently. So there might be a conflict between them. We have to configure babel to work with parcel. [Parcel-Babel](https://parceljs.org/languages/javascript/#babel "Babel")

>Step 4 Configure Parcel file to disable default babel transpilation

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

