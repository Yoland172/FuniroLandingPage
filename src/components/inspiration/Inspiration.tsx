import Slider from "react-slick";
import styles from "./Inspiration.module.scss";
import ins1 from "../../assets/inspiration/ins1.png";
import ins2 from "../../assets/inspiration/ins2.png";
import ins3 from "../../assets/inspiration/ins3.png";
import MinimalisticArrowIcon from "../ui/icon/MinimalisticArrowIcon";
import classNames from "classnames";
import LongArowIcon from "../ui/icon/LongArowIcon";
import { ArrowProps } from "../../types/Types";
import { ReactElement } from "react";
interface SettingProps {
  className: string;
  centerMode: boolean;
  infinite: boolean;
  centerPadding: string;
  slidesToShow: number;
  speed: number;
  dots: boolean;
  dotsClass: string;
  prevArrow?: ReactElement;
  nextArrow?: ReactElement;
}

interface ISliderItems {
  img: string;
  title: string;
  description: string;
}

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

const Inspiration = () => {
  const settings: SettingProps = {
    className: `${styles.slider}`,
    centerMode: false,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 2.2,
    speed: 500,
    dots: true,
    dotsClass: `${styles.button__bar}`,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  const sliderItems: ISliderItems[] = [
    {
      img: ins1,
      title: "Inner Peace",
      description: "01 — Bed Room",
    },
    {
      img: ins2,
      title: "Serenity",
      description: "02 — Living Room",
    },
    {
      img: ins3,
      title: "Calmness",
      description: "03 — Study Room",
    },
    {
      img: ins1,
      title: "Tranquility",
      description: "04 — Garden Room",
    },
    {
      img: ins2,
      title: "Harmony",
      description: "05 — Kitchen",
    },
    {
      img: ins1,
      title: "Quietude",
      description: "06 — Bathroom",
    },
  ];

  return (
    <section className={styles.main}>
      <div className={styles.titleContainer}>
        <h1>50+ Beautiful rooms inspiration</h1>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button>Explor More</button>
      </div>
      <div className={styles.sliderContainer} id="inspiration">
        <Slider {...settings}>
          {sliderItems.map((el) => {
            return (
              <div className={styles.imageContainer}>
                <div
                  className={styles.descriptionContainer}
                  id="inspirationContainer"
                >
                  <div className={styles.description}>
                    <h3>{el.description}</h3>
                    <h2>{el.title}</h2>
                  </div>
                  <button className={styles.link}>
                    <LongArowIcon width={20} height={14} />
                  </button>
                </div>
                <img src={el.img} alt="inspiration mock" />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Inspiration;
