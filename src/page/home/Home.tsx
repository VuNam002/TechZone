import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/NavBar";
import Slide from "../../components/ui/Slide";
import ProductGrid from "../../components/ui/ProductGrid";
import SortDropdown from "../../components/ui/SortDropdown";
import AdSection from "../../components/ui/AdSection";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import Pagination from "../../components/ui/Pagination";
import { useProducts } from "../../hook/useProducts";
import qc1 from "../../assets/img/note-12.jpg";
import qc2 from "../../assets/img/q5-pro.jpg";
import qc3 from "../../assets/img/redmi-12-5g.jpg";
import pupg from "../../assets/img/dienthoaihaypng_qc.png";
import Footer from "../../components/layout/Footer";

function Home() {
  const {
    loading,
    paginatedProducts, // Thay đổi từ filteredProducts sang paginatedProducts
    brands,
    sortOption,
    currentPage,
    totalPages,
    totalItems,
    handleSearch,
    handleBrandSelect,
    handleSortChange,
    handlePageChange,
  } = useProducts();

  const adImages = [
    { src: qc1, alt: "redmi" },
    { src: qc2, alt: "reami" },
    { src: qc3, alt: "sale" }
  ];

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="mb-6 mt-[54px]">
        <Header onSearch={handleSearch} />
      </div>

      <div className="flex flex-col lg:flex-row items-stretch justify-between px-2 sm:px-4 py-4 lg:px-28 xl:px-36 gap-4 min-h-[400px] overflow-x-hidden">
        <div className="w-full lg:w-[260px] flex-shrink-0 rounded-lg mt-[-88px] p-2 sm:p-4">
          <Navbar brands={brands} onBrandSelect={handleBrandSelect} />
        </div>

        <div className="flex-1 overflow-hidden rounded-lg">
          <Slide />
          <img
            src={pupg}
            alt="Quảng cáo"
            className="h-[108px] ml-[0px] w-[660.8px] mt-[10px] rounded m-[3px]"
          />
        </div>

        <AdSection images={adImages} />
      </div>

      {/* Product List Section */}
      <div className="px-2 py-4 sm:px-4 lg:px-28 xl:px-36">
        <div className="flex flex-col items-center justify-between gap-4 mb-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <h4 className="text-xl font-semibold text-my-red">
              Danh sách các sản phẩm
            </h4>
            <span className="text-sm text-gray-600">
              ({totalItems} sản phẩm)
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Dropdown chọn số sản phẩm mỗi trang */}
            {/* <select
              value={itemsPerPage}
              onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
              defaultValue={45}
              className="px-3 py-2 text-sm rounded-md"
            /> */}
            
            <SortDropdown 
              sortOption={sortOption}
              onSortChange={handleSortChange}
            />
          </div>
        </div>

        <ProductGrid products={paginatedProducts} />

        {/* Pagination Component */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
      <Footer/>
    </>
  );
}

export default Home;