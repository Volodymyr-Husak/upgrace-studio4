import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { price } from "./dataImages";

export default function PriceList() {
  return (
    <>
      <ImageList
        sx={{ width: "auto", height: "auto" }}
        cols={1}
        rowHeight="auto"
      >
        {price.map((card) => (
          <ImageListItem key={card.id}>
            <img src={card.path} alt={card.id} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
