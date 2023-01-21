import React from "react";
import "./posts.css";
import Post from "../BlogPost/BlogPost";
const BlogPosts = ({ posts }) => {
  return (
    <>
      <div className="posts">
        {posts.map((p, index) => (
          <Post post={p} key={index} />
        ))}
      </div>
    </>
  );
};

export default BlogPosts;
