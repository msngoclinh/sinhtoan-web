import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function ThoiTrang() {
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
                <a href="#gioi-thieu">Giới thiệu ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="#lich-su">Về lịch sử hình thành và phát triển</a></li>
                  <li><a href="#doi-tac">Về đối tác</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#san-pham">Sản phẩm ▾</a>
                <ul className="dropdown-menu">
                  <li><Link to="/san-pham/van-phong-pham">Văn phòng phẩm</Link></li>
                  <li><Link to="/san-pham/thiet-bi-y-te">Thiết bị y tế</Link></li>
                  <li><Link to="/san-pham/thoi-trang">Thời trang</Link></li>
                </ul>
              </li>
              <li><a href="#lien-he">Liên hệ</a></li>
            </ul>
          </div>
        </nav>
      </header>
      
      <main className="container">
        <section className="page-header">
          <h1>Thời trang</h1>
          <p>Bộ sưu tập thời trang hiện đại, phong cách cho mọi lứa tuổi</p>
        </section>

        <section className="product-details">
          <div className="product-grid">
            <div className="product-item">
              <h3>Thời trang nam</h3>
              <p>Áo sơ mi, quần tây, áo polo, vest công sở</p>
            </div>
            <div className="product-item">
              <h3>Thời trang nữ</h3>
              <p>Váy đầm, áo blouse, quần âu, set đồ công sở</p>
            </div>
            <div className="product-item">
              <h3>Thời trang trẻ em</h3>
              <p>Quần áo trẻ em, đồng phục học sinh, trang phục dạo phố</p>
            </div>
            <div className="product-item">
              <h3>Phụ kiện thời trang</h3>
              <p>Túi xách, ví da, thắt lưng, khăn choàng</p>
            </div>
            <div className="product-item">
              <h3>Giày dép</h3>
              <p>Giày công sở, giày thể thao, sandal, dép</p>
            </div>
            <div className="product-item">
              <h3>Đồng phục</h3>
              <p>Đồng phục công ty, đồng phục học sinh, áo thun đồng phục</p>
            </div>
          </div>
        </section>

        <section className="fashion-features">
          <h2>Đặc điểm nổi bật</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <h4>🌟 Chất liệu cao cấp</h4>
              <p>Sử dụng vải cotton, linen, silk và các chất liệu cao cấp khác</p>
            </div>
            <div className="feature-item">
              <h4>✂️ Thiết kế hiện đại</h4>
              <p>Theo kịp xu hướng thời trang mới nhất, phù hợp với người Việt</p>
            </div>
            <div className="feature-item">
              <h4>💰 Giá cả hợp lý</h4>
              <p>Chính sách giá tốt nhất thị trường, nhiều ưu đãi hấp dẫn</p>
            </div>
            <div className="feature-item">
              <h4>📏 Đa dạng size</h4>
              <p>Từ size S đến XXXL, phù hợp với mọi vóc dáng</p>
            </div>
          </div>
        </section>

        <section className="size-guide">
          <h2>Hướng dẫn chọn size</h2>
          <p>Để chọn được size phù hợp nhất, quý khách vui lòng tham khảo bảng size hoặc liên hệ với chúng tôi để được tư vấn chi tiết.</p>
          <div className="size-note">
            <p><strong>Lưu ý:</strong> Nếu quý khách không chắc chắn về size, hãy chọn size lớn hơn một chút để đảm bảo sự thoải mái khi mặc.</p>
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
              <p>📞 Hotline: 0908 952 755</p>
              <p>📧 Email: sinhtoan.coltd@hotmail.com</p>
              <p>
                📍 Địa chỉ: Lầu 9, Tòa nhà Viễn Đông, số 14 <br />
                Phan Tôn, Phường Đa Kao, Q1, Tp.Hồ Chí Minh
              </p>
            </div>
            <div className="footer-section">
              <h4>Sản phẩm</h4>
              <p><Link to="/san-pham/van-phong-pham">Văn phòng phẩm</Link></p>
              <p><Link to="/san-pham/thiet-bi-y-te">Thiết bị y tế</Link></p>
              <p><Link to="/san-pham/thoi-trang">Thời trang</Link></p>
            </div>
            <div className="footer-section">
              <h4>Về chúng tôi</h4>
              <p><Link to="/gioi-thieu">Giới thiệu</Link></p>
              <p><Link to="/lich-su-phat-trien">Lịch sử phát triển</Link></p>
              <p><Link to="/doi-tac">Đối tác</Link></p>
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

export default ThoiTrang;
