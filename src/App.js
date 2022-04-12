import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Videos from "./Components/Videos/Videos";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import NotFound from "./Components/NotFound/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";

export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);
  return (
    <div>
      <BlogContext.Provider value={[blogs, setBlogs]}>
        <Navbar></Navbar>
        <Toaster></Toaster>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/videos" element={<Videos></Videos>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/blog/:id" element={<BlogDetails></BlogDetails>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BlogContext.Provider>
    </div>
  );
}

export default App;
