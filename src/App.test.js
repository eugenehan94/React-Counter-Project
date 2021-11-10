import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("header test", () => {
  it("primary header present - getByRole", () => {
    render(<App />);
    // The following is a screen debug which acts like console.log
    // screen.debug(screen.getByRole("heading", { name: "Complex Counter" }));
    expect(screen.getByRole("heading", { name: "Complex Counter" }))
      .toBeInTheDocument;
  });
  it("primary header present - getByText", () => {
    render(<App />);
    // screen.debug(screen.getByText(/complex counter/i));
    expect(screen.getByText(/complex counter/i)).toBeVisible;
  });
  it("primary header present - getByTestid - last resort query", () => {
    render(<App />);
    const headerElement = screen.getByTestId("header-1");
    // screen.debug(screen.getByTestId("header-1"));
    expect(headerElement).toBeInTheDocument;
  });
});

describe("counter header", () => {
  it("if it is present - getByRole", () => {
    render(<App />);
    // screen.debug(screen.getByTitle("countTitle"));
    expect(screen.getByTitle("countTitle")).toBeInTheDocument;
  });
});

describe("get list of ", () => {
  it("all headers", () => {
    render(<App />);
    // screen.debug(screen.getAllByRole("heading"));
    expect(screen.getAllByRole("heading")).toBeInTheDocument;
  });

  it("buttons", () => {
    render(<App />);
    // screen.debug(screen.getAllByRole("button"));
    expect(screen.getAllByRole("button")).toBeVisible;
  });
});

describe("Integrations tests", () => {
  it("check that the count is zero initially", () => {
    render(<App />);
    expect(screen.getByTitle("countTitle").textContent).toBe("0");
  });

  it("click increase 1 button, counter does up 1", () => {
    render(<App />);
    // screen.debug(screen.getByRole("button", { name: "Increase 1" }));
    const targetButton = screen.getByRole("button", { name: "Increase 1" });
    fireEvent.click(targetButton);
    const targetCount = screen.getByTitle("countTitle");
    expect(targetCount.textContent).toBe("1");
  });

  it("click decrease 1 button, counter goes down 1", () => {
    render(<App />);
    const targetButton = screen.getByRole("button", { name: "Decrease 1" });
    fireEvent.click(targetButton);
    expect(screen.getByTitle("countTitle").textContent).toBe("-1");
  });

  it("reset after increase 1", () => {
    render(<App />);
    // screen.debug(screen.getByTitle("countTitle"));
    fireEvent.click(screen.getByRole("button", { name: "Increase 1" }));
    expect(screen.getByTitle("countTitle").textContent).toBe("1");
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));
    expect(screen.getByTitle("countTitle").textContent).toBe("0");
  });
  it("is zero falsey", () => {
    render(<App />);
    expect(screen.getByTitle("countTitle").textContent).toBeFalsy;
  });
  it("random positive number", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Random + Number" }));
    const count = parseInt(screen.getByTitle("countTitle").textContent);
    expect(count).toBeGreaterThan(0);
  });
  it("random negative number", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Random - Number" }));
    expect(parseInt(screen.getByTitle("countTitle").textContent)).toBeLessThan(
      0
    );
  });
  it("increase by 10", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Increase 10" }));
    expect(screen.getByTitle("countTitle").textContent).toBe("10");
  });
  it("decrease by 10", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Decrease 10" }));
    expect(screen.getByTitle("countTitle").textContent).toBe("-10");
  });
  it("increase by 100", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Increase 100" }));
    expect(screen.getByTitle("countTitle").textContent).toBe("100");
  });
  it("decrease by 100", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Decrease 100" }));
    expect(screen.getByTitle("countTitle").textContent).toBe("-100");
  });
  it("decrease by 10, then reset to zero", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Decrease 100" }));
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));
    expect(screen.getByTitle("countTitle").textContent).toBe("0");
  });
});
