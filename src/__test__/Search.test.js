import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/mockResData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//dummy fetch function creation beacuse fetch method is not from core javascript 
//it is provided by browser and to perform test case it just like browser but not broswer 
//so in order to perform this we have to create dummy fetch
global.fetch=jest.fn(()=>{
  return Promise.resolve({
    json: ()=>{
        return Promise.resolve(MOCK_DATA);
    }
  })
});


// it("Should render the Body Component with Search",async ()=>{
//     await act(async ()=>{
//          render(<BrowserRouter>
//        <Body/>
//        </BrowserRouter>);
//     });

//        const searchBtn=screen.getByRole("button",{name:"Search"});

//     //    console.log(searchBtn);

//         const searchInput=screen.getByTestId("searchId");

//         fireEvent.change(searchInput,{target:{value:"burger"}});

//         fireEvent.click(searchBtn);

//          await act(async () => {});

//         const cards=screen.getAllByTestId("resCard");



//        expect(cards.length).toBe(1);
// });


it("Should render the Body Component with filter",async ()=>{
    await act(async ()=>{
         render(<BrowserRouter>
       <Body/>
       </BrowserRouter>);
    });

       const searchBtn=screen.getByRole("button",{name:"Top Rated Resturant"});
    
       fireEvent.click(searchBtn);

       const topRes=screen.getAllByTestId("resCard");

       expect(topRes.length).toBe(4);
    
});