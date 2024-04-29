import React from "react";
import Navbar from "../../Components/Layouts/Navbar.jsx";
import Sidebar from "../../Components/Layouts/Sidebar.jsx";
import TopNav from "../../Components/Layouts/TopNav.jsx";
import Editor from "../../Components/Layouts/Editor.jsx";

export default function Template_editor() {
  return (
    <div >
      <Sidebar />
      <TopNav />
      <Navbar/>
      <Editor />
      </div>
  );
};