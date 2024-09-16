"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./styles.module.css";
import {
  setSidebarVisible,
  setSidebarHidden,
} from "../../../functions/jsResponsive/sidebars/handleResize";
import { DataType } from "../../../types/types";
import { getCookie } from "../../../functions/getCookie";
import FetchData from "../../../app/[docId]/page";
import { error } from "console";

type Data = {
  data: DataType;
};

const SideBar: React.FC<Data> = (data) => {
  const [url, setURL] = useState<string>("");
  // resize
  useEffect(() => {
    const handleResize = () => {
      if (!window.matchMedia("(max-width: 1200px)").matches) {
        setSidebarVisible();
      } else {
        setSidebarHidden();
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setURL(e.target.value);
  };

  const docId = sessionStorage.getItem("docId");
  const sendPostReq = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setURL("");
    try {
      const response = await fetch(`../../../api/postData/${docId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ docId, url }),
      });
      if (response) {
        const something = await response.json();
        console.log(response.status);
        sessionStorage.setItem("result", response.url);
      } else {
        return `INTERNAL ERROR`;
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  //https://i.scdn.co/image/ab67616d0000b273a0a6306033ab5306e4b9cedf
  //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlT92Q7DYDpjotAfEjqBx36ea_WB8gpgW9w&s
  //https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725580800&semt=ais_hybrid

  return (
    <>
      <div className={styles._}>
        <div className={styles.inner}>
          <pre>{JSON.stringify(data.data)}</pre>
          <img src={data.data.url} alt="Image" />
          <form onSubmit={sendPostReq}>
            <input
              id="url"
              onChange={onChange}
              value={url}
              placeholder="post url"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SideBar;
