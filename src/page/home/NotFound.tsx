import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-2xl text-gray-700">Trang không tồn tại</p>
      <p className="mt-2 text-gray-500">Rất tiếc, trang bạn đang tìm không tồn tại hoặc đã bị xóa.</p>
      <Link to="/" className="inline-block px-6 py-2 mt-6 text-white transition bg-blue-500 rounded hover:bg-blue-600">
        Quay lại trang chủ
      </Link>
    </div>
  );
}

export default NotFound;
