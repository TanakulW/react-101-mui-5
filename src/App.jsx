import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddPost from "./pages/Addpost";
import Addpost from "./pages/Addpost";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
