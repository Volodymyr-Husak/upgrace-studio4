import css from './Footer.module.css';
import { Icon } from 'semantic-ui-react';

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

/* <footer className={css.footer}>
  <div className={css.container}>
    <div className="footer-container">
      <div className={css.footer_container__tablet}>
        <div className="footer-container-address">
          <a href="./index.html" className="logo logo--center">
            Web<span className="logo--white">Studio</span>
          </a>
          <ul className={css.footer_list_address}>
            <li className="item">
              <address className="footer-address">
                г. Киев, пр-т Леси Украинки, 26
              </address>
            </li>
            <li className="item">
              <a
                className="link link-contact-footer"
                href="mailto:info@devstudio.com"
              >
                info@devstudio.com
              </a>
            </li>
            <li className="item">
              <a className="link link-contact-footer" href="tel:+380961111111">
                +38 096 111 11 11
              </a>
            </li>
          </ul>
        </div>
        <div className="social-networks-footer">
          <h2 className="footer-title">присоединяйтесь</h2>
          <ul className="list list-footer-icons">
            <li className="item item-footer-icons">
              <a className="link-footer-icons" href="">
                <svg width="20" height="20">
                  <use href="./images/icon/sprite.svg#instagram"></use>
                </svg>
              </a>
            </li>
            <li className="item item-footer-icons">
              <a className="link-footer-icons" href="">
                <svg width="20" height="20">
                  <use href="./images/icon/sprite.svg#twitter"></use>
                </svg>
              </a>
            </li>
            <li className="item item-footer-icons">
              <a className="link-footer-icons" href="">
                <svg width="20" height="20">
                  <use href="./images/icon/sprite.svg#facebook"></use>
                </svg>
              </a>
            </li>
            <li className="item item-footer-icons">
              <a className="link-footer-icons" href="">
                <svg width="20" height="20">
                  <use href="./images/icon/sprite.svg#linkedin"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>; */
