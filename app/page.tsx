"use client";

import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  function getCookie(cname: string) {
    let name = cname + "=";
    let decodedValue = decodeURIComponent(document.cookie);
    let ca = decodedValue.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(cname) == 0) return c.substring(name.length, c.length);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docId = getCookie("docId");
        const response = await fetch(`./server/api/getData/${docId}`);
        if (!response.ok) {
          throw new Error("not 200");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError("Failed to fetch data");
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <>
        <p>{error}</p>
      </>
    );
  }

  return (
    <div>
      <h1>Data from Firestore</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default FetchData;
