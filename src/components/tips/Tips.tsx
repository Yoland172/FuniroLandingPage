import styles from "./Tips.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticleItem from "./ArticleItem/ArticleItem";
import MinimalisticArrowIcon from "../ui/icon/MinimalisticArrowIcon";
import tip1 from "../../assets/tips/tip1.png";
import tip2 from "../../assets/tips/tip2.png";
import tip3 from "../../assets/tips/tip3.png";
import classNames from "classnames";
import { ReactElement } from "react";
import { ArrowProps } from "../../types/Types";

const SamplePrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className={classNames(styles.arrow, styles.prevArrow)}
      onClick={onClick}
    >
      <MinimalisticArrowIcon width={20} height={20} />
    </div>
  );
};

const SampleNextArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className={classNames(styles.arrow, styles.nextArrow)}
      onClick={onClick}
    >
      <MinimalisticArrowIcon width={20} height={20} />
    </div>
  );
};

interface SettingsProps {
  className: string;
  centerMode: boolean;
  infinite: boolean;
  centerPadding: string;
  slidesToShow: number;
  speed: number;
  dots: boolean;
  dotsClass?: string;
  prevArrow?: ReactElement;
  nextArrow?: ReactElement;
}

const Tips = () => {
  const settings: SettingsProps = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    dotsClass: `${styles.button__bar}`,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <section className={styles.main}>
      <h1>Tips & Tricks</h1>
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          <ArticleItem
            img={tip1}
            title="How to create a living room to love"
            date="20 jan 2020"
          />
          <ArticleItem
            img={tip2}
            title="Solution for clean look working space"
            date="10 jan 2020"
          />
          <ArticleItem
            img={tip3}
            title="Make your cooking activity more fun with good setup"
            date="20 jan 2020"
          />
          <ArticleItem
            img={tip2}
            title="Solution for clean look working space"
            date="10 jan 2020"
          />
        </Slider>
      </div>
    </section>
  );
};

export default Tips;
