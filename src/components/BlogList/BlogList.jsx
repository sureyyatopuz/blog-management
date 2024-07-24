import AddNewBlog from "./AddNewBlog.jsx";
import BlogItem from "./BlogItem.jsx";
import { blogData } from "../../data/blogData.js";
import { useState, useEffect } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState(blogData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("date");
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);

  useEffect(() => {
    let filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sıralama işlemi
    if (sortOption === "date") {
      filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === "author") {
      filtered = filtered.sort((a, b) => a.author.localeCompare(b.author));
    }

    setFilteredBlogs(filtered);
  }, [searchTerm, sortOption, blogs]);

  const handleSubmit = (blogData) => {
    const newBlog = {
      id: blogs.length ? blogs[blogs.length - 1].id + 1 : 1, // Benzersiz bir id oluştur
      ...blogData,
    };
    setBlogs([newBlog, ...blogs]);
  };

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  return (
    <>
      <div className="flex flex-col p-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Arama Inputu */}
          <input
            type="text"
            placeholder="Ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 p-2 border border-gray-300 rounded bg-white shadow-md"
          />

          {/* Sıralama Seçenekleri */}
          <div className="flex gap-2 mt-4 md:mt-0">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-white shadow-md"
            >
              <option value="date">Tarihe Göre</option>
              <option value="author">Yazara Göre</option>
            </select>
          </div>
        </div>

        <div className="flex">
          <div className="w-full md:w-1/4 p-2">
            <AddNewBlog handleSubmit={handleSubmit} />
          </div>
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap">
              {filteredBlogs.map((blogItem) => (
                <div key={blogItem.id} className="w-full sm:w-1/2 p-2">
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
