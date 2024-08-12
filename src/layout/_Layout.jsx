import { useState } from "react";
// import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { blogData } from "../data/blogData.js";

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

  return (
    <>
      <div>
        {/* containerı uygulamak için container mx-auto    menunun  sabit olması için için sticky top class larını ver*/}  
        <Header onSaved={handleCreateBlog} onSearch={handleSearch} />
        <Main blogData={blogs} onDelete={handleDeleteBlog} onUpdate={handleUpdateBlog} searchTerm={searchTerm} />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default _Layout;
