import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from "../mocks/resMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA)
    });
});

it("Should load Restaurant Menu Component", async ()=>{
    await act(async ()=>render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
    </Provider>

    </BrowserRouter>
    ));
    const accordinHeader=screen.getByText("Recommended (9)");
    fireEvent.click(accordinHeader);
    expect(screen.getAllByTestId("foodItem").length).toBe(9);

    const addBtn=screen.getAllByRole("button",{name:"Add+"});
    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

    const cartItem=screen.getAllByTestId("foodItem");
    expect(cartItem.length).toBe(1);
})