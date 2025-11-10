// src/App.jsx
import React from "react";
import ProfileCard from "./components/ProfileCard";
                                                                  
function App() {
  return (
    <div style={{ display: "flex", justifyContent:"center", padding: "50px" }}>
      <ProfileCard                
        avatarUrl="https://azkaarrodhi.vercel.app/1762677376576.1723889691826.jpg"
        name="AZKA ARRODHI"
        title="Beginner Developer"
        handle="azkaarrodhi"
        status="Online"
        contactText="Contact Me"
        onContactClick={() => {
  const section = document.querySelector("#contact");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.hash = "#contact"; // fallback kalau belum ada elemen #contact
  }
}}
     />
    </div>
  );
}

export default App;
 
