import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import LeadershipTable from "./LeadershipTable";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Renders Leadership Data Table with or without limit", () => {
    act(() => {
        render(<LeadershipTable limit={10} />, container);
    });
    expect(container.textContent).toMatch("UsernameEmailScore");

    act(() => {
        render(<LeadershipTable />, container);
    });
    expect(container.textContent).toMatch("UsernameEmailScore");
});
