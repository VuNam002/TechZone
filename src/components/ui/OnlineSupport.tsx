export default function OnlineSupport() {
  return (
    <>
      <div className="fixed z-50 font-sans bg-white border border-gray-200 shadow-2xl w-96 p-7 top-15 right-4 rounded-2xl backdrop-blur-sm bg-white/85">
        {/* Header */}
        <div className="mb-6">
          <h4 className="p-3 font-bold text-center text-red-600 border-2 border-red-500 shadow-sm rounded-xl bg-red-50">
            BÁN HÀNG ONLINE (8H - 21H HÀNG NGÀY)
          </h4>
        </div>

        {/* Sales Consultation Section */}
        <div className="mb-6">
          <ul className="space-y-2">
            <li className="pl-3 mb-3 text-lg font-semibold text-gray-800 border-l-4 border-blue-500">
              Tư vấn bán hàng:
            </li>
            <li className="transition-colors border border-green-200 rounded-lg p hotline bg-green-50 hover:bg-green-100">
              📱 Zalo - 0372615121
            </li>
            <li className="transition-colors border border-green-200 rounded-lg hotline bg-green-50 hover:bg-green-100">
              📱 Zalo - 0986067214
            </li>
            <li className="transition-colors border border-green-200 rounded-lg hotline bg-green-50 hover:bg-green-100">
              📱 Zalo - 0356506007
            </li>
            <li className="transition-colors border border-green-200 rounded-lg hotline bg-green-50 hover:bg-green-100">
              📱 Zalo - 0372615121
            </li>
          </ul>
        </div>

        {/* Facebook Consultation Section */}
        <div className="mb-6">
          <ul className="space-y-2">
            <li className="pl-2 mb-3 text-lg font-semibold text-gray-800 border-l-4 border-blue-500">
              Tư vấn qua Facebook:
            </li>
            <li className="p-2 text-base leading-relaxed border border-blue-200 rounded-lg bg-blue-50">
              📘 Truy cập ngay Fanpage:{" "}
              <a
                href="https://www.w3schools.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline font-medium text-blue-600 underline transition-colors hover:text-blue-800"
              >
                https://www.w3schools.com
              </a>{" "}
              để được cập nhật thông tin giá, thông tin mới nhất về sản phẩm công nghệ.
            </li>
          </ul>
        </div>

        {/* Store Address Section */}
        <div>
          <ul className="space-y-1">
            <li className="pl-1 text-lg font-semibold text-gray-800 border-l-4 border-blue-500">
              Địa chỉ cửa hàng:
            </li>
            <li className="transition-colors border border-orange-200 rounded-lg hotline bg-orange-50 hover:bg-orange-100">
              📍 Mễ Trì Hạ - Nam Từ Liêm - Hà Nội
            </li>
            <li className="transition-colors border border-orange-200 rounded-lg hotline bg-orange-50 hover:bg-orange-100">
              📍 99 Nguyễn Chí Thanh - Đống Đa - Hà Nội
            </li>
            <li className="transition-colors border border-orange-200 rounded-lg hotline bg-orange-50 hover:bg-orange-100">
              📍 78 Mai Dịch - Cầu Giấy - Hà Nội
            </li>
            <li className="transition-colors border border-orange-200 rounded-lg hotline bg-orange-50 hover:bg-orange-100">
              📍 62 Hồ Tùng Mậu - Cầu Giấy - Hà Nội
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}