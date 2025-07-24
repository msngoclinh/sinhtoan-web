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
            <Link to="/">SINHTOAN</Link>
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
        <section className="banner" style={{background: '#fff', padding: 0}}>
          <div className="banner-image-full floating-banner" style={{position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', background: '#fff', minHeight: '340px', border: '4px solidrgb(81, 187, 125)'}}>
            <img src={process.env.PUBLIC_URL + '/bannerr.png'} alt="Banner sản phẩm SINH TOÀN" style={{width: '100%', height: '100%', maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center', position: 'absolute', left: 0, top: 0, zIndex: 1, animation: 'floatBanner 6s ease-in-out infinite'}} />
            <div style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.38)', zIndex: 2}}></div>
            <div className="banner-text" style={{position: 'relative', zIndex: 3, color: '#fff', width: '100%', padding: '2.5rem 2rem 2.5rem 2rem', textAlign: 'center', fontWeight: 900, letterSpacing: '1px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <h1 style={{fontSize: '3rem', fontWeight: 700, marginBottom: '1.2rem', color: '#fff', textShadow: '0 4px 24px #000, 0 2px 8px #234d20', fontFamily: 'Montserrat, Arial, sans-serif'}}><h1>WELCOME TO SINH TOÀN</h1>
              </h1>
              <span style={{fontSize: '2rem', fontStyle: 'Segoe UI', color: '#fff', textShadow: '0 2px 8px #000', fontFamily: 'Georgia, serif'}}>Xem Ngay</span>
            </div>
          </div>
        </section>
        {/* Main Sections */}
        <section className="main-sections">
          <h2 className="section-title">KHÁM PHÁ SINH TOÀN</h2>
          <div className="sections-grid">
            {/* Lịch sử phát triển */}
            <div className="main-section-card">
              <Link to="/lich-su-phat-trien" className="section-link">
                <img src={process.env.PUBLIC_URL + '/lsss.jpg'} alt="Lịch sử phát triển" className="section-img" style={{width: '100%', maxWidth: '320px', borderRadius: '8px', margin: '0.5rem auto 1rem', display: 'block', boxShadow: '0 2px 12px rgba(62,86,65,0.10)'}} />
                <h3>Lịch sử phát triển</h3>
                <p>Hành trình phát triển từ năm 2011 đến nay với nhiều cột mốc quan trọng, khẳng định vị thế trên thị trường</p>
                <span className="read-more">Tìm hiểu thêm →</span>
              </Link>
            </div>
            {/* Đối tác */}
            <div className="main-section-card">
              <Link to="/doi-tac" className="section-link">
                <img src={process.env.PUBLIC_URL + '/dt.jpg'} alt="Đối tác" className="section-img" style={{width: '100%', maxWidth: '320px', borderRadius: '8px', margin: '0.5rem auto 1rem', display: 'block', boxShadow: '0 2px 12px rgba(62,86,65,0.10)'}} />
                <h3>Đối tác</h3>
                <p>Mạng lưới đối tác uy tín như Johnson & Johnson, Janssen mang đến sản phẩm chất lượng cao</p>
                <span className="read-more">Xem đối tác →</span>
              </Link>
            </div>
            {/* Sản phẩm */}
            <div className="main-section-card products-section">
              <div className="section-header">
                <img src={process.env.PUBLIC_URL + '/sp.jpg'} alt="Sản phẩm" className="section-img" style={{width: '100%', maxWidth: '480px', aspectRatio: '16/9', borderRadius: '12px', margin: '0.2rem auto 0.7rem', display: 'block', boxShadow: '0 2px 12px rgba(62,86,65,0.10)', objectFit: 'cover'}} />
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
