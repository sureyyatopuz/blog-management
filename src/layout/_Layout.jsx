import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const _Layout = () => {
  const [blogs, setBlogs] = useState([]);

  const handleCreateBlog = (blog) => {
    setBlogs([...blogs, blog]);
    console.log('New blog saved: Layouta taşınan BlogItem', blog);
  };
  return (
    <>
      <div>
        <Header onSaved={handleCreateBlog} />
        <Main newBlog={blogs} />
        <Footer />
      </div>
    </>
  );
};

export default _Layout;
