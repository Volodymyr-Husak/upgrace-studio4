import * as React from "react";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { useState, useEffect } from "react";
// import { useEffect } from 'react';
// import { LinkEl } from './OurWorksList.styled';
import OurWorksBtn from "../OurWorksBtn/OurWorksBtn";
// import Loader from 'components/Loader/Loader';

// import { cardsImages } from './dataImages';
import { designCards } from "./dataImages";
import { frenchCards } from "./dataImages";
import { monotonousCards } from "./dataImages";
import { winterCards } from "./dataImages";
import css from "./OurWorksList.module.css";
// import { blue } from '@mui/material/colors';

export default function OurWorksList() {
  const [cards, setCards] = useState(designCards);
  const [cols, setCols] = useState(3);
  const [selectedCards, setSelectedCards] = useState(1);
  // const [loading, setLoading] = useState(false);
  // const options = ['Французький-0', 'Дизайн-1', 'Монотонний-2', 'Новорічний-3'];
  const numberCols = (arr) => {
    if (arr.length < 7) {
      return 2;
    }
    return 3;
  };

  useEffect(() => {
    // setLoading(true);
    if (selectedCards === 0) {
      // setLoading(false);
      const number = numberCols(frenchCards);
      setCols(number);
      return setCards(frenchCards);
    }
    if (selectedCards === 1) {
      // setLoading(false);
      const number = numberCols(designCards);
      setCols(number);
      return setCards(designCards);
    }
    if (selectedCards === 2) {
      const number = numberCols(monotonousCards);
      setCols(number);
      return setCards(monotonousCards);
    }
    if (selectedCards === 3) {
      const number = numberCols(winterCards);
      setCols(number);
      return setCards(winterCards);
    }
  }, [selectedCards]);

  // setLoading(false);
  // if (!cards) {
  //   console.log(cards);
  //   return <Loader />;
  // }
  // console.log(cards);
  return (
    <>
      <div className={css.our_works__header}>
        <h2 className={css.our_works__header_title}>Наші роботи - </h2>
        <OurWorksBtn setSelectedCards={setSelectedCards} />
      </div>
      {/* {loading && <Loader />} */}
      <ImageList
        sx={{ width: "auto", height: "auto" }}
        cols={cols}
        rowHeight="auto"
      >
        {cards.map((card) => (
          <ImageListItem key={card.id}>
            <img src={card.path} alt={card.id} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
