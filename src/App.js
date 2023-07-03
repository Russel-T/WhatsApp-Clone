import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app_body">
        <Sidebar />
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;

// Reference (currently at refer 47:38): https://www.youtube.com/watch?v=pUxrDcITyjg
// To install the material UI: https://youtu.be/LD4-UTFXtwA
