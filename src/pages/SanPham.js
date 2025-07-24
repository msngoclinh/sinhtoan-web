import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function SanPham() {
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
        <div className="page-header">
          <h1>Sản phẩm của SINH TOÀN</h1>
          <p className="page-subtitle">Đa dạng sản phẩm chất lượng cao phục vụ mọi nhu cầu</p>
        </div>

        <section className="products-overview">
          <div className="product-categories">
            {/* Văn phòng phẩm */}
            <div className="category-item">
              <div className="category-header">
                <h2>Văn phòng phẩm</h2>
                <p>Đa dạng sản phẩm văn phòng phẩm cho doanh nghiệp và cá nhân</p>
              </div>
              <ul className="category-products">
                <li>Bút viết các loại (bi, gel, chì)</li>
                <li>Giấy in - photocopy chất lượng cao</li>
                <li>Dụng cụ văn phòng thiết yếu</li>
                <li>Sổ tay - Tập vở cao cấp</li>
                <li>Máy tính để bàn</li>
                <li>Đồ dùng lưu trữ tài liệu</li>
              </ul>
              <div className="category-action">
                <Link to="/san-pham/van-phong-pham" className="product-link">Xem chi tiết →</Link>
              </div>
            </div>

            {/* Thiết bị y tế */}
            <div className="category-item">
              <div className="category-header">
                <h2>Thiết bị y tế</h2>
                <p>Cung cấp thiết bị y tế đảm bảo chất lượng, an toàn cho các cơ sở y tế</p>
              </div>
              <ul className="category-products">
                <li>Thiết bị đo lường y tế</li>
                <li>Dụng cụ y tế cơ bản</li>
                <li>Vật tư tiêu hao y tế</li>
                <li>Thiết bị bảo hộ y tế</li>
                <li>Máy móc chuyên dụng</li>
                <li>Dụng cụ phẫu thuật</li>
              </ul>
              <div className="category-features">
                <div className="feature-badges">
                  <span className="badge">✓ Chứng nhận FDA</span>
                  <span className="badge">✓ Bảo hành chính hãng</span>
                  <span className="badge">✓ Hỗ trợ kỹ thuật 24/7</span>
                </div>
              </div>
              <div className="category-action">
                <Link to="/san-pham/thiet-bi-y-te" className="product-link">Xem chi tiết →</Link>
              </div>
            </div>

            {/* Thời trang */}
            <div className="category-item">
              <div className="category-header">
                <h2>Thời trang</h2>
                <p>Bộ sưu tập thời trang hiện đại, phong cách cho mọi lứa tuổi</p>
              </div>
              <ul className="category-products">
                <li>Thời trang nam công sở</li>
                <li>Thời trang nữ hiện đại</li>
                <li>Thời trang trẻ em</li>
                <li>Phụ kiện thời trang</li>
                <li>Giày dép các loại</li>
                <li>Đồng phục công ty</li>
              </ul>
              <div className="category-features">
                <div className="feature-badges">
                  <span className="badge">🌟 Chất liệu cao cấp</span>
                  <span className="badge">✂️ Thiết kế hiện đại</span>
                  <span className="badge">📏 Đa dạng size</span>
                </div>
              </div>
              <div className="category-action">
                <Link to="/san-pham/thoi-trang" className="product-link">Xem chi tiết →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Lý do chọn */}
        <section className="why-choose-us">
          <h2>Tại sao chọn SINH TOÀN?</h2>
          <div className="advantages-grid">
            <div className="advantage-item">
              <h3>🏆 Chất lượng đảm bảo</h3>
              <p>Tất cả sản phẩm đều được kiểm tra chất lượng nghiêm ngặt trước khi đến tay khách hàng</p>
            </div>
            <div className="advantage-item">
              <h3>💰 Giá cả cạnh tranh</h3>
              <p>Cam kết mức giá tốt nhất thị trường với nhiều chương trình ưu đãi hấp dẫn</p>
            </div>
            <div className="advantage-item">
              <h3>🚚 Giao hàng nhanh chóng</h3>
              <p>Hệ thống phân phối rộng khắp, đảm bảo giao hàng nhanh chóng và an toàn</p>
            </div>
            <div className="advantage-item">
              <h3>🎯 Dịch vụ tận tâm</h3>
              <p>Đội ngũ tư vấn chuyên nghiệp, hỗ trợ khách hàng 24/7</p>
            </div>
            <div className="advantage-item">
              <h3>🔧 Hậu mãi chu đáo</h3>
              <p>Chế độ bảo hành, bảo trì và hỗ trợ kỹ thuật toàn diện</p>
            </div>
            <div className="advantage-item">
              <h3>🤝 Đối tác tin cậy</h3>
              <p>Hơn 12 năm kinh nghiệm, được hàng nghìn khách hàng tin tưởng</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="contact-cta">
          <div className="cta-content">
            <h2>Cần tư vấn sản phẩm?</h2>
            <p>Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn tìm ra giải pháp tốt nhất</p>
            <div className="cta-buttons">
              <a href="tel:0123456789" className="cta-button primary">📞 Gọi ngay</a>
              <a href="mailto:info@sinhtoan.vn" className="cta-button secondary">📧 Gửi email</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
              <p>📍 Địa chỉ: Lầu 9, Tòa nhà Viễn Đông, số 14 Phan Tôn, Phường Đa Kao, Q1, Tp.Hồ Chí Minh</p>
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

export default SanPham;
