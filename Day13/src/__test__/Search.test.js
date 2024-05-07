import { act, fireEvent, render, screen } from "@testing-library/react";
import { expect, jest, it } from "@jest/globals";
import "@testing-library/jest-dom";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/mockRestaurantList.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body component and get button", async () => {
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


it("Should render the body component and res List and search input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);
  const searchBtn = screen.getByRole("button",{name:"Search"});
  // console.log(searchBtn);
  const searchInput = screen.getByTestId("searchInput");
  // console.log(searchInput);
  fireEvent.change(searchInput,{target:{value:"hotel"}});
  fireEvent.click(searchBtn);
  const allCardsAfterSearch = screen.getAllByTestId("resCard");
  expect(allCardsAfterSearch.length).toBe(1);
});

test("Should render all the top rated Restaurants",async ()=>{
  await act(() => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);
  const topRes = screen.getByRole("button",{name:"Top Rated Restaurants"});
  // console.log(topRes);
  fireEvent.click(topRes);
  const cards = screen.getAllByTestId("resCard");
  // console.log(cards);
  expect(cards.length).toBe(6);
});