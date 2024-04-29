# Day 12 of React

# Redux

There are something called `Slice` in Redux. Each state which should be maintained across the application.

There is a scenario in our app, where we need to add food items (RestaurantMenu) to cart component. 

When we click add on a food item, it `dispatches` an `action`. 

Then it calls a function which modifies the cart component or updates the slice of Redux store.

This `function` is called as `Reducer`.

![alt text](image-1.png)