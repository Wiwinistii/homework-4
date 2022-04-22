import { render, screen } from "@testing-library/react";
import Song from "../components/Song";

test("all elements are rendered", () => {
    render(<Song
        url={"https://media.giphy.com/media/1vYThCrZAsQU36nqkv/giphy.gif"}
        albumName="albumName"
        artistName={"artistName"}
        alt={"Image not loaded"}
      />)
      const images = screen.getByRole("img");
      const albumName = screen.getByText("albumName");
      const artistName = screen.getByText("artistName");

      expect(images).toBeInTheDocument();
      expect(images).toHaveAttribute("src", "https://media.giphy.com/media/1vYThCrZAsQU36nqkv/giphy.gif");
      expect(images).toHaveAttribute("alt", "Image not loaded");
      expect(albumName).toBeInTheDocument();
      expect(artistName).toBeInTheDocument();

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
})