import { render, screen } from "@testing-library/react";
import { expect, jest, test, describe } from "@jest/globals";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json"
import RestaurantCard, { withPromotedLabel } from "../components/RestaurantCard";

it("should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA}/>);

  const name = screen.getByText("Chinese Wok")

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted label", () => {
  const RestaurantLabel = withPromotedLabel(RestaurantCard);
  render( <RestaurantLabel resData={MOCK_DATA}/>);

  const name = screen.getByText("ITEMS AT ₹179")

  expect(name).toBeInTheDocument();
});
