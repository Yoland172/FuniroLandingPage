import Feature from "../feature/Feature";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Inspiration from "../inspiration/Inspiration";
import Products from "../products/Products";
import Share from "../share/Share";
import Tips from "../Tips/Tips";
import TopNavBar from "../topNavBar/TopNavBar";
import styles from "./App.module.scss";
const App = () => {
  return (
    <>
      <div className={styles.welcomeElementContainer}>
        <div className={styles.backgroundContainer}>
          <div className={styles.leftPart}></div>
          <div className={styles.rightPart}></div>
        </div>
        <TopNavBar />
        <Hero/>
      </div>
      <Feature />
      <Products />
      <Inspiration/>
      <Tips />
      <Share />
      <Footer />
    </>
  );
};

export default App;
