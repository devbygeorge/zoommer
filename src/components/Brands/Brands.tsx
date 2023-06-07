"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import Banner from "@/components/Banner";
import { shuffleBanners } from "@/utils/bannerUtils";

import styles from "./Brands.module.scss";
import data from "../../../db.json";
import { IBrand } from "../../../typings";

export default function Brands() {
  const [activeMenuItem, setActiveMenuItem] = useState<null | string>(null);
  const [banners, setBanners] = useState([...data.banners]);

  const handleMenuItemClick = (menuItemId: null | string) => {
    if (menuItemId !== activeMenuItem) {
      setActiveMenuItem(menuItemId);
      setBanners(shuffleBanners(banners));
    }
  };

  return (
    <section>
      <div className={styles.menu}>
        <div className="container">
          <ul className={styles.menuList}>
            <li
              className={styles.menuItem}
              data-active={!activeMenuItem && "true"}
              onClick={() => handleMenuItemClick(null)}
            >
              home
            </li>
            {data.brands.map((brand: IBrand) => (
              <li
                className={styles.menuItem}
                data-active={activeMenuItem === brand.id && "true"}
                onClick={() => handleMenuItemClick(brand.id)}
                key={brand.id}
              >
                {brand.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container">
        <motion.div layout className={styles.banners}>
          <AnimatePresence>
            {banners.map((banner) => (
              <Banner key={banner.id} banner={banner} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
