import React from "react";
import BlogPageSider from "../../../components/BlogPageSidebar/BlogPageSider";
import BlogSinglePost from "../../../components/BlogSinglePost/BlogSinglePost";
import "./Single.css";
import NavBar from "./../../../components/NavBar/NavBar";
const Single = () => {
  return (
    <>
      <NavBar blog={true} />
      <div className="single">
        <BlogSinglePost />
        <BlogPageSider />
      </div>
    </>
  );
};

export default Single;
