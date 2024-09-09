"use client";
import { doc, onSnapshot } from "firebase/firestore";
import React from "react";
import styles from "./styles.module.css";
import MainComp from "../../components/app/main/main";
import SettingsPage from "../../components/app/settings/settings";
import SideBar from "../../components/app/sidebar/sidebar";
import TaskBar from "../../components/app/taskbar/taskbar";
import { useEffect, useState } from "react";
import { sidebarHover } from "../../functions/jsResponsive/sidebars/hoverOver";
import { useRouter } from "next/navigation";
import { DataType } from "../../types/fetchedData";
import { db } from "../../firebaseConfig";

const FetchData = ({ params }: { params: { docId: string } }) => {
  const [Data, setData] = useState<DataType | undefined>();
  const [url, setUrl] = useState<string | null>("");
  const router = useRouter();
  const docId = params.docId;

  const fetchData = async () => {
    try {
      if (docId) {
        const response = await fetch(`../../../api/getData/${docId}`);
        if (response) {
          const result = await response.json();
          if (result.status === 503) {
            router.push("/");
          } else {
            setData(result);
          }
        }
      } else {
        return "no docId";
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // useEffect(() => {
  //   const something = () => {
  //     if (docId) {
  //       const docRef = doc(db, "Test", docId);
  //       const unsubscribe = onSnapshot(
  //         docRef,
  //         (docSnapshot) => {
  //           if (docSnapshot.exists()) {
  //             setData(docSnapshot.data());
  //           } else {
  //             console.log("No such document!");
  //             router.push("/");
  //           }
  //         },
  //         (error) => {
  //           console.error("Error fetching document:", error);
  //           router.push("/");
  //         }
  //       );
  //     }
  //   };
  //   something();
  // }, [docId, router]);

  useEffect(() => {
    fetchData();
    sidebarHover();
  }, [docId]);

  if (!Data) {
    return <>Loading document...</>;
  }

  return (
    <>
      <main className={styles._}>
        <div id="sidebar" className={styles.sidebar}>
          <div id="sidebar_inside" className={styles.sidebar_inside}>
            <SideBar Data={Data} />
          </div>
        </div>
        <div id="main" className={styles.main}>
          <div id="main_inside" className={styles.main_inside}>
            <MainComp />
          </div>
        </div>
        <div id="settings" className={styles.settings}>
          <div id="settings_inner" className={styles.settings_inner}>
            <SettingsPage Data={Data} />
          </div>
        </div>
        <TaskBar />
      </main>
    </>
  );
};

export default FetchData;
