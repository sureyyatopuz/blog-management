import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { blogData } from "../data/blogData.js";

const _Layout = () => {
  const [blogs, setBlogs] = useState(
    blogData.map((blog, index) => ({ ...blog, id: index + 1 }))
  );

  const handleCreateBlog = (blog) => {

    const newBlog = { ...blog, id: blogs.length + 1 };

    const updatedBlogs = [...blogs, newBlog].map((blog, index) => ({
      ...blog,
      id: index + 1,
    }));

    setBlogs(updatedBlogs);
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
