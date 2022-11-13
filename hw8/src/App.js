import './App.css';
import AppRouter from './AppRouter';
import React, { Component }  from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import MyBlogs from './components/MyBlogs';
import Edit from "./components/Edit";
import CreateBlogPost from './components/CreateBlogPost';

// function App() {
//   return (
//     <div className="App">
//       <ul id='nav-list'>
//         <li><a href="http://localhost:3000/blog">My Blogs</a></li>
//         <li><a href="http://localhost:3000/blog/create-post">Create Blog Posts</a></li>
//       </ul>
//       <AppRouter/>
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MyBlogs />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<CreateBlogPost />} />
      </Routes>
    </div>
  );
 };

export default App;
