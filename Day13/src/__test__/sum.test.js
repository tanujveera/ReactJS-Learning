import { sum } from "../components/sum";

test("Sum Function should calculate sum of numbers", () => {
  const result = sum(2, 3);
  //Assertion
  expect(result).toBe(5);
});