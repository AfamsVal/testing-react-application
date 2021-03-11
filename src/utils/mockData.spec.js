import mockData from "./mockData"

describe("set of test",()=>{
    it("check if data matches snapshot", ()=>{
        expect(mockData).toMatchSnapshot()
    })

    test("title exits in array", () =>{
        expect(mockData.map(data => data.title)).toEqual([
            "sunt aut facere",
            "qui est esse",
            "ea molestias quasi",
            "eum et est occaecati"
        ])
    })
})


for (let index = 0; index < mockData.length; index++) {
    test("check if keys exits in array", ()=>{
        expect(mockData[index]).toHaveProperty("id")
        expect(mockData[index]).toHaveProperty("title")
    })
    
}