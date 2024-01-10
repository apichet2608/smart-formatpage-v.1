import React, { useState } from "react";

const MyComponent = () => {
  const [cookieValue, setCookieValue] = useState("");

  const setCookie = () => {
    // ตัวอย่าง: การเขียน Cookie
    document.cookie = "myCookie=cookieValue; max-age=3600"; // max-age เป็นตัวเลือกที่กำหนดอายุของ Cookie (ในวินาที)
    setCookieValue("cookieValue");
  };

  const getCookie = () => {
    // ตัวอย่าง: การอ่าน Cookie
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name === "myCookie") {
        console.log("Cookie Value:", value);
        break;
      }
    }
  };

  return (
    <div>
      <p>Cookie Value: {cookieValue}</p>
      <button onClick={setCookie}>Set Cookie</button>
      <button onClick={getCookie}>Get Cookie</button>
    </div>
  );
};

export default MyComponent;
