import { fireEvent, render , screen} from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { execPath } from "process";

it("Should render the header component login button",()=>{
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton=screen.getByRole("button",{name:"Login"});

    expect(loginButton).toBeInTheDocument();

});

it("Should check the cart item 0",()=>{
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cart=screen.getByText("Cart (0 items)");

    expect(cart).toBeInTheDocument();

});

it("Should change login button to logout on click",()=>{
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton=screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginButton);

    const logoutButton=screen.getByRole("button",{name:"Logout"});


    expect(logoutButton).toBeInTheDocument();
});