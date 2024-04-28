# Day 11 of React

# High Order Components

It is function which takes are components which enhances it and returns a component.

If a function doesn't do any of those things then it is called `first-order function`.

In `RestaurantCard.js`, we create a high order component which takes RestaurantCard as input and enhances with more info and returns it.

Here we take `RestaurantCard` as a input for `withPromotedLabel` component. The props are given from withPromotedLabel to its child RestaurantCard component, in case there are any

```js
export const withPromotedLabel = (RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">{props?.resData?.info?.aggregatedDiscountInfoV3?.header +" "+ props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader}</label>
        <RestaurantCard {...props}/>
        {console.log(props?.resData?.info)}
      </div>
    )
  }
};
```
In `Body.js`, we declare the withPromotedLabel Component.
```js
const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
```

In return statement, we logically render the component based on the discount information.
```js
<div className="flex flex-wrap">
  {filteredRestaurants.map((restaurant) => (
    <Link
      to={"/restaurants/" + restaurant.info.id}
      key={restaurant.info.id}
    >{
    (restaurant?.info?.aggregatedDiscountInfoV3 !== undefined) ? (<RestaurantCardPromoted resData = {restaurant}/> ): (<RestaurantCard resData={restaurant} />)
    }
    </Link>
  ))}
</div>
```

## Accordion
The Accordion component lets users show and hide sections of related content on a page.

You can add custom styles to tailwind by adding them to tailwind config file
```js
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
        "1.5/1":"1.5 / 1",
      },
    },
  },
  plugins: [],
};
```

To enable toggle feature
```js
const [showItems, setShowItems] = useState(false);
const handleClick = ()=>{
  console.log("clicked");
  setShowItems(!showItems);
}
```
If a accordian is open, and we opened another accordian, previous one will still be showing items.
It should be done from `RestaurantMenu.js`, it should control `RestaurantCategory.js`

This `RestaurantMenu.js` is a `Controlled Component`

**NOTE** It is common to call a component with some local state “uncontrolled”. For example, the original Panel component with an isActive state variable is uncontrolled because its parent cannot influence whether the panel is active or not.

In contrast, you might say a component is “controlled” when the important information in it is driven by props rather than its own local state. This lets the parent component fully specify its behavior. The final Panel component with the isActive prop is controlled by the Accordion component.

Uncontrolled components are easier to use within their parents because they require less configuration. But they’re less flexible when you want to coordinate them together. Controlled components are maximally flexible, but they require the parent components to fully configure them with props.

In practice, “controlled” and “uncontrolled” aren’t strict technical terms—each component usually has some mix of both local state and props. However, this is a useful way to talk about how components are designed and what capabilities they offer.

When writing a component, consider which information in it should be controlled (via props), and which information should be uncontrolled (via state). But you can always change your mind and refactor later.

If you want to change your parent state variable from child, it's not possible directly. But you can send the setVar method of state variable as a prop.

