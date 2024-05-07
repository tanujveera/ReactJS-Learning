import { act, fireEvent, render, screen } from "@testing-library/react";
import { expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header"
import Cart from "../components/Cart"
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
);

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
