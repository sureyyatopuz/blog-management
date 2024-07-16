import { blogData } from "../../data/blogData.js";
import BlogItem from "./BlogItem.jsx";
import './BlogList.css';

function BlogList() {
  return (
    <>
      <div className="blog-list-container">
        {blogData.map((blog) => (
          <BlogItem
            key={blog.id}
            title={blog.title}
            author={blog.author}
            content={blog.content}
            createDate={blog.createDate}
            updateDate={blog.updateDate}
          />
        ))}
      </div>
    </>
  );
}

export default BlogList;
