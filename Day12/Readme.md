# Day 12 of React

# Redux Toolkit

There are something called `Slice` in Redux. Each state which should be maintained across the application.

There is a scenario in our app, where we need to add food items (RestaurantMenu) to cart component. 

When we click add on a food item, it `dispatches` an `action`. 

Then it calls a function which modifies the cart component or updates the slice of `Redux store`.

This `function` is called as `Reducer`.

![alt text](image-1.png)

To read data from the cart which is updated, in this scenario we use `selector` to read the data from store and update the React Component in Home page Cart with no of items added.

This process is called `subscribed` to the Redux store. So we can subscribe to redux store using selector.

## Next Steps 
- Install dependencies

  ```sh
  npm i @reduxjs/toolkit
  npm i react-redux
  ````

- Build store
- Connect our store to our app
- Create cart slice
- Dispatch an action
- selector

## Build

We installed 2 dependencies. 
- `@reduxjs/toolkit` has all the required dependencies used to create redux stores or slices etc.
- `react-redux` is like a bridge between React and Redux which connects both.

`configureStore({})` Redux code to configure it. 
```js
//appStore.js
import {configureStore} from "@reduxjs/toolkit";
const appStore = configureStore({});
```

`<Provider key={configureStore}>` will provide the redux store to react 
```js
//App.js
return (
  <Provider key={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  </Provider>
);
```

Create a card slice

```js
//cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:'cart',
  initialState:{
    items:[]
  },
  reducers:{
    addItem:(state, action)=>{
      state.items.push(action.payload);
    },
    removeItem:(state)=>{
      state.items.pop();
    },
    clearCart:(state)=>{
      state.items.length=0;
    }
  }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
```

>Key points in above code
- createSlice will create slice which takes a few objects
  - `name` - name of the Redux slice
  - `initialState` (object) - define the initial state of a variable, in this case, `items`
  - `reducers` (object) - reducer function which will be called when an action is done.
    - every function takes 2 arguments 
      - `state` - provides the current state
      - `action` - provides the action
- This is standard way to export reducers and actions.