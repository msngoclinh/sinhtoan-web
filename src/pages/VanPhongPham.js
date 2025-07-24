import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function VanPhongPham() {
  return (
    <div className="App">
      <header className="main-header">
        <div className="container header-top">
          <div className="logo">
            <Link to="/">SINH TOÀN</Link>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Nhập tên sản phẩm" />
            <button type="submit">🔍</button>
          </div>
        </div>
        <nav className="main-nav">
          <div className="container">
            <ul>
              <li><Link to="/">Trang chủ</Link></li>
              <li className="dropdown">
                <Link to="/gioi-thieu">Giới thiệu ▾</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/gioi-thieu">Về công ty</Link></li>
                  <li><Link to="/gioi-thieu">Lịch sử phát triển</Link></li>
                  <li><Link to="/gioi-thieu">Tầm nhìn - Sứ mệnh</Link></li>
                  <li><Link to="/gioi-thieu">Đội ngũ</Link></li>
                  <li><Link to="/gioi-thieu">Đối tác</Link></li>
                </ul>
              </li>
              <li className="dropdown active">
                <Link to="/san-pham">Sản phẩm ▾</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/san-pham/van-phong-pham">Văn phòng phẩm</Link></li>
                  <li><Link to="/san-pham/thiet-bi-y-te">Thiết bị y tế</Link></li>
                  <li><Link to="/san-pham/thoi-trang">Thời trang</Link></li>
                </ul>
              </li>
              <li><a href="#lienhe">Liên hệ</a></li>
            </ul>
          </div>
        </nav>
      </header>
      
      <main className="container">
        <section className="page-header">
          <h1>Văn phòng phẩm</h1>
          <p>Đa dạng sản phẩm văn phòng phẩm cho doanh nghiệp và cá nhân</p>
        </section>

        <section className="product-details">
          <div className="product-grid">
            <div className="product-item">
              <h3>Bút viết</h3>
              <p>Bút bi, bút gel, bút chì các loại chất lượng cao</p>
            </div>
            <div className="product-item">
              <h3>Giấy in - photocopy</h3>
              <p>Giấy A4, A3, giấy in màu, giấy photo chất lượng</p>
            </div>
            <div className="product-item">
              <h3>Dụng cụ văn phòng</h3>
              <p>Kẹp giấy, ghim bấm, dao rọc giấy, thước kẻ</p>
            </div>
            <div className="product-item">
              <h3>Sổ tay - Tập vở</h3>
              <p>Sổ tay cao cấp, tập vở học sinh, sổ ghi chép</p>
            </div>
            <div className="product-item">
              <h3>Máy tính để bàn</h3>
              <p>Máy tính Casio, Canon các loại</p>
            </div>
            <div className="product-item">
              <h3>Đồ dùng lưu trữ</h3>
              <p>Hộp đựng tài liệu, kệ sách, túi đựng hồ sơ</p>
            </div>
          </div>
        </section>

        <section className="contact-info">
          <h2>Liên hệ đặt hàng</h2>
          <p>Để biết thêm thông tin chi tiết về sản phẩm và báo giá, vui lòng liên hệ:</p>
          <div className="contact-details">
            <p><strong>Điện thoại:</strong> 0311364218</p>
            <p><strong>Email:</strong> [Email liên hệ]</p>
            <p><strong>Địa chỉ:</strong> Lầu 9, Tòa nhà Viễn Đông, số 14 Phan Tôn, Phường Sài Gòn, Thành phố Hồ Chí Minh, Việt Nam</p>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SINH TOÀN</h3>
              <p>Công ty TNHH Thương mại Dịch vụ Sinh Toàn</p>
              <p>Chất lượng - Uy tín - Dịch vụ</p>
            </div>
            <div className="footer-section">
              <h4>Liên hệ</h4>
              <p>📞 Hotline: 0123 456 789</p>
              <p>📧 Email: info@sinhtoan.vn</p>
              <p>📍 Địa chỉ: [Địa chỉ công ty]</p>
            </div>
            <div className="footer-section">
              <h4>Sản phẩm</h4>
              <p><Link to="/san-pham/van-phong-pham">Văn phòng phẩm</Link></p>
              <p><Link to="/san-pham/thiet-bi-y-te">Thiết bị y tế</Link></p>
              <p><Link to="/san-pham/thoi-trang">Thời trang</Link></p>
            </div>
            <div className="footer-section">
              <h4>Về chúng tôi</h4>
              <p><Link to="/gioi-thieu">Giới thiệu công ty</Link></p>
              <p><Link to="/gioi-thieu">Tầm nhìn - Sứ mệnh</Link></p>
              <p><Link to="/gioi-thieu">Đối tác</Link></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} SINH TOÀN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default VanPhongPham;
