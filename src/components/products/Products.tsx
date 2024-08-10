import ProductItem from "./productItem/ProductItem";
import styles from "./Products.module.scss";
import Syltherinc from "../../assets/productsImages/Syltherinc.png";
import Leviosa from "../../assets/productsImages/Leviosa.png";
import Lolito from "../../assets/productsImages/Lolito.png";
import Respira from "../../assets/productsImages/Respira.png";
import Grifo from "../../assets/productsImages/Grifo.png";
import Muggo from "../../assets/productsImages/Muggo.png";
import Pingky from "../../assets/productsImages/Pingky.png";
import Potty from "../../assets/productsImages/Potty.png";

interface IProductItem {
  img: string;
  title: string;
  description: string;
  price: string;
  priceWithoutDiscount?: string;
  tag?: string;
}

const Products = () => {
  const products: IProductItem[] = [
    {
      img: Syltherinc,
      title: "Syltherinc",
      description: "Stylish cafe chair",
      price: "2.500.000",
      priceWithoutDiscount: "3.500.000",
      tag: "-30%",
    },
    {
      img: Leviosa,
      title: "Leviosa",
      description: "Stylish cafe chair",
      price: "2.500.000",
    },
    {
      img: Lolito,
      title: "Lolito",
      description: "Luxury big sofa",
      price: "7.000.000",
      priceWithoutDiscount: "14.000.000",
      tag: "-50%",
    },
    {
      img: Respira,
      title: "Respira",
      description: "Minimalist fan",
      price: "500.000",
      tag: "New",
    },
    {
      img: Grifo,
      title: "Grifo",
      description: "Night lamp",
      price: "1.500.000",
    },
    {
      img: Muggo,
      title: "Muggo",
      description: "Small mug",
      price: "150.000",
      tag: "New",
    },
    {
      img: Pingky,
      title: "Pingky",
      description: "Cute bed set",
      price: "7.000.000",
      priceWithoutDiscount: "14.000.000",
      tag: "-50%",
    },
    {
      img: Potty,
      title: "Potty",
      description: "Minimalist flower pot",
      price: "500.000",
      tag: "New",
    },
  ];

  return (
    <div className={styles.main}>
      <h1>Our Products</h1>
      <div className={styles.productsContainer}>
        {products.map((el) => {
          return (
            <ProductItem
              img={el.img}
              title={el.title}
              description={el.description}
              price={el.price}
              priceWithoutDiscount={el.priceWithoutDiscount}
              tag={el.tag}
              key={el.title}
            />
          );
        })}
      </div>

      <button>Show More</button>
    </div>
  );
};

export default Products;
