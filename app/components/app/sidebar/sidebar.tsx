"use client";
import React, { useEffect } from "react";
import styles from "./styles.module.css";
import {
  setSidebarVisible,
  setSidebarHidden,
} from "../../../functions/jsResponsive/sidebars/handleResize";
import { Data } from "../../../types/fetchedData";

const SideBar: React.FC<Data> = ({ data }) => {
  // resize
  useEffect(() => {
    const handleResize = () => {
      if (!window.matchMedia("(max-width: 1200px)").matches) {
        setSidebarHidden();
      } else {
        setSidebarVisible();
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles._}>
        <div className={styles.inner}>
          <pre>{JSON.stringify(data)}</pre>
          <pre>{JSON.stringify(data.url)}</pre>
          <img src={data.url} />
        </div>
      </div>
    </>
  );
};

export default SideBar;
