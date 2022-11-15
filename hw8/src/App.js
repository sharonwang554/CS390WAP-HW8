import React, { useState, Component } from 'react';
import './App.css';
import AppRouter from './AppRouter';
import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import MyBlogs from './components/MyBlogs';
import Edit from "./components/Edit";
import CreateBlogPost from './components/CreateBlogPost';
import Login from './components/Login';

const App = () => {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

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
