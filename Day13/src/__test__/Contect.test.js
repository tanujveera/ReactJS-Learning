import { render, screen } from "@testing-library/react";
import { expect, jest, test, describe } from "@jest/globals";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

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

  test("Should load 2 input name inside contact component", () => {
    render(<Contact />);

    const heading = screen.getAllByRole("textbox");

    expect(heading.length).toBe;
  });
});
