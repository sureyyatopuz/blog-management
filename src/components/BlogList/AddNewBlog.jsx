import BlogInput from './BlogInput.jsx';
import { useState } from 'react';
import PropTypes from "prop-types";
import Button from '../UI/Button.jsx';
import Modal from '../../components/UI/Modal.jsx';
import './AddNewBlog.css';

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
  const [blogData, setBlogData] = useState({
    title: "",
    image: "",
    content: "",
    author: "",
    createDate: "",
  });
  const [isShowModal, setIsShowModal] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setBlogData({ ...blogData, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const isFormValid = Object.values(blogData).every(
      (value) => value.trim() !== ""
    );

    if (!isFormValid) {
      setIsShowModal(true);
      return;
    }
    handleSubmit(blogData);
    setBlogData({
      title: "",
      image: "",
      content: "",
      author: "",
      createDate: "",
    });
  };

  return (
    <>
      <form className="blog-form mt-2" onSubmit={onSubmit}>
        {blogInputs.map((input, index) => (
          <BlogInput key={index} {...input} handleChange={handleChange} value={blogData[input.name]} />
        ))}

        <Button size="md" color="success">
          Blog Ekle
        </Button>
      </form>
      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          title="Zorunlu Alanlar"
          desc="Lütfen tüm alanları girin!"
        />
      )}
    </>
  );
};

AddNewBlog.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddNewBlog;
