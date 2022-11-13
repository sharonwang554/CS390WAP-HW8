import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyBlogs from './components/MyBlogs'
import CreateBlogPost from './components/CreateBlogPost'

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/blog' element={<MyBlogs />} />
            <Route path='/blog/create-post' element={<CreateBlogPost/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter