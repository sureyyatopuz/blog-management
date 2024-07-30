import { Button, Card, Image } from "antd";
import { blogData } from "../data/blogData.js";
import { GrUpdate } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Main = ({ newBlog }) => {
  const [blogs, setBlogs] = useState(blogData);

  return (
    <>
      {/* Hero Blog Section */}
      <div className="flex justify-center bg-gray-100 ">
        <div className="flex w-3/4 justify-center bg-gray-100 max-w-full">
          <div className="flex justify-center mt-10 mb-16 max-w-full">
            <div className="flex justify-center w-3/5">
              <Image
                preview={false}
                width={600}
                src="https://www.fizikist.com/uploads/img/1722090407_mars-7459788-1280jpg.jpg"
                className="rounded-xl object-cover"
                height={550}
              />
            </div>

            <div className="flex flex-col">
              {blogs.slice(5, 10).map((item, index) => (
                <div key={index} className="flex gap-x-4 h-24 ml-6 mb-4">
                  <div className=" ">
                    <Image
                      width={100}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
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
          <h1 className="text-4xl font-semibold mb-6">Kategoriler</h1>

          {blogs.map((blogItem, index) => (
            <>
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
                      <span>{blogItem.createDate}</span>
                    </div>
                    <div className="flex gap-x-4">
                      <Button
                        type="primary"
                        size="small"
                        icon={<GrUpdate size={11} />}
                      >
                        Güncelle
                      </Button>
                      <Button
                        type="primary"
                        size="small"
                        icon={<TiDeleteOutline size={14} />}
                      >
                        Sil
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* Kategoriler / Blogs Section End */}

      {/* Blog TV arae */}
      <div className="flex justify-center bg-gray-900 mt-72">
        <div className="flex w-3/4">
          <h1 className="text-4xl font-semibold text-white">Blog Tv</h1>
        </div>
      </div>
      {/* Kategoriler / Blogs Section End */}
    </>
  );
};

Main.propTypes = {
  newBlog: PropTypes.array.isRequired,
};

export default Main;
