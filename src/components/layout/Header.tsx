import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../ui/SearchBar";
import logo from "../../assets/img/logo-dth_1630379348.png";
import OnlineSupport from "../ui/OnlineSupport";
import { BiCartAdd } from "react-icons/bi";

type HeaderProps = {
  onSearch: (keyword: string) => void;
};

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [showSupport, setShowSupport] = useState(false);
  const [showSearch,] = useState(false); // Thêm state điều khiển hiển thị thanh tìm kiếm
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 font-sans bg-my-red sm:px-8 md:px-16 lg:px-28 xl:px-36">
        <Link to="/">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="w-[12rem] h-12 max-w-full" />
            <div className="hidden mt-5 text-xs font-bold text-white sm:block relative sm:-left-[165px]">
              0372615121 | 0986067214
            </div>
          </div>
        </Link>


        {/* Hiện thanh tìm kiếm nếu được bật thủ công hoặc không ở trang cart */}
        {(showSearch || location.pathname !== "/cart") && (
          <div className="w-full max-w-md font-sans">
            <SearchBar onSearch={onSearch} />
          </div>
        )}

        <div className="flex">
          <div className="relative hidden sm:block">
            <div className="flex items-center mr-1 space-x-1">
              <button
                onClick={() => setShowSupport(!showSupport)}
                className="p-2 transition duration-500 bg-white shadow-md rounded-3xl text-my-red hover:bg-gray-100"
              >
                📞
              </button>
              <div className="text-base text-white from-neutral-100">Bán hàng</div>
            </div>
            {showSupport && (
              <div className="absolute right-0 z-50 w-4 h-3 top-12">
                <OnlineSupport />
              </div>
            )}
          </div>

          <div className="hidden space-x-1 sm:flex">
            <div className="relative z-50 items-center justify-center hidden w-10 h-10 bg-white shadow-md sm:flex rounded-3xl text-my-red">
              <Link to="/cart">
                <BiCartAdd />
              </Link>
            </div>
            <div className="flex items-center justify-between text-white">
              Giỏ hàng
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
