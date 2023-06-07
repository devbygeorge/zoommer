"use client";

import { useEffect, useRef, useState } from "react";

import {
  HambergerMenu,
  ProfileCircle,
  SearchNormal1,
  ShoppingCart,
} from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

import { useProducts } from "@/hooks/useProducts";
import { isPageScrolledDown } from "@/utils/scrollUtils";

import styles from "./Header.module.scss";

export default function Header() {
  const [isHeaderTriggered, setIsHeaderTriggered] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const headerTriggerTimeoutIdRef = useRef<any>(null);
  const { productsQuantity } = useProducts();

  useEffect(() => {
    const handleScroll = () => {
      if (isPageScrolledDown()) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isPageScrolledDown()) {
      if (headerTriggerTimeoutIdRef.current) {
        // Clear previous timeout
        clearTimeout(headerTriggerTimeoutIdRef.current);
      }

      setIsHeaderTriggered(true);
      const newTimeoutId = setTimeout(() => {
        setIsHeaderTriggered(false);
      }, 2000);

      // Update the ref with the new timeout ID
      headerTriggerTimeoutIdRef.current = newTimeoutId;

      // Cleanup function to clear the timeout if the component unmounts
      return () => {
        if (headerTriggerTimeoutIdRef.current) {
          clearTimeout(headerTriggerTimeoutIdRef.current);
        }
      };
    }
  }, [productsQuantity]);

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className="container">
          <div className={styles.hotLine}>
            <Image
              src="/icons/phone-secondary.svg"
              alt="Phone Icon"
              width={20}
              height={20}
              quality={100}
              priority
            />
            *7007 / +995 (32) 2 60 30 60
          </div>

          <nav className={styles.secondaryNav}>
            <ul className={styles.secondaryNavList}>
              <li>
                <Link className={styles.secondaryNavLink} href="#">
                  ონლაინ განვადება
                </Link>
              </li>
              <li>
                <Link className={styles.secondaryNavLink} href="#">
                  ფილიალები
                </Link>
              </li>
              <li>
                <Link className={styles.secondaryNavLink} href="#">
                  ყველა აქცია
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={styles.headerBottom}
        data-hidden={isHeaderHidden && "true"}
        data-triggered={isHeaderTriggered && "true"}
      >
        <div className="container">
          <div className={styles.headerBottomLeft}>
            <button
              className={styles.mobileButton}
              aria-label="Hamburger menu for mobile"
            >
              <HambergerMenu size="24" color="#000000" />
            </button>

            <Link href="/" className={styles.logo}>
              <Image
                className={styles.logoImage}
                src="/images/logo.png"
                alt="Zoommer"
                quality={100}
                priority
                fill
              />
            </Link>
          </div>

          <div className={styles.headerBottomRight}>
            <button className={`${styles.button} ${styles.primaryButton}`}>
              <div className={styles.tiles}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <div key={item} className={styles.tile}></div>
                ))}
              </div>
              ნავიგაცია
            </button>

            <div className={styles.search}>
              <input
                className={styles.searchInput}
                type="text"
                placeholder="ძიება"
              />
              <SearchNormal1
                className={styles.searchIcon}
                size="20"
                color="#ec5e2a"
              />
            </div>

            <button className={`${styles.button} ${styles.secondaryButton}`}>
              <ShoppingCart size="20" color="#000000" />
              {productsQuantity > 0 && (
                <div className={styles.productsQuantity}>
                  {productsQuantity}
                </div>
              )}
              კალათა
            </button>

            <button className={`${styles.button} ${styles.secondaryButton}`}>
              <ProfileCircle size="20" color="#000000" />
              პროფილი
            </button>

            <button
              className={styles.mobileButton}
              aria-label="Search icon for mobile"
            >
              <SearchNormal1 size="24" color="#000000" />
            </button>
            <button
              className={styles.mobileButton}
              aria-label="Shopping cart for mobile"
              style={{ position: "relative" }}
            >
              <ShoppingCart size="24" color="#000000" />
              {productsQuantity > 0 && (
                <div className={styles.productsQuantity}>
                  {productsQuantity}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
