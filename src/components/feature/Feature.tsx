import BoxIcon from "../ui/icon/BoxIcon";
import SuccesIcon from "../ui/icon/SuccesIcon";
import SupportIcon from "../ui/icon/SupportIcon";
import WinnerCupIcon from "../ui/icon/WinnerCupIcon";
import styles from "./Feature.module.scss";

const Feature = () => {
  return (
    <div className={styles.main}>
      <div className={styles.articleContianer}>
        <WinnerCupIcon width={40} height={40} />
        <div className={styles.textContainer}>
          <h3>High Quality</h3>
          <p>crafted from top materials</p>
        </div>
      </div>
      <div className={styles.articleContianer}>
        <SuccesIcon width={40} height={40} />
        <div className={styles.textContainer}>
          <h3>Warrany Protection</h3>
          <p>over 2 years</p>
        </div>
      </div>
      <div className={styles.articleContianer}>
        <BoxIcon width={40} height={40} />
        <div className={styles.textContainer}>
          <h3>Free Shipping</h3>
          <p>Order over 150 $</p>
        </div>
      </div>
      <div className={styles.articleContianer}>
        <SupportIcon width={40} height={40} />
        <div className={styles.textContainer}>
          <h3>24 / 7 Support</h3>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
