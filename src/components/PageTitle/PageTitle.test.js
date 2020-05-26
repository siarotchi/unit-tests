import React from "react";
import PageTitle from "./PageTitle";
import { render } from "@testing-library/react";

describe("<PageTitle />", function () {
  it("should match the snapshot", () => {
    /**
     * Write a snapsho◘t test for PageTitle component
     * Don't forget to add snapshot file to the git
     */

    const labelText = "label text";
    const { container, getByText } = render(<PageTitle label={labelText} />);

    expect(getByText(labelText)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
