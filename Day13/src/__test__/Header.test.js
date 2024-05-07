import { fireEvent, render, screen } from "@testing-library/react";
import {it,expect} from "@jest/globals";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  
  // const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button",{name:"Login"});
  // const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  
  // const cartItem = screen.getByText("Cart (0 items)");
  //Using Regex
  const cartItem = screen.getByText(/Cart/);


  expect(cartItem).toBeInTheDocument();
});

it("Should change login button to logout when clicked", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  
  // const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button",{name:"Login"});
  //FireEvent
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button",{name:"Logout"});

  // const loginButton = screen.getByText("Login");
  expect(logoutButton).toBeInTheDocument();

});