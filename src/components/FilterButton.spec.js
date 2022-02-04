/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { render } from "@testing-library/react";
import FilterButton from "./FilterButton";

describe("Check the button status", () => {
  it("Should be enabled by default", () => {
    const FilterButtonElement = render(<FilterButton />);
    const value = FilterButtonElement.getByTestId("Filter-Buttons");
    expect(value).not.toHaveAttribute("disabled");
  });
});
