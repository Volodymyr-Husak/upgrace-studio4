import css from "./Hero.module.css";

import { BtnReserveForm } from "../BtnReserveForm/BtnReserveForm";

function Hero() {
  return (
    <section className={css.hero}>
      {/* <section className={css.navContainer}> */}
      <div className={css.hero__container}>
        {/* <p className="uppertitle uppertitle--mode-dark" lang="en">
            A hair salon for men in Kyiv
          </p> */}
        <h1 className={css.hero__title}>
          Студія манікюру, <br />у яку завжди повертаються
        </h1>
        <BtnReserveForm />
      </div>
    </section>
  );
}

export default Hero;
