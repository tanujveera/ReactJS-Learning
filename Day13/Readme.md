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

> Step 7

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

`expect()` - It expects result as input from the a component or function.

`toBe()` - It verifies whether the input is same as expected.

---

Whenever we are testing a component in React, we have to load the component in DOM.

React Testing Library has a method called `render(<Component/>)` which renders in to DOM.

```js
test("Should load contact as component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
```

We have rendered `<Contact/>` component using `render()`, this component is loaded in `jsdom`. We have to see if the heading has been rendered or not.

`getByRole()` method helps you to get the heading from the loaded DOM.

`expect()` method will expect heading and uses `toBeInTheDocument()`to check if it is present.

This above code throws error, because it doesn't support JSX in test cases

> Step 8: We have `@babel/preset-react` as dependency

```sh
npm install @babel/preset-react
```

You also have to add it to `babel.config.js` and give `runtime` as `automatic`

```js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
```

> Step 9: It throws error, which says it didn't find the function `toBeInTheDocument()`.

```sh
npm install @testing-library/jest-dom
```

## Unit Testing using Jest

Lets say we want to test if the component has a input element. We can use `getByPlaceholderText()` to get that input element which has a placeholder.

```js
test("Should load input name inside contact component", () => {
  render(<Contact />);

  const heading = screen.getByPlaceholderText("Name");

  expect(heading).toBeInTheDocument();
});
```

---

**NOTE** If any case VSCode intellisense is not providing suggestions for the methods.

In your test files, Jest puts each of these methods and objects into the global environment. You don't have to require or import anything to use them. However, if you prefer explicit imports, you can do `import {describe, expect, test} from '@jest/globals'`.

Adding this above import statement explicitly has restored my VSCode intellisense.

---

`describe("<description>",()=>{<all the test cases can be enclosed here>})`

using `describe()`, we can replace `test()` with `it()` to write the test cases. Both are same.

```js
describe("Contact us page test cases", () => {
  test("Should load contact as component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load input name inside contact component", () => {
    render(<Contact />);

    const heading = screen.getByPlaceholderText("Name");

    expect(heading).toBeInTheDocument();
  });
});
```

Since we are using redux for state management. When we try to run tests on any component, then it will throw error because jest doesn't understand redux.

Here, `<Header/>` doesn't pass the test because there are so many redux and react-dom elements which doesn't make sense to jest.

We have to provide the Redux store and Browser router to test it.

```js
it("Should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
});
```

Different ways to test a component using screen

```js
it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", { name: "Login" });
  // const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});
```

## Integrating Testing

If you want to click a button and test the changes in the button rendered.

`fireEvent` will perform events in jsdom and then we can check for the newly rendered element.

```js
it("Should change login button to logout when clicked", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button",{name:"Login"});
  //FireEvent
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button",{name:"Logout"});
  expect(logoutButton).toBeInTheDocument();
});
```

Testing a High Order Component (HOC - Enhancing the current component)

```js
it("should render RestaurantCard component with Promoted label", () => {
  const RestaurantLabel = withPromotedLabel(RestaurantCard);
  render( <RestaurantLabel resData={MOCK_DATA}/>);

  const name = screen.getByText("ITEMS AT ₹179")

  expect(name).toBeInTheDocument();
});
```

When testing `Body.js`, we have `fetch` in that component, `fetch` is given to browser.

So to test that we need to mock the fetch function in `Body.js`.

In the test cases, we write this in global. This fetch is a mock version of the fetch in `Body.js`

```js
global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json:()=>{
      return Promise.resolve(data);
    }
  })
})
```

But why is it written like this with multiple Promises?

Below is the code written to fetch data from an API. `fetch(URL)` usually returns a Promise, and that Promise is converted to json, it again returns a promise with json data.

```js
// Body.js
const data = await fetch(BODY_API);
const jsonData = await data.json();
```

Whenever we are doing state update, we have to wrap the component in `act()` function.

This act method is deprecated from `import {act} from 'react-dom/test-utils'`

This method is now in `import {act} from 'react'` or `import { act } from "@testing-library/react"`
```js
it("Should render the body component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchBtn = screen.getByRole("button",{name:"Search"});
  console.log(searchBtn);
  expect(searchBtn).toBeInTheDocument();
});
```

Sometimes `getByRole()` doesn't work. In that case, we can use `getByTestId("searchInput")` to get that element.

To use this, we have to give a `data-testid="searchIput"` attribute to the JSX of that element we want to test.

```js
//To get the element using test id
const searchInput = screen.getByTestId("searchInput");
```

```js
<input
  type="text"
  //declare testid 
  data-testid="searchInput"
  className="border border-black border-solid"
  value={searchText}
  onChange={(e) => {
    setSearchText(e.target.value);
  }}
></input>
```

Here we are first changing the input field and then clicking search button for getting results.

```js
it("Should render the body component and search input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeSearch = screen.All
  expect(allCards.length).toBe(20);
  const searchBtn = screen.getByRole("button",{name:"Search"});
  const searchInput = screen.getByTestId("searchInput");
  
  fireEvent.change(searchInput,{target:{value:"hotel"}});
  fireEvent.click(searchBtn);
  const allCards = screen.getAllByTestId("resCard");
  expect(allCards.length).toBe(1);
});
```

Sometimes we might perform some cleanup code or any fetch. in those cases we can use these functions

```js
afterAll(()=>{
  console.log("After all test cases")
})

afterEach(()=>{
  console.log("After Each")
})

beforeAll(()=>{
  console.log("Before All tests")
})

beforeEach(()=>{
  console.log("beforeEach runs at each test case")
})
```

This is the summary and description of the RestaurantMenu, ItemList, and Header component testing combined
Steps:
- Clicked on a restaurant
- Clicked the accordian to show the items
- Click 1 items's "Add +" add to cart
- Click another item's "Add +" add to cart
- In header, check if the Cart (<num> items) changed
- Click clear cart to see if the items are cleared and cart is empty text is visible.

```js

it("Should load RestaurantMenu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
        <RestaurantMenu />
        <Cart/>
      </Provider>
      </BrowserRouter>
    );
  });
  //Get the accordian
  const accordianHeader = screen.getByText("Pot Rice (3)");
  fireEvent.click(accordianHeader);
  //Get the list of food items in "Pot Rice (3)"
  const allItems = screen.getAllByTestId("foodItems");
  //Assert by checking if the length is 3
  expect(allItems.length).toBe(3);
  //Assert by checking if the Cart items in header is 0 items before adding any items
  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
  //Get the Add + button to click
  const addBtn = screen.getAllByRole("button",{name:"Add +"});
  console.log(addBtn.length);
  //Click the Add + button of 1st item
  fireEvent.click(addBtn[0]);
  //Assert by checking if the Cart items is 1 after adding a item
  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
  //Click 2nd item
  fireEvent.click(addBtn[1]);
  //Assert by checking if the cart items are 2 after adding another item
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
  //Assert by checking if the total items are 5
  // Here 5 meaning, 3 items in accordian and 2 items added to Cart
  // Because we use ItemList component for both those use cases
  expect(screen.getAllByTestId("foodItems").length).toBe(5);
  //click Clear cart button
  fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
  //Assert by checking if the items are 3
  //Here we removed the 2 items and those 3 are the ones in RestaurantMenu accordian
  expect(screen.getAllByTestId("foodItems").length).toBe(3);
  //Assert by checking if the cart in header is 0 items
  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
  //Assert by checking if the text Cart is Empty is rendered after that clear cart button clicked
  expect(screen.getByText("Cart is Empty")).toBeInTheDocument();
});
```