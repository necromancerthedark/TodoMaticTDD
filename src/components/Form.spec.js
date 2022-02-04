/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import { render } from "@testing-library/react";
import React from "react";
import Form from "./Form";
describe("Basic rendering of form", () => {
  it("Should Have blank text", () => {
    const formComponent = render(<Form />);
    const value = formComponent.getByTestId("input-form");
    expect(value).toHaveTextContent("");
  });

  it("Add button should be enabled", () => {
    const formComponent = render(<Form />);
    const value = formComponent.getByTestId("Add-btn");
    expect(value).not.toHaveAttribute("disabled");
  });
});
