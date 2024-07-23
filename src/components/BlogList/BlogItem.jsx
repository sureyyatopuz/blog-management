import PropTypes from "prop-types";
import { TiDeleteOutline } from "react-icons/ti";

const BlogItem = ({ blogItem, deleteBlog }) => {
  return (
    <>
      <div className="p-4 bg-white shadow-md m-2 rounded-md">
        <h2 className="text-xl font-bold">{blogItem.title}</h2>
        <img
          src={blogItem.image}
          alt=""
          className="w-full h-44 rounded-md object-cover"
        />
        <p className="text-gray-700">{blogItem.content}</p>
        <p className="text-sm text-gray-500">By {blogItem.author}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500"> {blogItem.createDate}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <div>
              <TiDeleteOutline size={25} onClick={deleteBlog} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BlogItem.propTypes = {
  blogItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    createDate: PropTypes.string.isRequired,
  }).isRequired,
  deleteBlog: PropTypes.func.isRequired,
};

export default BlogItem;
