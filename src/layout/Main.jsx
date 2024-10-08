import {
  Button,
  Card,
  DatePicker,
  Form,
  Image,
  Input,
  message,
  Modal,
  Popconfirm,
} from "antd";
import { GrUpdate } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { useState } from "react";
import AI3 from '../../public/images/AI3.png';

const Main = ({ blogData, onDelete, onUpdate, searchTerm  }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formUpdate] = Form.useForm();

  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    blog.content.toLowerCase().includes(searchTerm.toLowerCase()) || 
    blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const confirm = (id) => {
    onDelete(id);
    message.success("Blog Silindi.");
  };

  const handleUpdate = (blogItem) => {
    formUpdate.resetFields();
    setIsModalOpen(true);
    formUpdate.setFieldsValue({
      id: blogItem.id,
      title: blogItem.title,
      content: blogItem.content,
      author: blogItem.author,
      createDate: dayjs(blogItem.createDate),
      image: blogItem.image,
      categoryId: blogItem.categoryId,
      categoryName: blogItem.categoryName,
    });
  };

  const onFinish = (values) => {

    onUpdate(values);

    setIsModalOpen(false);
    message.success("Blog başarıyla güncellendi.");
  };

  return (
    <>
      {/* Hero Blog Section */}
      <div className="flex justify-center bg-gray-100 mt-16">
        <div className="flex w-3/4 justify-center bg-gray-100 max-w-full">
          <div className="flex justify-center mt-10 mb-16 max-w-full">
            <div className="flex justify-center w-3/5">
              <Image
                preview={false}
                width={600}
                src={AI3}
                className="rounded-xl object-cover"
                height={550}
              />
            </div>

            <div className="flex flex-col">
              {blogData.slice(5, 10).map((item, index) => (
                <div key={index} className="flex gap-x-4 h-24 ml-6 mb-4">
                  <div className=" ">
                    <Image
                      width={100}
                      src={item.image}
                      className=" rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h6 className="text-base text-red-700">
                      {item.categoryName}
                    </h6>
                    <p className="line-3-clamp font-semibold">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Hero Blog Section End */}

      {/* Kategoriler / Blogs Section */}
      <div className="flex justify-center mt-10">
        <div className="flex flex-col w-3/4">
          <h1 className="text-4xl font-semibold mb-6">Bloglar</h1>

          {filteredBlogs.map((blogItem, index) => (
            <div key={index} className="flex gap-x-6 mb-6">
              <div className="flex">
                <Image
                  preview={false}
                  width={290}
                  src={blogItem.image}
                  className="rounded-xl object-cover"
                  height={210}
                />
              </div>

              <Card className="flex">
                <h4 className="text-2xl font-semibold mb-4">
                  {blogItem.title}
                </h4>
                <p className="line-3-clamp mb-5">{blogItem.content}</p>
                <div className="flex justify-between">
                  <div className="flex gap-x-4">
                    <span>{blogItem.author}</span>
                    <span>
                      {dayjs(blogItem.createDate).format("DD/MM/YYYY")}
                    </span>
                  </div>
                  <div className="flex gap-x-4">
                    <Button
                      className="bg-blue-500 text-white"
                      size="small"
                      icon={<GrUpdate size={11} />}
                      onClick={() => handleUpdate(blogItem)}

                    >
                      Güncelle
                    </Button>

                    <Popconfirm
                      title="Bloğu Sil"
                      description="Silmek istediğinizden emin misiniz?"
                      onConfirm={() => confirm(blogItem.id)}
                      okText="Evet"
                      cancelText="Hayır"
                    >
                      <Button
                        className="bg-blue-500 text-white"
                        size="small"
                        icon={<TiDeleteOutline size={14} />}
                      >
                        Sil
                      </Button>
                    </Popconfirm>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {/* Kategoriler / Blogs Section End */}

      {/* Blog TV area */}
      {/* <div className="flex justify-center bg-gray-900 mt-72">
        <div className="flex w-3/4">
          <h1 className="text-4xl font-semibold text-white">Blog Tv</h1>
        </div>
      </div> */}
      {/* Blog TV End */}

      <Modal
        title="Blog Düzenle"
        open={isModalOpen}
        okText="Güncelle"
        cancelButtonProps={{ style: { display: "none" } }}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => formUpdate.submit()} // Güncelle butonuna basıldığında form submit edilir
      >
        <Form form={formUpdate} onFinish={onFinish} className="my-4">
          <Form.Item name="id" hidden={true}>
            <Input />
          </Form.Item>
          <Form.Item name="categoryId" hidden={true}>
            <Input />
          </Form.Item>
          <Form.Item name="categoryName" hidden={true}>
            <Input />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            labelCol={{ span: 8 }}
            className="w-full"
            label="Başlık"
            name="title"
            rules={[{ required: true, message: "Bu alan boş bırakılamaz!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            labelAlign="left"
            labelCol={{ span: 8 }}
            className="w-full"
            label="İçerik"
            name="content"
            rules={[{ required: true, message: "Bu alan boş bırakılamaz!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            labelAlign="left"
            labelCol={{ span: 8 }}
            className="w-full"
            label="Yazar"
            name="author"
            rules={[{ required: true, message: "Bu alan boş bırakılamaz!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            labelAlign="left"
            labelCol={{ span: 8 }}
            className="w-full"
            label="Resim"
            name="image"
            rules={[{ required: true, message: "Bu alan boş bırakılamaz!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            labelAlign="left"
            labelCol={{ span: 8 }}
            className="w-full"
            label="Oluşturma Tarihi"
            name="createDate"
            rules={[{ required: true, message: "Bu alan boş bırakılamaz!" }]}
          >
         
              <DatePicker
                value={formUpdate.getFieldValue("createDate")}
                format={"DD/MM/YYYY"}
                className="w-full"
                placeholder="Oluşturma Tarihi"
                onChange={(date) =>
                  formUpdate.setFieldValue("createDate", date)
                }
              />
       
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

Main.propTypes = {
  blogData: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired, 
};

export default Main;
