import React from "react";
import "./header.css";
import blogImage from "../../assets/desgin.png";
const BlogPageHeader = () => {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={blogImage} alt="" />
      </div>
    </>
  );
};

export default BlogPageHeader;
