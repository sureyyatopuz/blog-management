import PropTypes from 'prop-types';
import './BlogItem.css';

function BlogItem({ title, content, author, createDate, updateDate }){
    return (
        <div className="blog-item">
        <div className="blog-item-header">
          <h2 className="blog-item-title">{title}</h2>
          <p className="blog-item-author">by {author}</p>
        </div>
        <div className="blog-item-content">
          <p>{content}</p>
        </div>
        <div className="blog-item-footer">
          <p>Created on: {createDate}</p>
          <p>Updated on: {updateDate}</p>
        </div>
      </div>
    )
}

BlogItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    createDate: PropTypes.string.isRequired,
    updateDate: PropTypes.string.isRequired,
  };

export default BlogItem