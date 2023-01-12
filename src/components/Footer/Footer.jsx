import css from "./Footer.module.css";
import { Icon } from "semantic-ui-react";

function Footer() {
  return (
    <footer className={css.footer}>
      <a href="/upgrace-studio/" className={css.footer_logo}>
        Upgrace<span className="">Studio</span>
      </a>
      <ul className={css.footer_list_address}>
        <li className={css.footer_list_address__item}>
          <address className="footer-address">м. Тернопіль</address>
        </li>
        <li className={css.footer_list_address__item}>
          <a href="https://www.instagram.com/upgrace_studio_/?igshid=YmMyMTA2M2Y%3D">
            <Icon name="instagram" size="big" link color="black" />
          </a>
        </li>
        <li className={css.footer_list_address__item}>
          <a href="tel:+380972137860">
            <Icon name="phone" size="big" link color="black" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
