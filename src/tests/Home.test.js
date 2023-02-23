import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { MemoryRouter } from "react-router-dom";

describe("Home Component", () => {
  it("renders carousel images and footer", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const carouselImages = screen.getAllByAltText(/Img \d/);
    expect(carouselImages).toHaveLength(3);
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });
});
