import { Image } from "antd";
import { blogData } from "../data/blogData.js";

const Main = () => {
  return (
    <>
      {/* Hero Blog Section */}
      <div className="flex justify-center bg-gray-100 ">
        <div className="flex w-3/4 justify-center bg-gray-100 max-w-full">
          <div className="flex justify-center bg-slate-500 mt-10 mb-16 max-w-full">
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
              {blogData.slice(5, 10).map((item, index) => (
                <div key={index} className="flex bg-red-600 gap-x-4 h-24 ml-4 mb-4" >
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
        <div className="flex w-3/4">
          <h1 className="text-4xl font-semibold">Kategoriler</h1>
          

        </div>
      </div>
      {/* Kategoriler / Blogs Section End */}

      {/* Blog TV arae */}
      <div className="flex justify-center bg-gray-900">
        <div className="flex w-3/4">
          <h1 className="text-4xl font-semibold text-white">Blog Tv</h1>
        </div>
      </div>
      {/* Kategoriler / Blogs Section End */}
    </>
  );
};

export default Main;
