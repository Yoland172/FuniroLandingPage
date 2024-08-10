import GeoPointIcon from "../ui/icon/GeoPointIcon";
import HandsetIcon from "../ui/icon/HandsetIcon";
import PaperPlaneIcon from "../ui/icon/PaperPlaneIcon";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.main}>
      <div className={styles.divider}></div>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>Funiro.</h2>
          <p>
            Worldwide furniture store since 2020. We sell over 1000+ branded
            products on our website
          </p>
          <div className={styles.addInfoContainer}>
            <GeoPointIcon width={20} height={20} />
            <p>Sawojajar Malang, Indonesia</p>
          </div>
          <div className={styles.addInfoContainer}>
            <HandsetIcon width={20} height={20} />
            <p>+6289 456 3455</p>
          </div>
          <p>www.funiro.com</p>
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.menuSection}>
            <h2>Menu</h2>
            <p>Products</p>
            <p>Rooms</p>
            <p>Inspiration</p>
            <p>About Us</p>
            <p>Terms & Policy</p>
          </div>
          <div className={styles.accountSection}>
            <h2>Account</h2>
            <p>My Account</p>
            <p>Checkout</p>
            <p>My Cart</p>
            <p>My catalog</p>
          </div>
          <div className={styles.connectedSection}>
            <h2>Stay Connected</h2>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
        </div>
        <div className={styles.emailContainer}>
          <h2>Stay Updated</h2>
          <div className={styles.subscriptionContainer}>
            <input placeholder="Enter your email"/>
            <button><PaperPlaneIcon width={18} height={18}/></button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
