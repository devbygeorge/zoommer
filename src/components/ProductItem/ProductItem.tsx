"use client";

import { ArrowSwapHorizontal, ShoppingCart } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

import { useProducts } from "@/hooks/useProducts";

import styles from "./ProductItem.module.scss";
import { IProduct } from "../../../typings";

type Props = {
  product: IProduct;
};

export default function ProductItem({ product }: Props) {
  const { imageSrc, title, price, credit } = product;

  const { handleAddProduct } = useProducts();

  return (
    <div className={styles.productItem}>
      <Link href="#" className={styles.thumbnail}>
        <Image
          className={styles.thumbnailImage}
          src={imageSrc}
          alt={title}
          quality={100}
          fill
        />
      </Link>
      <span className={styles.price}>{price} ₾</span>
      <p className={styles.credit}>
        თვეში. <span>{credit} ₾</span> -დან
      </p>
      <h4 className={styles.title}>
        <Link className={styles.titleLink} href="#">
          {title}
        </Link>
      </h4>
      <div className={styles.buttonsWrapper}>
        <button
          className={`${styles.button} ${styles.compareButton}`}
          aria-label="Comparison Button"
        >
          <ArrowSwapHorizontal size={14} color="#000000" />
        </button>
        <button
          className={`${styles.button} ${styles.addButton}`}
          onClick={handleAddProduct}
        >
          <ShoppingCart size={14} color="#000000" />
          დამატება
        </button>
      </div>
    </div>
  );
}
