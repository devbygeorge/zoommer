import { motion } from "framer-motion";
import Image from "next/image";

import styles from "./Banner.module.scss";
import { IBanner } from "../../../typings";

type Props = {
  banner: IBanner;
};

export default function Banner({ banner }: Props) {
  const { src, alt, size } = banner;

  return (
    <motion.div
      className={styles.banner}
      data-size={size}
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Image
        className={styles.bannerImage}
        src={src}
        alt={alt}
        quality={100}
        fill
      />
    </motion.div>
  );
}
