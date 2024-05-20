"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const AdDisplay = () => {
  const [adData, setAdData] = useState({
    link: "",
    alt: "",
    href: "",
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://ad.simaneka.com/api/get",
          {
            type: "Light Square",
            tags: "cars,car rental",
          },
          {
            headers: {
              authorization: "KhYRCFz9Q8OGx0QSGXZeUFVKvCUDvWSv",
            },
          }
        );
        console.log(response.data);

        setAdData(response.data);
      } catch (error) {
        console.error("Error fetching ad data:", error);
      }
    };

    fetchData();
  }, []);

  const { link, alt, href, message } = adData;

  return (
    <div className="ad-container flex flex-col items-center justify-center gap-y-2.5 text-black xl:flex-row h-64 w-72 mx-auto">
      <h2 className="headerText">{message || "Loading advertisement..."}</h2>
      <a
        className="anchorElement"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="advertIMG"
          src={link || "https://via.placeholder.com/250"}
          alt={alt || "Placeholder Alt Text"}
        />
      </a>
    </div>
  );
};

export default AdDisplay;
