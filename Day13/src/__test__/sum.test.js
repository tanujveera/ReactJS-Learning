import { sum } from "../components/sum";

test("Sum Function should calculate sum of numbers", () => {
  const result = sum(2, 3);

  //Assertion
  expect(result).toBe(5);
});

test("Sum Function should calculate sum of numbers", () => {
  const result = sum(5, 3);

  //Assertion
  expect(result).toBe(8);
});
