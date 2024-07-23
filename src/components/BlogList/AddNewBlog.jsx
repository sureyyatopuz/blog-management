import BlogInput from './BlogInput.jsx'
import { useState } from 'react';
import PropTypes from "prop-types";
import Button from '../UI/Button.jsx';
import './AddNewBlog.css'

const blogInputs = [
  {
    label: "Title*",
    type: "text",
    placeholder: "Başlık.",
    name: "title",
  },
  {
    label: "Resim*",
    type: "text",
    placeholder: "İmage linki.",
    name: "image",
  },
  {
    label: "İçerik*",
    type: "text",
    placeholder: "Blog İçeriği.",
    name: "content",
  },
  {
    label: "Yazar*",
    type: "text",
    placeholder: "Yazar.",
    name: "author",
  },
  {
    label: "Oluşturulma Tarihi*",
    type: "text",
    placeholder: "Oluşturulma Tarihi.",
    name: "createDate",
  },
];

const AddNewBlog = ({ handleSubmit }) => {
  const [blogData, setblogData] = useState({
    title: "",
    image: "",
    content: "",
    author: "",
    createDate:""
  });

  function handleChange({ target: { name, value } }) {
    setblogData({ ...blogData, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    handleSubmit(blogData);
  }

  return (
    <>
      <div className="p-4 bg-white shadow-md m-2 rounded-md">
        <h2 className="font-bold">Yeni Blog Ekle</h2>
        <form className="blog-form" onSubmit={onSubmit}>
          {blogInputs.map((input, index) => (
            <BlogInput key={index} {...input} handleChange={handleChange} />
          ))}

          <Button size="sm" color="success">
            Blog Ekle
          </Button>
        </form>
      </div>
    </>
  );
};

AddNewBlog.propTypes = {
  handleSubmit: PropTypes.func,
};

export default AddNewBlog;
