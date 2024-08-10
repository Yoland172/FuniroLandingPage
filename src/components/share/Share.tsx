import { useRef } from "react";
import styles from "./Share.module.scss";
import set1 from "../../assets/shareImages/set1.png";
import set2 from "../../assets/shareImages/set2.png";
import set3 from "../../assets/shareImages/set3.png";
import set4 from "../../assets/shareImages/set4.png";
import set5 from "../../assets/shareImages/set5.png";
import set6 from "../../assets/shareImages/set6.png";
import set7 from "../../assets/shareImages/set7.png";
import set8 from "../../assets/shareImages/set8.png";
import set9 from "../../assets/shareImages/set9.png";

const Share = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (mainRef.current) {
      const { left, width } = mainRef.current.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const scrollMaxX = mainRef.current.scrollWidth - width;
      const scrollPositionX = (mouseX / width) * scrollMaxX;
      mainRef.current.scrollLeft = scrollPositionX;
    }
  }

  return (
    <section className={styles.main}>
      <h3>Share your setup with</h3>
      <h1>#FuniroFurniture</h1>

      <div
        className={styles.imageCarouselContainer}
        onMouseMove={(e) => handleMouseMove(e)}
        ref={mainRef}
      >
        <div className={styles.combineContainer}>
          <div className={styles.topContainer}>
            <img src={set1} alt="" width={274} height={382} />
            <img src={set2} alt="" width={451} height={312} />
          </div>

          <div className={styles.downContainer}>
            <img src={set3} alt="" width={381} height={323} />
            <img src={set4} alt="" width={344} height={242} />
          </div>
        </div>
        <img src={set5} alt="" width={295} height={392} />
        <div className={styles.combineContainer}>
          <div className={styles.topContainer}>
            <img src={set6} alt="" width={290} height={348} />
            <img src={set7} alt="" width={425} height={433} />
          </div>
          <div className={styles.downContainer}>
            <img src={set8} alt="" width={178} height={242} />
            <img src={set9} alt="" width={258} height={196} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Share;
