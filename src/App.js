import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import VanPhongPham from './pages/VanPhongPham';
import ThietBiYTe from './pages/ThietBiYTe';
import ThoiTrang from './pages/ThoiTrang';
import LichSuPhatTrien from './pages/LichSuPhatTrien';
import DoiTac from './pages/DoiTac';

function HomePage() {
  return (
    <div className="App">
      <header className="main-header">
        <div className="container header-top">
          <div className="logo">
            <Link to="/">SINH TOÀN</Link>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Tìm kiếm..." />
            <button type="submit">🔍</button>
          </div>
        </div>
        <nav className="main-nav">
          <div className="container">
            <ul>
              <li><Link to="/">Trang chủ</Link></li>
              <li className="dropdown">
                <span>Giới thiệu ▾</span>
                <ul className="dropdown-menu">
                  <li><Link to="/lich-su-phat-trien">Lịch sử phát triển</Link></li>
                  <li><Link to="/doi-tac">Đối tác</Link></li>
                </ul>
              </li>
              <li className="dropdown">
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
        <section className="banner">
          <div className="banner-content">
            <div className="banner-text">
              <h1>Chào mừng đến với SINH TOÀN</h1>
              <p>Chuyên cung cấp Văn phòng phẩm, Thiết bị y tế, Thời trang chất lượng</p>
            </div>
          </div>
        </section>
        {/* Main Sections */}
        <section className="main-sections">
          <h2 className="section-title">Khám phá SINH TOÀN</h2>
          <div className="sections-grid">
            {/* Lịch sử phát triển */}
            <div className="main-section-card">
              <Link to="/lich-su-phat-trien" className="section-link">
                <div className="section-icon">📈</div>
                <h3>Lịch sử phát triển</h3>
                <p>Hành trình phát triển từ năm 2011 đến nay với nhiều cột mốc quan trọng, khẳng định vị thế trên thị trường</p>
                <span className="read-more">Tìm hiểu thêm →</span>
              </Link>
            </div>
            {/* Đối tác */}
            <div className="main-section-card">
              <Link to="/doi-tac" className="section-link">
                <div className="section-icon">🤝</div>
                <h3>Đối tác</h3>
                <p>Mạng lưới đối tác uy tín như Johnson & Johnson, Janssen mang đến sản phẩm chất lượng cao</p>
                <span className="read-more">Xem đối tác →</span>
              </Link>
            </div>
            {/* Sản phẩm */}
            <div className="main-section-card products-section">
              <div className="section-header">
                <div className="section-icon">🛍️</div>
                <h3>Sản phẩm</h3>
                <p>Đa dạng các sản phẩm chất lượng cao phục vụ mọi nhu cầu</p>
              </div>
              <div className="products-grid">
                <Link to="/san-pham/thiet-bi-y-te" className="product-mini-card">
                  <div className="mini-icon">🏥</div>
                  <h4>Thiết bị y tế</h4>
                  <p>Thiết bị y tế hiện đại, an toàn</p>
                </Link>
                <Link to="/san-pham/van-phong-pham" className="product-mini-card">
                  <div className="mini-icon">📝</div>
                  <h4>Văn phòng phẩm</h4>
                  <p>Đa dạng sản phẩm văn phòng</p>
                </Link>
                <Link to="/san-pham/thoi-trang" className="product-mini-card">
                  <div className="mini-icon">👔</div>
                  <h4>Thời trang</h4>
                  <p>Bộ sưu tập hiện đại</p>
                </Link>
              </div>
            </div>
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lich-su-phat-trien" element={<LichSuPhatTrien />} />
        <Route path="/doi-tac" element={<DoiTac />} />
        <Route path="/san-pham/van-phong-pham" element={<VanPhongPham />} />
        <Route path="/san-pham/thiet-bi-y-te" element={<ThietBiYTe />} />
        <Route path="/san-pham/thoi-trang" element={<ThoiTrang />} />
      </Routes>
    </Router>
  );
}

export default App;
