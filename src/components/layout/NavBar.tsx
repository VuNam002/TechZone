import { useState } from "react";
import type { NavbarProps } from "../../types/navbar";

function Navbar({ brands, onBrandSelect }: NavbarProps) {
  const [activeBrand, setActiveBrand] = useState("Tất cả");
  const [isOpen, setIsOpen] = useState(false); // Thêm trạng thái toggle menu

  //Xây dựng hàm khi nhấn vào các nhãn hàng
  function handleSelect(brand: string) {
    onBrandSelect(brand);
    setActiveBrand(brand);
    setIsOpen(false);
  }

  return (
    <>
      {/* Nút hamburger menu cho mobile */}
      <div className="flex items-center justify-center gap-2 mt-16 mb-4 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-[10px] left-[420px] sm:left-0 z-50 flex items-center px-4 py-2 transition bg-white border rounded-md text-my-red border-my-red hover:bg-gray-100"
        >
          <span className="text-lg ">☰</span>
        </button>
      </div>

      {/* Menu dropdown cho mobile */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} flex flex-col  items-center gap-1 px-4 py-2 w-[84%] h-[100%] rounded-md z-50 right-0 bg-white fixed`}>
        <button 
          onClick={() => handleSelect("Tất cả")}
          className={`px-2 py-1 h-[36.5px] transition items-center ${
            activeBrand === "Tất cả"
              ? "bg-my-red text-white shadow w-[100%]" 
              : "bg-white w-[100%] text-my-red border border-my-red hover:bg-gray-100 "
          }`}
        >
          Tất cả
        </button>

        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => handleSelect(brand)}
            className={`w-[100%] h-[36.5px] text-sm text-center justify-center font-medium rounded-md transition ${
              activeBrand === brand
                ? "bg-my-red text-white shadow"
                : "bg-white  text-my-red border border-my-red shadow-md hover:bg-my-red hover:text-white hover:shadow-xl transition-all duration-300 ease-in-out rounded-lg px-5 py-2.5 font-medium tracking-wide"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Menu hiển thị bình thường cho desktop */}
      <div className="flex-col flex-wrap items-center justify-center hidden gap-1 px-0 py-2 mt-16 rounded-md md:flex bottom-4">
        <button 
          onClick={() => handleSelect("Tất cả")}
          className={`px-2 py-1 w-[246px] h-[36.5px] justify-center rounded-md transition items-center ${
            activeBrand === "Tất cả"
              ? "bg-my-red text-white shadow" 
              : "bg-white text-my-red border border-my-red hover:bg-gray-100"
          }`}
        >
          Tất cả
        </button>

        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => handleSelect(brand)}
            className={`w-[246px] h-[36.5px] text-sm font-medium rounded-md transition ${
              activeBrand === brand
                ? "bg-my-red text-white shadow"
                : "bg-white text-my-red border border-my-red shadow-md hover:bg-my-red hover:text-white hover:shadow-xl transition-all duration-300 ease-in-out rounded-lg px-5 py-2.5 font-medium tracking-wide"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>
    </>
  );
}

export default Navbar;