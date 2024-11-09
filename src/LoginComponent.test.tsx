import { act, fireEvent, render, screen } from "@testing-library/react";
import LoginComponent from "./LoginComponent";
import user from "@testing-library/user-event";

describe("Login conmponent tests", () => {
  const loginServiceMock = {
    login: jest.fn(),
  };
  const setTokenMock = jest.fn();

  let container: HTMLElement;

  function setup() {
    container = render(
      <LoginComponent loginService={loginServiceMock} setToken={setTokenMock} />
    ).container;
  }

  beforeEach(() => {
    setup();
  });

  it("Should render conponent correctly", () => {
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
    expect(screen.queryByTestId("resultLabel")).not.toBeInTheDocument();
  });

  it("Should render correctly - query by testid", () => {
    const inputs = screen.getAllByTestId("input");
    expect(inputs).toHaveLength(3);
    expect(inputs[0].getAttribute("value")).toBe("");
    expect(inputs[1].getAttribute("value")).toBe("");
    expect(inputs[2].getAttribute("value")).toBe("Login");
  });

  it("Should render correctly - query by document queries", () => {
    // eslint-disable-next-line testing-library/no-node-access
    const inputs = document.querySelectorAll("input");
    expect(inputs).toHaveLength(3);
    expect(inputs[0].value).toBe("");
    expect(inputs[1].value).toBe("");
    expect(inputs[2].value).toBe("Login");
  });

  

  it("Clivk login with incomplete credentials - show right message", () => {
    const inputs = screen.getAllByTestId("input");
    const loginButton = inputs[2];

    // fireEvent.click(loginButton);
    act(() =>{user.click(loginButton)});
    const resultLAbel = screen.getByTestId("resultLabel");
    expect(resultLAbel.textContent).toBe("UserName and password required!")
  });

});
