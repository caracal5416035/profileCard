// src/App.jsx
import React from "react";
import ProfileCard from "./components/ProfileCard";
                                                                  
function App() {
  return (
    <div style={{ display: "flex", justifyContent:"center", padding: "50px" }}>
      <ProfileCard                
        avatarUrl="https://azkaberkembang.vercel.app/1762748045755.png"
        name="M. Azka Arrodhi"
        title="Beginner Frontend Dev"
        handle="azkaarrodhi"
        status="Online"
        contactText="Contact Me"
        onContactClick={() => {
  const section = document.querySelector("#contact");

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "https://azkaarrodhi.vercel.app/#contact";
  }
}}
     />
    </div>
  );
}

export default App;
 
