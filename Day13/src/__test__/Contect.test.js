import {render,screen} from "@testing-library/react"
import Contact from "../components/Contact"
import   "@testing-library/jest-dom"

test("Should load contact as component",()=>{
  render(<Contact/>);

  const heading = screen.getByRole("reason");

  expect(heading).toBe
});
