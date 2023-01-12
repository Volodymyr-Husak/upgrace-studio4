import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// import { useState, useEffect } from 'react';
// import { useEffect } from 'react';
// import { LinkEl } from './OurWorksList.styled';
// import OurWorksBtn from 'components/OurWorksBtn/OurWorksBtn';

// import { cardsImages } from './dataImages';
import { price } from './dataImages';
// import { frenchCards } from './dataImages';
// import { monotonousCards } from './dataImages';
// import { winterCards } from './dataImages';
// import css from './OurWorksList.module.css';
// import { blue } from '@mui/material/colors';

export default function PriceList() {
  // const [cards, setCards] = useState(designCards);
  // const [selectedCards, setSelectedCards] = useState(1);
  // const options = ['Французький-0', 'Дизайн-1', 'Монотонний-2', 'Новорічний-3'];

  // useEffect(() => {
  //   if (selectedCards === 0) {
  //     return setCards(frenchCards);
  //   }
  //   if (selectedCards === 1) {
  //     return setCards(designCards);
  //   }
  //   if (selectedCards === 2) {
  //     return setCards(monotonousCards);
  //   }
  //   if (selectedCards === 3) {
  //     return setCards(winterCards);
  //   }
  // }, [selectedCards]);

  return (
    <>
      {/* <div className={css.our_works__header}>
        <h2 className={css.our_works__header_title}>Наші роботи - </h2>
        <OurWorksBtn setSelectedCards={setSelectedCards} />
      </div> */}

      <ImageList
        sx={{ width: 'auto', height: 'auto' }}
        cols={1}
        rowHeight="auto"
      >
        {price.map(card => (
          <ImageListItem key={card.id}>
            <img src={card.path} alt={card.id} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
