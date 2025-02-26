import { render , screen} from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("render contact us page",()=>{
    render(<Contact />);

    const heading=screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();

});

test("button is there or not",()=>{
    render(<Contact />);

    const button=screen.getByText("submit");

    expect(button).toBeInTheDocument();
});

test("2 inputs to be there",()=>{
    render(<Contact />);

    //Querying
    const inputNumber=screen.getAllByRole("textbox");

    expect(inputNumber.length).toBe(2);
})