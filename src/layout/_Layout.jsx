import { useState } from "react";
// import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { blogData } from "../data/blogData.js";
import dayjs from "dayjs";

const _Layout = () => {
  const [blogs, setBlogs] = useState(
    blogData.map((blog, index) => ({ ...blog, id: index + 1 }))
  );
  const [searchTerm, setSearchTerm] = useState("");

  const handleCreateBlog = (blog) => {

    const newBlog = { ...blog, id: blogs.length + 1 };

    const updatedBlogs = [...blogs, newBlog].map((blog, index) => ({
      ...blog,
      id: index + 1,
    }));

    setBlogs(updatedBlogs);
  };

  const handleDeleteBlog = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  const handleUpdateBlog = (updatedBlog) => {
    const updatedBlogs = blogs.map((blog) =>
      blog.id === updatedBlog.id ? updatedBlog : blog
    );
  
    setBlogs(updatedBlogs);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSort = (sortType) => {
    const sortedBlogs = [...blogs];
    if (sortType === "createDate") {
      sortedBlogs.sort((a, b) => dayjs(b.createDate).diff(dayjs(a.createDate)));
    } else if (sortType === "author") {
      sortedBlogs.sort((a, b) => a.author.localeCompare(b.author));
    }
    setBlogs(sortedBlogs);
  };

  return (
    <>
      <div>
        <Header onSaved={handleCreateBlog} onSearch={handleSearch} onSort={handleSort} />
        <Main blogData={blogs} onDelete={handleDeleteBlog} onUpdate={handleUpdateBlog} searchTerm={searchTerm} />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default _Layout;
