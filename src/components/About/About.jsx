import { BtnReserveForm } from "../BtnReserveForm/BtnReserveForm";

import css from "./About.module.css";

import about1 from "../../images/about/about1.jpg";
import about2 from "../../images/about/about2.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    beige: {
      main: "RGB(143, 110, 106)",
    },
    blackBeige: {
      main: "rgb(53, 28, 25)",
    },
  },
});

function About() {
  return (
    <ThemeProvider theme={theme}>
      <section className="section" id="about">
        <div className={css.about__container}>
          <ul className={css.about_list}>
            <li className={css.about_list__item}>
              <img
                className={css.about_list__img}
                src={about1}
                alt="Affggg"
                width="270"
                height="445"
              />
            </li>
            <li className={css.about_list__item}>
              <img
                className={css.about_list__img}
                src={about2}
                alt="Fgghhjkkll"
                width="270"
                height="445"
              />
            </li>
          </ul>
          <div className={css.about__group} data-aos="fade-left">
            <p className="uppertitle uppertitle--mode-light">ПРО НАС</p>
            <h2 className="section-title section-title--mode-light">
              Лучший Барбершоп твоего города
            </h2>
            <p className="subtitle subtitle--mode-light about__subtitle">
              Если ты хочешь добавить в свой образ больше уверенности – тебе
              точно к нам.
            </p>
            <p style={{ marginBottom: "15px" }}>
              Мы команда, которая никогда не останавливается на достигнутом и
              жаждет перемен. И когда ты попадешь в руки нашего мастера, то уже
              никогда не сможешь быть прежним. Мы команда, которая всегда с
              клиентами "на одной волне". Поэтому, мы всегда готовы
              усовершенствовать каждого, кто к нам приходит!
            </p>
            <BtnReserveForm />
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default About;
