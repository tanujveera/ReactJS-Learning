import { render, screen } from "@testing-library/react";
import { expect, jest, test, describe } from "@jest/globals";
import "@testing-library/jest-dom";
import Contact from "../components/Contact";


describe("Contact us page test cases", () => {

  afterAll(()=>{
    console.log("After all test cases")
  })

  afterEach(()=>{
    console.log("After Each")
  })

  beforeAll(()=>{
    console.log("Before All tests")
  })

  beforeEach(()=>{
    console.log("beforeEach runs at each test case")
  })

  it("Should load contact as component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load input name inside contact component", () => {
    render(<Contact />);

    const heading = screen.getByPlaceholderText("Name");

    expect(heading).toBeInTheDocument();
  });

  it("Should load 2 input name inside contact component", () => {
    render(<Contact />);

    const heading = screen.getAllByRole("textbox");

    expect(heading.length).toBe(2);
  });
});

