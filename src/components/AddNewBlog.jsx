import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { toast } from "react-toastify";

const { Option } = Select;

const AddNewBlog = ({ onSaved }) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    onSaved(values);
    toast.success("Yeni Blog Eklendi")
    setOpen(false)
  };

  return (
    <>
      <Button  onClick={showDrawer} icon={<PlusOutlined /> } className="bg-blue-500 text-white">
        Blog Ekle
      </Button>
      <Drawer
        title="Yeni Blog Ekle"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={() => form.submit()} type="primary">
              Ekle
            </Button>
          </Space>
        }
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>

            <Col span={12}>
            <Form.Item
                name="id"
                initialValue={22}
                hidden={true}
              >
              <Input/>
              </Form.Item>
              <Form.Item
                name="category"
                label="Kategori"
                rules={[
                  {
                    required: true,
                    message: "Boş Geçilemez",
                  },
                ]}
              >
                <Select placeholder="Kategori Seçiniz">
                  <Option value={1}>Software</Option>
                  <Option value={2}>IT</Option>
                  <Option value={3}>AI</Option>
                  <Option value={4}>Technology</Option>
                  <Option value={5}>Science</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="title"
                label="Başlık"
                rules={[
                  {
                    required: true,
                    message: "Boş Geçilemez",
                  },
                ]}
              >
                <Input placeholder="Başlığı giriniz" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="content"
                label="İçerik"
                rules={[
                  {
                    required: true,
                    message: "Boş Geçilemez",
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Blog içeriğini giriniz" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="image"
                label="Image Link"
                rules={[
                  {
                    required: true,
                    message: "Boş Geçilemez",
                  },
                ]}
              >
                <Input placeholder="Image linki giriniz" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="author"
                label="Yazar"
                rules={[
                  {
                    required: true,
                    message: "Boş Geçilemez",
                  },
                ]}
              >
                <Input placeholder="Yazar ismi giriniz" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="createDate"
                label="Oluşturma Tarihi"
                rules={[
                  {
                    required: true,
                    message: "Boş Geçilemez",
                  },
                ]}
              >
                <DatePicker format={"DD/MM/YYYY"} onChange={(e) => {form.setFieldsValue({createDate: dayjs(e)})}} className="w-full" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

AddNewBlog.propTypes = {
  onSaved: PropTypes.func.isRequired,
};

export default AddNewBlog;
