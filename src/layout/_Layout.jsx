import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { blogData } from "../data/blogData.js";

const _Layout = () => {
  const [blogs, setBlogs] = useState(blogData);

  const handleCreateBlog = (blog) => {
    setBlogs([...blogs, blog]);

  };
  return (
    <>
      <div>
        <Header onSaved={handleCreateBlog} />
        <Main blogData={blogs} />
        <Footer />
      </div>
    </>
  );
};

export default _Layout;
