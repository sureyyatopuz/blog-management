import PropTypes from "prop-types";

const BlogInput = ({ handleChange, label, placeholder, name, type }) => {
  return (
    <div className="">
      <label>{label}</label>
      <input
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}

BlogInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default BlogInput;
