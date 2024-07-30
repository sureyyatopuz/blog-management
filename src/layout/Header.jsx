import { Button, Input } from "antd";
import { IoSearch } from "react-icons/io5";

const Header = () => {
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
              />
            </div>
            <span>Sıralama DropDown</span>
            <div>
              <Button
                type="primary"
                shape="round"
              >
                Blog Ekle
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
