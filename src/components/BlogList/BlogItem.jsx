import PropTypes from 'prop-types';

const BlogItem = ({ blogItem }) => {
  return (
    <>
        <div className="p-4 bg-white shadow-md m-2 rounded-md">
          <h2 className="text-xl font-bold">{blogItem.title}</h2>
          <img src={blogItem.image} alt="" className="w-full h-44 rounded-md object-cover"/>
          <p className="text-gray-700">{blogItem.content}</p>
          <p className="text-sm text-gray-500">By {blogItem.author}</p>
          <p className="text-sm text-gray-500"> {blogItem.createDate}</p>
        </div>

    </>
  );
};

BlogItem.propTypes = {
  blogItem: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    createDate: PropTypes.string,
  }).isRequired,
};

export default BlogItem;
