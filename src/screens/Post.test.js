import { render, act, screen } from "@testing-library/react";
import Posts from "./Posts";
import mockData from "../utils/mockData";

it("component is rendered", () => {
  const { queryByTitle } = render(<Posts />);
  const div = queryByTitle("testDiv");
  expect(div).toBeTruthy();
});

describe("mocked fetch api", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve(mockData) 
    );
  });

  test("fetch and render post", async () => {
    render(<Posts/>)
    //await act(() =>  render(<Posts/>))
    // mockData.forEach(post =>{
     // expect(screen.getByText("voluptatem")).toBeInTheDocument()
    // })
  })
});


test("get element by test id", () =>{
  render(<Posts/>)
  const myElement = screen.getByTestId('test-1')
  expect(myElement).toBeInTheDocument()
  expect(myElement).toHaveTextContent("My Post")
  expect(myElement).toContainHTML("<span>")
  expect(myElement).not.toContainHTML("<p>")
  
})

it("check if data matches snapshot", ()=>{
  expect(render(<Posts/>)).toMatchSnapshot()
})