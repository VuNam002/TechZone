function Pagination({ currentPage, totalPages, onPageChange }:any) {
  //Trang hiện tại, tổng số trang, thay đổi trang khi người dùng bấm nút phân trang
  const pageNumbers = [];
  const maxVisible = 4; // Số trang giữa được hiển thị (không tính trang đầu/cuối)

  pageNumbers.push(1); // Trang đầu

  let start = Math.max(2, currentPage - Math.floor(maxVisible / 2)); //floor làm tròn xuống
  let end = Math.min(totalPages - 1, start + maxVisible - 1);

  // Nếu gần cuối thì dịch lùi start để đủ maxVisible trang giữa
  if (end >= totalPages - 1) {
    start = Math.max(2, totalPages - maxVisible);
    end = totalPages - 1;
  }

  if (start > 2) {
    pageNumbers.push("...");
  }

  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  if (end < totalPages - 1) {
    pageNumbers.push("...");
  }

  if (totalPages > 1) {
    pageNumbers.push(totalPages); // Trang cuối
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-1 my-8">
      <button
        className="px-3 py-2 min-w-[40px] h-10 flex items-center justify-center border border-gray-300 bg-white text-gray-700 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}//Khi bạn đang ở ví dụ trang 5, thì onPageChange(4) → chuyển về trang 4.
      >
        &lsaquo;
      </button>

      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2 py-2 min-w-[40px] h-10 flex items-center justify-center text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={page}
            className={`px-3 py-2 min-w-[40px] h-10 flex items-center justify-center border rounded font-medium transition-colors ${
              currentPage === page
                ? "bg-my-red text-white border-my-red hover:bg-my-red"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      )}

      <button
        className="px-3 py-2 min-w-[40px] h-10 flex items-center justify-center border border-gray-300 bg-white text-gray-700 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &rsaquo;
      </button>
    </div>
  );
}

export default Pagination;