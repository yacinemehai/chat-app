import React from "react";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Contact
      name="Yacine MEHAIGNI"
      avatar="https://randomuser.me/api/portraits/men/12.jpg"
      online={true}
      />
      <Contact
      name="Theo Le Basque"
      avatar="https://randomuser.me/api/portraits/men/80.jpg"
      online={false}
      />
      <Contact
      name="Anthony Verges"
      avatar="https://randomuser.me/api/portraits/women/73.jpg"
      online={true}
      />
    </div>
  );
}

export default App;
