import { render, screen } from "@testing-library/react";
import App from "./App";

it("should be header complex counter", () => {
  render(<App />);
  const headerElement = screen.getByText(/complex counter/i);
  expect(headerElement).toBeInTheDocument;
});

it("should render a heading role", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading", {
    name: "Complex Counter",
  });
  expect(headingElement).toBeInTheDocument;
});

it("should render if asynchronous", async () => {
  render(<App />);
  const headingElement = await screen.findByText(/complex counter/i);
  expect(headingElement).toBeInTheDocument;
});

it("query not to be in app", async () => {
  render(<App />);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument;
});

it("should render multiple heading roles", () => {
  render(<App />);
  const headingElements = screen.queryAllByRole("heading");
  expect(headingElements.length).toBe(2);
});
