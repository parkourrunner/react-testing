import { render, screen } from "@testing-library/react";
import LoginComponent from "./LoginComponent";

describe("Login conmponent tests", () => {
  const loginServiceMock = {
    login: jest.fn(),
  };
  const setTokenMock = jest.fn();

  it("Should render conponent correctly", () => {
    const { container } = render(
      <LoginComponent loginService={loginServiceMock} setToken={setTokenMock} />
    );



    console.log(container.innerHTML);

    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });
});
