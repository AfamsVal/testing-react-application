import {sum,multipy} from "./arithmetic"

test("test if sum is working",()=>{
    expect(sum(2,5)).toBe(7)
})

test("multipy", ()=>{
    expect(multipy(23,0)).toBe(0)
    expect(multipy(3,10)).toBe(30)
    expect(multipy(2,3)).toBe(6)
})