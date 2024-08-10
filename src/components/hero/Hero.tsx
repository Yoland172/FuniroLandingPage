import Slider from "react-slick";
import styles from "./Hero.module.scss";
import classNames from "classnames";
import MinimalisticArrowIcon from "../ui/icon/MinimalisticArrowIcon";
import image1 from "../../assets/hero/image1.png";
import image2 from "../../assets/hero/image2.png";
import image3 from "../../assets/hero/image3.png";
import { ArrowProps } from "../../types/Types";
import { ReactElement } from "react";

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

interface SettingProps {
  className: string;
  centerMode: boolean;
  infinite: boolean;
  centerPadding: string;
  slidesToShow: number;
  speed: number;
  dots?: boolean;
  dotsClass?: string;
  prevArrow?: ReactElement;
  nextArrow?: ReactElement;
}

const Hero = () => {
  const settings: SettingProps = {
    className: `${styles.slider}`,
    centerMode: false,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 1.5,
    speed: 500,
    dots: true,
    dotsClass: `${styles.button__bar}`,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div className={styles.main}>
      <div className={styles.heroContainer}>
        <h1>High-Quality Furniture Just For You</h1>
        <p>
          Our furniture is made from selected and best quality materials that
          are suitable for your dream home
        </p>

        <button>Shop Now</button>
      </div>
      <div className={styles.sliderContainer} id="heroSlider">
        <Slider {...settings}>
          <div className={styles.imageContainer}>
            <img src={image3} alt="" />
          </div>
          <div className={styles.imageContainer}>
            <img src={image2} alt="" />
          </div>
          <div className={styles.imageContainer}>
            <img src={image1} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
