import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { useSearchPageContext } from "../SearchPageContext";
import SearchBox from "./SearchBox";

jest.mock("../SearchPageContext", () => ({
  useSearchPageContext: jest.fn(),
}));

describe("<SearchBox />", function () {
  it("should set user login on Enter", async () => {
    /**
     * Set a value to the search input
     * Expect that search input has the new value
     * Simulate Enter key in input
     * Expect that function setUserLogin from useSearchPageContext was called with input's value
     *
     * Useful links:
     * https://testing-library.com/docs/dom-testing-library/api-events
     * https://jestjs.io/docs/en/mock-functions.html#custom-matchers
     */
    const value = "Stan";
    const setUserLogin = jest.fn();
    useSearchPageContext.mockImplementation(() => ({ setUserLogin }));

    const { getByTestId } = render(<SearchBox />);
    const input = getByTestId("search-box-input");

    fireEvent.change(input, { target: { value } });

    expect(input).toHaveValue(value);

    fireEvent.keyDown(input, {
      key: "Enter",
      code: 13,
    });

    expect(setUserLogin).toHaveBeenCalledWith(value);
  });
});
