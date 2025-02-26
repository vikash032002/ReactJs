import { sum } from "../components/sum";


test("To calculate sum",()=>{
    const result=sum(3,4);

    //assertion
    expect(result).toBe(7);
});