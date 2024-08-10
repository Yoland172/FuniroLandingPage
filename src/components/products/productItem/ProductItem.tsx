import classNames from "classnames";
import testImage from "../../../assets/productsImages/Syltherinc.png";
import HeartIcon from "../../ui/icon/HeartIcon";
import ShareIcon from "../../ui/icon/ShareIcon";
import styles from "./ProductItem.module.scss";

interface ProdctItemProps {
  img: string;
  title: string;
  description: string;
  price: string;
  priceWithoutDiscount?: string;
  tag?: number | string;
}

const ProductItem = ({
  img,
  title,
  description,
  price,
  priceWithoutDiscount,
  tag,
}: ProdctItemProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.imageContainer}>
        <img src={img} alt={title} className={styles.image} />
      </div>
      <div className={styles.descriptionContainer}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.priceContainer}>
          <h3>Rp {price}</h3>
          {priceWithoutDiscount && <p>Rp {priceWithoutDiscount}</p>}
        </div>
      </div>
      <div className={styles.productActionContainer}>
        <button>
          <p>Add to cart</p>
        </button>
        <div className={styles.addActionContainer}>
          <button className={styles.actionItem}>
            <ShareIcon width={24} height={24} />
            <p>Share</p>
          </button>
          <button className={styles.actionItem}>
            <HeartIcon width={24} height={24} />
            <p>Like</p>
          </button>
        </div>
      </div>
      {
        tag &&
        <div className={classNames(styles.tagContainer, tag==="New" && styles.new)}>
        <h3>{tag}</h3>
      </div>
      }
      
    </div>
  );
};

export default ProductItem;
