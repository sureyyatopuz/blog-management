import AddNewBlog from "./AddNewBlog.jsx";
import BlogItem from "./BlogItem.jsx";
import { blogData } from "../../data/blogData.js";

const BlogList = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/4 p-2">
          <AddNewBlog />
        </div>
        <div className="w-3/4">
          <div className="flex flex-wrap">
            {blogData.map((blogItem, index) => (
              <div key={index} className="w-1/2 p-2">
                <BlogItem blogItem={blogItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
