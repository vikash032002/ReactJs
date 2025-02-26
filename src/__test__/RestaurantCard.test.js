import { render ,screen} from "@testing-library/react";
import ResturantCard ,{withPromotedLabel} from "../components/ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("Should render RestaurantCard component with props Data",()=>{

    render(<ResturantCard resData={MOCK_DATA} />);

    const name=screen.getByText("Louis Burger");

    expect(name).toBeInTheDocument();

});

it("Should render Higher Order Component (HOC) with label", () => {
    // Wrap RestaurantCard with the HOC
    const PromotedRestaurantCard = withPromotedLabel(ResturantCard);

    render(<PromotedRestaurantCard resData={MOCK_DATA} />);

    // Check if "Open" label is present
    const label = screen.getByText("Open");
    expect(label).toBeInTheDocument();

    // Ensure restaurant name is still present
    const name = screen.getByText("Louis Burger");
    expect(name).toBeInTheDocument();
});