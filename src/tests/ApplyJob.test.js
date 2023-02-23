import React from "react";
import { render, screen } from "@testing-library/react";
import ApplyJob from "../components/ApplyJob";
import { MemoryRouter } from "react-router-dom";

describe("ApplyJob component", () => {
  it("renders the correct job title and id", () => {
    const params = { id: "123", position: "Frontend Developer" };
    render(
      <MemoryRouter>
        <ApplyJob params={params} />
      </MemoryRouter>
    );
    const titleElement = screen.getByText(
      `Apply for ${params.position} (ID: ${params.id})`
    );
    expect(titleElement).toBeInTheDocument();
  });
});
