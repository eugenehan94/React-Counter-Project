import { render, screen } from "@testing-library/react";
import App from "./App";

/*test and it are interchangeable*/
test("should see if title is of text complex", async () => {
  render(<App />);
  const headerElement = screen.getByText(/complex/i);
  expect(headerElement).toBeInTheDocument;
});

it("should check if title has word counter", () => {
  render(<App />);
  const titleElement = screen.getByText(/counter/i);
  expect(titleElement).toBeInTheDocument;
});

it("should check if title is present", () => {
  render(<App />);
  const headerElement = screen.getByRole("heading", {
    name: /complex counter/i,
  });
  expect(headerElement).toBeInTheDocument;
});

it("should check the title countTitle is present", async () => {
  render(<App />);
  const countTitle = screen.getByTitle("countTitle");
  expect(countTitle).toBeInTheDocument;
});

it("should get the header-1 test id", () => {
  render(<App />);
  const testIdHeader = screen.getByTestId("header-1");
  expect(testIdHeader).toBeInTheDocument;
});
