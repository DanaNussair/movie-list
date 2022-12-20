import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import mockAxios from "axios";

import Search from "./Search";

const searchResults = {
  data: {
    Search: [
      {
        Title: "kung fury",
        Year: "2015",
        imdbID: "1234",
        Type: "action, comedy",
        Poster: "",
      },
    ],
  },
};

describe("Test Search component", () => {
  const mockedGet = mockAxios.get as jest.Mock;
  render(
    <Router>
      <Search />
    </Router>
  );

  beforeEach(async () => {
    const searchTerm = "kung fury";
    const input = screen.getByTestId("search-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: searchTerm } });
    expect(input.value).toBe(searchTerm);
    await new Promise((res) => setTimeout(res, 500));
  });

  afterEach(jest.clearAllMocks);

  it("should show movies based on provided search term", async () => {
    mockedGet.mockResolvedValueOnce(searchResults);
    expect(mockedGet).toHaveBeenCalledTimes(1);

    const resultItems = await screen.findByTestId("result-items");
    expect(await screen.findByTestId("movie-item")).toBeVisible();
    expect(resultItems).toBeVisible();
  });
});
