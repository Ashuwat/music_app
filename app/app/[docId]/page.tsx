"use client";
import React, { use } from "react";
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
import { FastAverageColor } from "fast-average-color";
import YouTubePlayer from "../../functions/youtube/youtubeIframe";
import getColor from "../../functions/getColor";

const App = ({ params }: { params: { docId: string } }) => {
  const [Data, setData] = useState<DataType>();
  const [url, setUrl] = useState<string | null>("");
  const [rgb, setRgb] = useState<[number, number, number, number]>([
    50, 50, 50, 20,
  ]);
  const router = useRouter();
  const docId = params.docId;
  useEffect(() => {
    sessionStorage.setItem("docId", docId);
  }, [useRouter()]);

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
    const docRef = doc(db, "Test", docId);
    const unsubscribe = onSnapshot(
      docRef,
      (doc) => {
        const fetchedData = doc.data();
        if (fetchedData) {
          setData(fetchedData as DataType);
          console.log(fetchedData);
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
    // something();
    sidebarHover();
    // focusOnSearch();
    // clickOffSearch();
  }, [docId]);

  //avg color of img
  useEffect(() => {
    if (Data) {
      const getRGB = async () => {
        try {
          const rgb = await getColor(Data.current.url);
          setRgb(rgb);
          console.log("this worked");
        } catch {
          console.log("no data"); 
        }
      };

      getRGB();
    }
  }, [Data?.current.url]);

  if (!Data) {
    return <>Data has not loaded in yet</>;
  }

  return (
    <>
      <YouTubePlayer videoId={Data?.current?.videoId} />
      <div id="overlay" className={styles.overlay}></div>
      <main className={styles._}>
        <div
          id="sidebar"
          style={{
            background: `linear-gradient(rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}),  rgb(5, 5, 5)`,
          }}
          className={styles.sidebar}
        >
          <div id="sidebar_inside" className={styles.sidebar_inside}>
            <SideBar data={Data} />
          </div>
        </div>
        <div
          id="main"
          style={{
            background: `linear-gradient(rgb(35,35,35), rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.2), rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
          }}
          className={styles.main}
        >
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
