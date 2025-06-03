import momo from "../../assets/img/momo.jpg";
import viettel from "../../assets/img/viettel.jpg";
import zalo from "../../assets/img/zalo.jpg";
import visa from "../../assets/img/visa.jpg";
import ghtk from "../../assets/img/ghtk.jpg";
import bct from "../../assets/img/bct.png";

function Footer() {
  return (
    <footer className="relative px-4 py-3 font-sans text-sm text-white bg-red-600 top-5 rounded-xl">
      <div className="max-w-screen-xl mx-auto">
        {/* Thông tin chính */}
        <div className="flex flex-wrap justify-between">
          <div className="flex-1 min-w-[220px] mb-5">
            <h3 className="mb-1 text-base font-bold">VỀ CHÚNG TÔI</h3>
            <p className="my-1">Tin tức</p>
            <p className="my-1">Giới thiệu</p>
            <p className="my-1">Tuyển dụng</p>
            <p className="my-1">Hệ thống đại lý</p>
          </div>

          <div className="flex-1 min-w-[120px] mb-5">
            <h3 className="mb-2 text-base font-bold">HỖ TRỢ KHÁCH HÀNG</h3>
            <p className="my-1">Phương thức thanh toán</p>
            <p className="my-1">Chính sách bảo hành - đổi trả</p>
            <p className="my-1">Giải đáp mua hàng Online</p>
          </div>

          <div className="flex-1 min-w-[220px] mb-5">
            <h3 className="mb-2 text-base font-bold">HỆ THỐNG CỬA HÀNG</h3>
            <p className="leading-relaxed">
              - Cơ sở 1: Mễ Trì Hạ - Nam Từ Liêm - Hà Nội, Hà Nội Hotline: 0986067213
            </p>
            <p className="leading-relaxed">
              - Cơ sở 2: 99 Nguyễn Chí Thanh - Đống Đa - Hà Nội, Hà Nội Hotline: 0396987195
            </p>
            <p className="leading-relaxed">
              - Cơ sở 3: 78 Mai Dịch - Cầu Giấy - Hà Nội Hotline: 0818.215.215
            </p>
            <p className="leading-relaxed">
              - Cơ sở 4: 62 Hồ Tùng Mậu - Cầu Giấy - Hà Nội
            </p>
          </div>
        </div>

        {/* Thanh toán - Vận chuyển - Fanpage */}
        <div className="flex flex-wrap justify-between mt-8">
          <div className="mt-4">
            <h3 className="mb-2 text-base font-bold">PHƯƠNG THỨC THANH TOÁN</h3>
            <div className="flex flex-wrap items-center">
              <img className="h-10 m-1 rounded-md" src={momo} alt="Momo" />
              <img className="h-10 m-1 rounded-md" src={visa} alt="Visa" />
              <img className="h-10 m-1 rounded-md" src={zalo} alt="ZaloPay" />
              <img className="h-10 m-1 rounded-md" src={viettel} alt="ViettelPay" />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="mb-2 text-base font-bold">HÌNH THỨC VẬN CHUYỂN</h3>
            <img className="h-10 rounded-md" src={ghtk} alt="GHN" />
          </div>

          <div className="mt-4 max-w-[400px]">
            <iframe
              title="Fanpage"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F258mobile&tabs&width=340&height=130&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="130"
              className="overflow-hidden border-none"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>

        {/* Bộ Công Thương */}
        <div className="flex justify-center mt-2">
          <img src={bct} alt="Đã thông báo Bộ Công Thương" className="h-[54px] mt-2" />
        </div>

        {/* Bản quyền */}
        <div className="mt-0 text-xs text-center">
          © DIENTHOAIHAY.VN All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
