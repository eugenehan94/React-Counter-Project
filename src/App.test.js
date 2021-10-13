import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App test", () => {
  describe("Title checks", () => {
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

    it("should get all heading", () => {
      render(<App />);
      const headingElements = screen.getAllByRole("heading");
      expect(headingElements).toBeInTheDocument;
    });
  });

  describe("Button Test", () => {
    it("should have reset button", () => {
      render(<App />);
      const buttonElement = screen.getByRole("button", {
        name: /reset/i,
      });
      expect(buttonElement).toBeInTheDocument;
    });

    it("should have more than on button", () => {
      render(<App />);
      const buttonElements = screen.getAllByRole("button");
      expect(buttonElements).toBeInTheDocument;
    });
    it("should have increase 1 button", () => {
      render(<App />);
      const btn = screen.getByRole("button", { name: "Increase 1" });
      expect(btn).toBeInTheDocument;
    });
    it("after increase 1 button clicked does counter go up 1", () => {
      render(<App />);
      const buttonElement = screen.getByRole("button", { name: "Increase 1" });
      fireEvent.click(buttonElement);
      const counterAfter = screen.getByText(1);
      expect(counterAfter).toBeInTheDocument;
    });
    it("after increase 100 button click does counter go up 100", () => {
      render(<App />);
      const buttonElement = screen.getByRole("button", {
        name: "Increase 100",
      });
      fireEvent.click(buttonElement);
      const counterAfter = screen.getByText(100);
      expect(counterAfter).toBeInTheDocument;
    });
  });
});
