"use client";
import React from "react";
import styles from "./styles.module.css";
import MainComp from "../../components/app/main/main";
import SettingsPage from "../../components/app/settings/settings";
import SideBar from "../../components/app/sidebar/sidebar";
import TaskBar from "../../components/app/taskbar/taskbar";
import { useEffect, useState } from "react";
import { sidebarHover } from "../../functions/jsResponsive/sidebars/hoverOver";
import { useRouter } from "next/navigation";
import { DataType } from "../../types/types";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import {
  clickOffSearch,
  focusOnSearch,
  something,
} from "../../functions/jsResponsive/search/searchResult";

const App = ({ params }: { params: { docId: string } }) => {
  const [Data, setData] = useState<DataType | undefined>();
  const [url, setUrl] = useState<string | null>("");
  const router = useRouter();
  const docId = params.docId;

  // myCode

  // useEffect(() => {
  //   try {
  //     const unsub = onSnapshot(doc(db, "Test", docId), (doc) => {
  //       console.log("Current Data:", doc.data());
  //       const fetchedData = doc.data();
  //       console.log(typeof doc.data());
  //       setData(fetchedData);
  //     });
  //   } catch (error) {
  //     console.error("ERROR: ", error);
  //   }
  // }, [docId]);

  //Realtime Updates - works

  useEffect(() => {
    if (!docId) return;
    if (docId) {
      sessionStorage.setItem("docId", docId);
    }
    const docRef = doc(db, "Test", docId);
    const unsubscribe = onSnapshot(
      docRef,
      (doc) => {
        const fetchedData = doc.data();
        if (fetchedData) {
          setData(fetchedData as DataType);
        } else {
          console.error("No data");
          router.push("/app/not-found");
        }
      },
      (error) => {
        console.error("Error:", error);
        router.push("/");
      }
    );

    return () => unsubscribe();
  }, [docId, router]);

  //POST REQUEST (if needed)
  // const fetchData = async () => {
  //   try {
  //     if (docId) {
  //       const response = await fetch(`../../../api/getData/${docId}`);
  //       if (response) {
  //         const result = await response.json();
  //         if (result.status === 503) {
  //           router.push("/");
  //         } else {
  //           setData(result);
  //         }
  //       }
  //     } else {
  //       return "no docId";
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  //all js/css things get called here
  useEffect(() => {
    // fetchData();
    sidebarHover();
    something();
    focusOnSearch();
    clickOffSearch();
  }, [docId]);

  if (!Data) {
    return <>Data has not loaded in yet</>;
  }

  return (
    <>
      <main className={styles._}>
        <div id="sidebar" className={styles.sidebar}>
          <div
            style={{ backgroundImage: `url(${Data.url})` }}
            className={styles.justBackground}
          />
          <div id="sidebar_inside" className={styles.sidebar_inside}>
            <SideBar data={Data} />
          </div>
        </div>
        <div id="main" className={styles.main}>
          <div id="main_inside" className={styles.main_inside}>
            <MainComp data={Data} />
          </div>
        </div>
        <div id="settings" className={styles.settings}>
          <div id="settings_inner" className={styles.settings_inner}>
            <SettingsPage data={Data} />
          </div>
        </div>
        <TaskBar />
      </main>
    </>
  );
};

export default App;
