# Day 10 of React

Ways to write CSS

1) Classic CSS

2) Sass & Scss - Not recommended.

3) Styled components is another way to add CSS.

4) Frameworks - Material UI, Bootstrap, Chakra UI, Ant Design.
They provide React UI Components which are already styled.

# Tailwind

Tailwind CSS is a utility-first CSS framework that streamlines web development by providing a set of pre-designed utility classes.

To install Tailwind, there are various ways [Link](https://tailwindcss.com/docs/installation "Tailwind")

We are going to use Framework guides > Parcel [Link](https://tailwindcss.com/docs/guides/parcel "TailwindParcel")

Install tailwindcss
```sh
npm install -D tailwindcss postcss
```
PostCSS: PostCSS is a JavaScript library that transforms CSS into JavaScript. Yep, you heard that right! CSS is transpiled into an abstract syntax tree, which is then represented with JavaScript objects. This transformation allows developers the opportunity to manipulate the CSS through those objects.

Run init command to generate `tailwind.config.js` file
```sh
npx tailwindcss init
```

Since we are using Parcel, it uses `.postcssrc` file to read/understand tailwind CSS. Tailwind is a plugin in terms of PostCSS. To enable tailwindcss plugin, we need to declare it in `.postcssrc` file.

```js
{
  "plugins": {
    "tailwindcss": {}
  }
}
```

In `tailwind.config.js`, we declare where it can find tailwindcss. It can find tailwind being used in these files. It is given in content array.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Tailwind gives you classes which can perform particular CSS properties.
