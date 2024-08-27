"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const SubmitForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    marketname: "",
    animatetype: "",
    fullname: "",
    contact1: "",
    contact2: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("./server/api/makeDoc", formData);
      setResponseMessage(response.data.id);
      document.cookie = `docId=${response.data.id}`;
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="marketname"
        value={formData.marketname}
        onChange={handleChange}
        placeholder="Market Name"
        required
      />
      <input
        type="text"
        name="animatetype"
        value={formData.animatetype}
        onChange={handleChange}
        placeholder="Animate Type"
        required
      />
      <button type="submit">Submit</button>
      {responseMessage}
    </form>
  );
};

export default SubmitForm;
