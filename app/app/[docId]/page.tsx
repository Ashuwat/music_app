"use client";
import React from "react";
import styles from "./styles.module.css";
import MainComp from "../../components/app/main/main";
import SettingsPage from "../../components/app/settings/settings";
import SideBar from "../../components/app/sidebar/sidebar";
import TaskBar from "../../components/app/taskbar/taskbar";
import { useEffect, useState } from "react";
import {
  hoverOver,
  sidebarHover,
} from "../../functions/jsResponsive/sidebars/hoverOver";
import { useRouter } from "next/navigation";
import { Data } from "../../types/fetchedData";

interface data {
  data: Data;
}

const FetchData = ({ params }: { params: { docId: string } }) => {
  const [data, setData] = useState<data>();
  const docId = params.docId;
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (docId) {
          const response = await fetch(`../../server/api/getData/${docId}`);
          const result = await response.json();
          if (result.status === 503) {
            router.push("/");
          } else {
            setData(result);
          }
        } else {
          return "no docId";
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [docId]);

  useEffect(() => {
    hoverOver();
    sidebarHover();
  }, []);

  if (typeof data === undefined) {
    return <>Loading...</>;
  }

  return (
    <>
      <main className={styles._}>
        <div id="sidebar" className={styles.sidebar}>
          <div id="sidebar_inside" className={styles.sidebar_inside}>
            <SideBar data={data} />
          </div>
        </div>
        <div id="main" className={styles.main}>
          <div id="main_inside" className={styles.main_inside}>
            <MainComp />
          </div>
        </div>
        <div id="settings" className={styles.settings}>
          <div id="settings_inner" className={styles.settings_inner}>
            <SettingsPage />
          </div>
        </div>
        <TaskBar />
      </main>
    </>
  );
};

export default FetchData;
