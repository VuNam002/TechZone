import { useState, type ChangeEvent, type FormEvent } from "react";
import type { SearchBars } from "../../types/searchBar";

function SearchBar({ onSearch }: SearchBars) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLElement>) {
    event.preventDefault(); //không để reload trang
    onSearch(searchTerm.trim());
  }
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <form
        className="flex items-center space-x-3 search-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text" //nhập văn bản
          name="search" //gán tên trường search
          value={searchTerm}
          onChange={handleChange} //sử lý sự kiện khi người dùng nhâp
          placeholder="Tìm kiếm sản phẩm"
          className="text-sm h-9 pl-3 rounded-md search-input text-while w-[80%]"
        />
        <button
          type="submit"
          className="hidden px-3 text-xs font-semibold text-black bg-white rounded-md h-9 sm:block"
        >
          Tìm kiếm
        </button>
      </form>
    </>
  );
}

export default SearchBar;
