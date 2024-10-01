"use client";
import React, { ChangeEvent, ReactNode, useEffect, useState } from "react";
import styles from "./styles.module.css";
import {
  setSidebarVisible,
  setSidebarHidden,
} from "../../../functions/jsResponsive/sidebars/handleResize";
import { DataType } from "../../../types/types";
import { getCookie } from "../../../functions/getCookie";
import FetchData from "../../../app/[docId]/page";
import QueueCard from "../../UI/queueCard/queueCard";
import Queue from "./queue/queue";
import Lyrics from "./lyrics/lyrics";

type Data = {
  data: DataType;
};

type arrayData = {
  url: string;
  name: string;
  artists: string;
  index: number;
};

const SideBar = ({ data }: { data: DataType }) => {
  const [url, setURL] = useState<string>("");
  // const [arrayData, setArrayData] = useState<DataType>(data.data);
  const [widget, setWidget] = useState<React.ReactNode>(
    <Queue data={data?.Queue} />
  );
  const arrayName = "Queue";

  // resize

  useEffect(() => {
    setWidget(<Queue data={data.Queue} />);
  }, [data]);

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

  //testing image urls
  //https://i.scdn.co/image/ab67616d0000b273a0a6306033ab5306e4b9cedf
  //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlT92Q7DYDpjotAfEjqBx36ea_WB8gpgW9w&s
  //https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725580800&semt=ais_hybrid

  //not good, change this later - too much info
  return (
    <>
      <div className={styles._}>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button onClick={() => setWidget(<Queue data={data?.Queue} />)}>
            Queue
          </button>
          <button onClick={() => setWidget(<Lyrics />)}>Lyrics</button>
        </div>
        <div className={styles.inner}>
          {/* <pre>{JSON.stringify(data.data, null, 4)}</pre> */}
          {/* <img
            crossOrigin="anonymous"
            id="img"
            src={data.data.url}
            alt="Image"
          /> */}
          <div>
            {/* <Queue data={data.Queue} /> */}
            {widget}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
