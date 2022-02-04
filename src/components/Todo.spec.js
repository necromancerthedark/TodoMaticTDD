/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

describe("if the buttons are enabled?", () => {
  it("checks the edit button for enabled status", () => {
    const component = render(<Todo />);
    const value = component.getByTestId("editing-btn");
    expect(value).not.toHaveAttribute("disabled");
  });
  it("checks the delete button for enabled status", () => {
    const component = render(<Todo />);
    const value = component.getByTestId("delete-btn");
    expect(value).not.toHaveAttribute("disabled");
  });
});

describe("checks the events after clicking the edit button", () => {
  it("checks if the cancel button is being rendered", () => {
    const component = render(<Todo />);
    const Editvalue = component.getByTestId("editing-btn");
    fireEvent.click(Editvalue);
    const value = component.getByTestId("cancel-btn");
    expect(value).not.toHaveAttribute("disabled");
  });

  it("checks if the save button is being rendered", () => {
    const component = render(<Todo />);
    const Editvalue = component.getByTestId("editing-btn");
    fireEvent.click(Editvalue);
    const value = component.getByTestId("save-btn");
    expect(value).not.toHaveAttribute("disabled");
  });
});
