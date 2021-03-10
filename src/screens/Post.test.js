import { render, fireEvent, act } from "@testing-library/react";
import Posts from "./Posts";
import mockData from "../utils/mockData";

it("component is rendered", () => {
  const { queryByTitle } = render(<Posts />);
  const div = queryByTitle("testDiv");
  expect(div).toBeTruthy();
});

describe("mocked fetch api", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(mockData) })
    );
  });
  it("fetch and render post", async () => {
      await act(async() => render(<Posts/>))
  });
});


