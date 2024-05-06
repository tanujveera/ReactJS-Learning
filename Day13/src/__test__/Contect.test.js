import {render,screen} from "@testing-library/react"
import {expect, jest, test} from '@jest/globals';
import Contact from "../components/Contact"
import   "@testing-library/jest-dom"

test("Should load contact as component",()=>{
  render(<Contact/>);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should load input name inside contact component",()=>{
  render(<Contact/>);

  const heading = screen.getByPlaceholderText("Name");

  expect(heading).toBeInTheDocument();
});

test("Should load 2 input name inside contact component",()=>{
  render(<Contact/>);

  const heading = screen.getAllByRole("textbox");

  // console.log(heading)
  expect(heading.length).toBe
});
