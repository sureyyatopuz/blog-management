import { Input } from "antd";
import { IoSearch } from "react-icons/io5";
import AddNewBlog from "../components/AddNewBlog";
import PropTypes from "prop-types";
import { useState } from "react";


const Header = ({ onSaved, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Arama terimini üst bileşene iletin
  };
  
  return (
    // custom bi tanme container class yaz tailwind te nasıl yazılıyor default ta
    <header className="flex flex-col">
      <div className="flex h-16 bg-gray-100 justify-center items-center">
        Blog Tech
      </div>
      <div className="flex h-20 items-center justify-center">
        <div className="flex w-3/4 justify-between items-center">
          <div className="flex gap-x-8">
            <span>Kategoriler</span>
            <span>Bloglar</span>
            <span>Blog TV</span>
            <span>Etkinlikler</span>
          </div>
          <div className="flex gap-x-4 items-center">
            <div>
            <Input
                className="rounded-full"
                placeholder="Ara"
                prefix={<IoSearch />}
                value={searchTerm}
                onChange={handleSearchChange} 
              />
            </div>
            <span>Sıralama DropDown</span>
            <div>
              <AddNewBlog onSaved={onSaved}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onSaved: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Header;
