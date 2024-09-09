"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const PostRoom = () => {
  const [data, setData] = useState<any>();
  const router = useRouter();
  const [formData, setFormData] = useState({
    url: "",
    animatetype: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("../../../api/makeDoc", formData);
      document.cookie = `docId=${response.data.id}`;
      router.push(`/app/${response.data.id}`);
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="url"
          required
        />
        <input
          type="text"
          id="animatetype"
          value={formData.animatetype}
          onChange={handleChange}
          placeholder="Animate Type"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div>{data?.groupCode}</div>
    </>
  );
};

export default PostRoom;
