import {render, fireEvent} from "@testing-library/react"
import Form from "./Form"

it("expect", ()=>{
    expect(1+1).toBeLessThan(6)
})

it("check if button exist", ()=>{
const {queryByTitle} = render(<Form/>)
const btn = queryByTitle("testFormBtn")
expect(btn).toBeTruthy()
})

it("check if input exist", ()=>{
    const {queryByTitle} = render(<Form/>)
    const input = queryByTitle("testInput")
    expect(Number(input.value)).toBe(0)
})

describe("button is clicked", ()=>{
    it("clicked", ()=>{
        const {queryByTitle} = render(<Form/>)
        const btn = queryByTitle("testFormBtn")
        const input = queryByTitle("testInput")
        const p = queryByTitle("testContent")
        expect(input.value.length).toBeTruthy()
        fireEvent.click(btn)
        expect(input.value).toEqual(String(20))
        expect(p.innerHTML).toBe("Your age is 20")
        
    })

    it("check input change", () =>{
        const {queryByTitle} = render(<Form/>)
        const input = queryByTitle("testInput")
        fireEvent.change(input,{target:{value:30}})
        expect(input.value).toBe("30")

    })

})