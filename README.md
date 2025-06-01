TechZone là một dự án web bán hàng được xây dựng bằng Vite và ReactJS, mô phỏng một website thương mại điện tử chuyên về các sản phẩm công nghệ như điện thoại. Dự án sử dụng Redux Toolkit để quản lý giỏ hàng, Tailwind CSS để tạo giao diện hiện đại và responsive, cùng với JSON Server để giả lập API backend. Các tính năng chính bao gồm hiển thị danh sách sản phẩm, tìm kiếm, lọc theo thương hiệu, sắp xếp theo giá, phân trang, và thêm/sửa/xóa sản phẩm trong giỏ hàng. Dự án hướng đến mục tiêu xây dựng một SPA thân thiện với người dùng, dễ mở rộng và dễ bảo trì.

Cách cài đặt và chạy dự án
## Clone về máy
git clone https://github.com/VuNam002/TechZone.git
cd TechZone

## Cài đặt dependencies
npm install

## Chạy JSON Server ở port 3003 (nếu có)
npm run json-server

## Khởi động ứng dụng
npm run dev