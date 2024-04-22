# Day 9 of React

# Optimize React App

Single Responsibility Principle: The idea behind the SRP is that every class, module, or function in a program should have one responsibility/purpose in a program.

`Every class or function should have only one reason to change.`

We wrote every component in different files.

Keeping your code modular keeps your code maintainable and testable.

## Custom Hooks

When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. It makes our code more readable and usable.

Custom Hooks start with `use`. Example: useFetch()

Fetching the data from an API and returning it, which can be used almost anywhere. So we can create a custom hook.

```js
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchData = async (resId) => {
    const data = await fetch(MENU_API + resId);

    const jsonData = await data.json();
    // console.log(jsonData);
    console.log(jsonData?.data);

    setResInfo(jsonData?.data);
  };

  useEffect(() => {
    fetchData(resId);
    console.log("use Effect Menu");
  }, []);

  return resInfo;
};
```

All Custom Hooks should have `use` as a prefix.

# User Online or Offline

How to write a custom hook?

Finalize the contract, meaning be clear on what that custom hook should perform. What are the inputs it needs and output it should give.

To create a feature if user is online or offline. We have to use `window` object which has `online event`

Syntax:
```js
addEventListener("online",(event)=>{});
ononline = (event)=>{};
```

We created a `useOnlineStatus()` Hook which displays a text whether user is offline or online.

