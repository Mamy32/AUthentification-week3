import {render, screen} from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
    test("renders the button with the correct label", () => {
        render(<Button label="Click Me" />);
        const buttonElement = screen.getByText("Click Me");
        expect(buttonElement).toBeInTheDocument();
    });
});
    