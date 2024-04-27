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

If you want to change your parent state variable from child, it's not possible directly. But you can send the setVar method of state variable as a prop.