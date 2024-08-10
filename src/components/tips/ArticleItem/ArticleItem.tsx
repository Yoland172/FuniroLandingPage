import styles from "./ArticleItem.module.scss";

interface ArticleItemProps {
  img: string;
  title: string;
  date: string;
}

const ArticleItem = ({ img, title, date }: ArticleItemProps) => {
  return (
    <div className={styles.main}>
      <img src={img} alt="" />
      <div className={styles.description}>
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default ArticleItem;
