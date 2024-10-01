import { useEffect, useRef, useState } from "react";
import dragula from "dragula";
import QueueCard from "../../../UI/queueCard/queueCard";
import { DataType } from "../../../../types/types";

type data = {
  url: string;
  name: string;
  index: number;
  artists: string;
}[];

const Queue = ({ data }: { data: data }) => {
  const cardLayout = useRef<HTMLDivElement>(null);
  const [arrayData, setArrayData] = useState<data | undefined>(data);
  const arrayName = "Queue";
  const docId = sessionStorage.getItem("docId");

  //send data whenever arrayData gets updated for drag and drop
  useEffect(() => {
    const sendPostReq = async () => {
      if (arrayData) {
        try {
          const postData = {
            Queue: arrayData,
          };
          const response = await fetch(`../../../api/postData/${docId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ docId, postData }),
          });
          if (response) {
            // console.log(response.status);
            const result = await response.json();
            console.log(result);
          } else {
            return `INTERNAL ERROR`;
          }
        } catch (error) {
          console.error("Error sending message:", error);
        }
      }
    };
    sendPostReq();
  }, [arrayData]);

  //dragula feature
  useEffect(() => {
    if (cardLayout.current && arrayData) {
      const drake = dragula([cardLayout.current]);

      drake.on("drop", () => {
        const container = cardLayout.current;
        if (container) {
          const items = Array.from(container.children).map((item, index) => {
            const num = parseInt(item.getAttribute("data-index") || "0", 10);
            const updatedItem = {
              ...arrayData[num],
              index,
            };
            return updatedItem;
          });
          console.log("items", items);
          setArrayData(items);
        }
      });

      return () => drake.destroy();
    }
  }, []);

  if (!data) {
    return (
      <>
        <div
          style={{ width: "100%", justifyContent: "center", display: "flex" }}
        >
          There is no Queue!
        </div>
      </>
    );
  }

  return (
    <>
      <div ref={cardLayout}>
        {data
          .slice()
          .sort((a, b) => a.index - b.index)
          .map((queue, i) => (
            <div data-index={i} key={i}>
              <QueueCard data={queue} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Queue;
