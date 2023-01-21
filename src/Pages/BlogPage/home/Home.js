import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import BlogPageHeader from "../../../components/BlogPageHeader/BlogPageHeader";
import BlogPageSider from "../../../components/BlogPageSidebar/BlogPageSider";
import BlogPosts from "./../../../components/BlogPosts/BlogPosts";
import "./home.css";
import NavBar from "../../../components/NavBar/NavBar";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  let blog = true;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/v1/blog/" + search
      );
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  console.log(posts);
  return (
    <>
      <NavBar blog={blog} />
      <BlogPageHeader />
      <div className="home">
        <BlogPosts posts={posts} />
        <BlogPageSider />
      </div>
    </>
  );
};

export default Home;
