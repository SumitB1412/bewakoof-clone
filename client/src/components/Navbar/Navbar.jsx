import React from "react";
import styles from "./navbar.module.css";
import { CiMobile2 } from "react-icons/ci";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.upperNav}>
        <div>
          <p>Offers</p>
          <p>Fanbook</p>
          <div>
            <CiMobile2 className={styles.icon} />
            <p>Download App</p>
          </div>
          <p>TriBe Membership</p>
        </div>
        <div>
          <p>Contact Us</p>
          <p>Track Order</p>
        </div>
      </div>
    </nav>
  );
};
