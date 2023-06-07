import styles from "./Products.module.scss";
import data from "../../../db.json";
import ProductItem from "../ProductItem";

export default function Products() {
  return (
    <section className={styles.products}>
      <div className="container">
        <div className={styles.productsGrid}>
          {data.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
