import AddNewBlog from "./AddNewBlog.jsx";
import BlogItem from "./BlogItem.jsx";
import { blogData } from "../../data/blogData.js";
import { useState, useEffect } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState(blogData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);

  useEffect(() => {
    setFilteredBlogs(
      blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, blogs]);

  const handleSubmit = (blogData) => {
    const newBlog = {
      id: blogs.length ? blogs[blogs.length - 1].id + 1 : 1, // Benzersiz bir id oluştur
      ...blogData,
    };
    setBlogs([newBlog, ...blogs]);
  }

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  }

  return (
    <>
      <div className="flex flex-col p-4">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <div className="flex">
          <div className="w-1/4 p-2">
            <AddNewBlog handleSubmit={handleSubmit} />
          </div>
          <div className="w-3/4">
            <div className="flex flex-wrap">
              {filteredBlogs.map((blogItem) => (
                <div key={blogItem.id} className="w-1/2 p-2">
                  <BlogItem
                    blogItem={blogItem}
                    deleteBlog={() => deleteBlog(blogItem.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
