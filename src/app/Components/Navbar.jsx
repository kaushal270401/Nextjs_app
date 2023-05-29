import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
    <div className={styles.container}>
        <h1>Logo</h1>
        <nav className={styles.nav}>
          <ul className={styles.listgroup}>
            <li className={styles.list}>Menu</li>
          </ul>
        </nav>
      </div>
    </>
    );
  };
  
  export default Navbar;
  
  {/* <div className={styles.container} */}