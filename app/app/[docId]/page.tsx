"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Sidebar from "@/app/components/app/sidebar/sidebar";
import MainComp from "@/app/components/app/main/main";
import SettingsPage from "@/app/components/app/settings/settings";
import { useRouter } from "next/navigation";
import {
  setSidebarHidden,
  setSidebarVisible,
} from "@/app/functions/jsResponsive/sidebars/handleResize";
import TaskBar from "@/app/components/app/taskbar/taskbar";
import openCloseBar from "@/app/functions/keyboardHotkey";

const FetchData = ({ params }: { params: { docId: string } }) => {
  const router = useRouter();
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  //'true' = sidebar is open
  //'false' = sidebar is false

  const docId = params.docId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (docId) {
          const response = await fetch(`../../server/api/getData/${docId}`);
          console.log(response);
          if (!response.ok) {
            console.log("invalid docId");
          }
          const result = await response.json();
          setData(result);
        } else {
          return "no docId";
        }
      } catch (error) {
        setError("Failed to fetch data");
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [docId]);

  //resize
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 1200px)").matches) {
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

  const [isOpen, setIsOpen] = useState(false);

  const moveEntire = () => {
    // console.log("button clicked");
    setIsOpen((prev) => !prev);
  };

  openCloseBar((event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "v") {
      event.preventDefault();
      moveEntire();
    }
  });

  if (error) {
    return (
      <>
        <p>{error}</p>
      </>
    );
  }

  return (
    <>
      <main className={styles._}>
        <div id="sidebar" className={styles.sidebar}>
          <div id="sidebar_inside" className={styles.sidebar_inside}>
            <Sidebar />
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
        <div
          id="taskbar"
          className={`${styles.taskbar} ${isOpen ? styles.open : ""}`}
        >
          <TaskBar />
        </div>
      </main>
    </>
  );
};

export default FetchData;
