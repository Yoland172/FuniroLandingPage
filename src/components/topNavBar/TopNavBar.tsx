import ArrowDownIcon from "../ui/icon/ArrowDownIcon";
import CartsIcon from "../ui/icon/CartsIcon";
import HeartIcon from "../ui/icon/HeartIcon";
import SearchIcon from "../ui/icon/SearchIcon";
import avatarImage from "../../assets/topNavBarImages/image.png";
import styles from "./TopNavBar.module.scss";

const TopNavBar = () => {
  return (
    <header className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.logo}>Funiro.</h1>
        <div className={styles.munuContainer}>
          <button className={styles.navItemList}>
            <p>Products</p>
            <ArrowDownIcon width={20} height={20} />
          </button>
          <button className={styles.navItemList}>
            <p>Rooms</p>
            <ArrowDownIcon width={20} height={20} />
          </button>
          <button className={styles.navItemLink}>
            <p>Inspirations</p>
          </button>
        </div>
        <div className={styles.searchContainer}> 
          <button><SearchIcon width={20} height={20}/></button>
          <input placeholder="Search for minimalistic chair"/>
        </div>
        <div className={styles.profileContainer}>
          <HeartIcon width={20} height={20}/>
          <CartsIcon width={20} height={20}/>
          <img src={avatarImage} alt="your avatar" />
        </div>
      </div>
    </header>
  );
};

export default TopNavBar;
