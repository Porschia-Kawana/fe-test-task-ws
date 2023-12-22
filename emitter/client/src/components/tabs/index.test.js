import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Tabs from "./index";

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

it("renders throws an Error if props have not been passed through", () => {
    act(() => {
        expect(() => render(<Tabs />, container).toThrow(Error))
    });
});

it("Loads all tabs set out in props, if none have been declared active it defaults to the first tab", () => {
    act(() => {
        render(
            <Tabs tabs={[{ label: "Leaderboard" }, { label: "Settings" }]}>
                <div>Hello 1</div>
                <div>Hello 2</div>
            </Tabs>
            , container);
    });

    expect(container.textContent).toMatch("Leaderboard");
    expect(container.textContent).toMatch("Settings");
    expect(container.textContent).toMatch("1");
    expect(container.textContent).not.toMatch("2");
});

it("Loads all tabs set out in props, if a tab is declared active it will open to that content", () => {
    act(() => {
        render(
            (<Tabs tabs={[{ label: "Leaderboard" }, { label: "Settings", active: true }]}>
                <div>Hello 1</div>
                <div>Hello 2</div>
            </Tabs>)
            , container);
    });

    expect(container.textContent).toMatch("2");
    expect(container.textContent).not.toMatch("1");
});