import React from "react";
import Email from "./Email";
import { render, fireEvent, getByTestId } from "@testing-library/react";

describe("<Email />", function () {
  it("should renders show email button", () => {
    /**
     * Check if the right button is displayed
     * Ensure that email text in NOT displayed
     *
     * Useful links:
     * https://jestjs.io/docs/en/expect#not
     */
    const email = "smth@test.com";
    const { getByTestId, queryByText } = render(<Email value={email} />);

    const button = getByTestId("show-email-button");
    const emailText = queryByText(email);

    expect(button).toHaveTextContent("show email");
    expect(emailText).not.toBeInTheDocument();
  });

  it("should renders value when button clicked", () => {
    /**
     * After button was clicked
     * Check that button is NOT displayed (not exists in DOM)
     * Ensure that email text in displayed
     *
     * Useful links:
     * https://github.com/testing-library/jest-dom#tobeinthedocument
     */
    const email = "world@test.com";
    const { getByTestId, queryByText } = render(<Email value={email} />);
    const button = getByTestId("show-email-button");

    fireEvent.click(button);
    const emailText = queryByText(email);

    expect(button).not.toBeInTheDocument();
    expect(emailText).toBeInTheDocument();
  });
});
