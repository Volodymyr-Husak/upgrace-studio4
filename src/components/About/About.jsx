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
              Beauty studio «UPGRACE» — стильний, сучасний, модний та
              професійний заклад.
            </h2>
            {/* <p className="subtitle subtitle--mode-light about__subtitle"></p> */}
            <p style={{ marginBottom: "15px" }}>
              Простір, світло, яскраві відтінки, чудовий інтер’єр — усе це
              наповнює позитивними враженнями та дарує невимовне задоволення.
              Та, звісно ж, головна перевага «UPGRACE» — професіоналізм
              майстрів, що відмінно орієнтуються в модних трендах, обирають
              якісні косметичні засоби, ретельно стежать за стерильністю
              інструментів та турбуються про комфорт й вдоволення потреб кожного
              відвідувача. Без перебільшення, це неймовірний заклад, що завоював
              прихильність й довіру чималої кількості жителів та гостей міста.
            </p>
            <BtnReserveForm />
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default About;
