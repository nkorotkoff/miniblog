import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Post from "./components/post/Post";
import AddPost from "./components/addPost/addPost";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostPage from "./components/postPage/postPage";
import { Footer } from "./components/footer/footer";
import ChangePost from "./components/changePost/ChangePost";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path=":id" element={<PostPage />} />
          <Route path="addpost" element={<AddPost />} />
          <Route path="/change/:id" element={<ChangePost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
