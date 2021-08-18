import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders h1 heading", () => {
    render(<App />);
    const h1 = screen.getByText(/URL Shortener/i);
    expect(h1).toBeInTheDocument();
  });
});
