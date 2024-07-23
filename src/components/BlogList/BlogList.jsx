import AddNewBlog from "./AddNewBlog.jsx";
import BlogItem from "./BlogItem.jsx";
import { blogData } from "../../data/blogData.js";
import { useState } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState(blogData);

  function handleSubmit(blogData) {
    const newBlog = {
      ...blogData,
      id: blogs.length ? Math.max(blogs.map(blog => blog.id)) + 1 : 1, // Assuming id is unique and incrementing
    };
    setBlogs([newBlog, ...blogs]);
  }

  function deleteBlog(id) {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  }

  return (
    <>
      <div className="flex">
        <div className="w-1/4 p-2">
          <AddNewBlog handleSubmit={handleSubmit} />
        </div>
        <div className="w-3/4">
          <div className="flex flex-wrap">
            {blogs.map((blogItem) => (
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
    </>
  );
};

export default BlogList;
