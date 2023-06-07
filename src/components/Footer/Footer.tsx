import { ArrowDown2 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className="container">
          <nav className={styles.nav}>
            <div className={styles.navColumn}>
              <h5 className={styles.navColumnTitle}>ნავიგაცია</h5>
              <ul className={styles.navList}>
                <li className={styles.navListItem}>
                  <Link className={styles.navListLink} href="#">
                    ჩვენს შესახებ
                  </Link>
                </li>
                <li className={styles.navListItem}>
                  <Link className={styles.navListLink} href="#">
                    Tik Tok გამოწვევა
                  </Link>
                </li>
                <li className={styles.navListItem}>
                  <Link className={styles.navListLink} href="#">
                    ვაკანსია
                  </Link>
                </li>
                <li className={styles.navListItem}>
                  <Link className={styles.navListLink} href="#">
                    გარანტია
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.navColumn}>
              <h5 className={styles.navColumnTitle}>გადახდები</h5>
              <ul className={styles.navList}>
                <li className={styles.navListItem}>
                  <Link className={styles.navListLink} href="#">
                    გადახდის მეთოდები
                  </Link>
                </li>
                <li className={styles.navListItem}>
                  <Link className={styles.navListLink} href="#">
                    განვადება
                  </Link>
                </li>
                <li className={styles.navListItem}>
                  <Link className={styles.navListLink} href="#">
                    ნივთის დაბრუნება
                  </Link>
                </li>
                <li className={styles.navListItem}>
                  <Link className={styles.navListLink} href="#">
                    Conditions of Use
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.navColumn}>
              <h5 className={styles.navColumnTitle}>გამოგვყევი</h5>
              <ul className={styles.navList}>
                <li className={styles.navListItem}>
                  <Link className={styles.navListLink} href="#">
                    <Image
                      src="icons/facebook.svg"
                      alt="Facebook Icon"
                      width={20}
                      height={20}
                      quality={100}
                    />
                    Facebook
                  </Link>
                </li>
                <li className={styles.navListItem}>
                  <Link className={styles.navListLink} href="#">
                    <Image
                      src="icons/youtube.svg"
                      alt="Youtube Icon"
                      width={20}
                      height={20}
                      quality={100}
                    />
                    Youtube
                  </Link>
                </li>
                <li className={styles.navListItem}>
                  <Link className={styles.navListLink} href="#">
                    <Image
                      src="icons/instagram.svg"
                      alt="Instagram Icon"
                      width={20}
                      height={20}
                      quality={100}
                    />
                    Instagram
                  </Link>
                </li>
                <li className={styles.navListItem}>
                  <Link className={styles.navListLink} href="#">
                    <Image
                      src="icons/tiktok.svg"
                      alt="Tik Tok Icon"
                      width={20}
                      height={20}
                      quality={100}
                    />
                    Tik Tok
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.navColumn}>
              <h5 className={styles.navColumnTitle}>კონტაქტი</h5>
              <ul className={styles.navList}>
                <li className={styles.navListItem}>
                  <Link className={styles.navListLink} href="#">
                    <Image
                      src="icons/mail.svg"
                      alt="Mail Icon"
                      width={20}
                      height={20}
                      quality={100}
                    />
                    Info@zoommer.ge
                  </Link>
                </li>
                <li className={styles.navListItem}>
                  <Link className={styles.navListLink} href="#">
                    <Image
                      src="icons/phone.svg"
                      alt="Phone Icon"
                      width={20}
                      height={20}
                      quality={100}
                    />
                    +995 (32) 2 60 30 60
                  </Link>
                </li>
                <li className={styles.navListItem}>
                  <Link className={styles.navListLink} href="#">
                    <Image
                      src="icons/location.svg"
                      alt="Location Icon"
                      width={20}
                      height={20}
                      quality={100}
                    />
                    ფილიალები
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <p className={styles.copyright}>
            Copyright © 2022 Zoommer.ge. All rights reserved.
          </p>
          <div className={styles.languageDropdown}>
            <button className={styles.languageDropdownButton}>
              <Image
                className={styles.languageDropdownImage}
                src="/images/flag-geo.svg"
                alt="Georgian Flag"
                width={30}
                height={20}
                quality={100}
              />
              <span>ქა</span>
              <ArrowDown2 size={14} color="#000000" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
