import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function GioiThieu() {
  const [activeTab, setActiveTab] = useState('about');

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
              <li className="dropdown active">
                <Link to="/gioi-thieu">Giới thiệu ▾</Link>
                <ul className="dropdown-menu">
                  <li><button onClick={() => setActiveTab('about')}>Về công ty</button></li>
                  <li><button onClick={() => setActiveTab('history')}>Lịch sử phát triển</button></li>
                  <li><button onClick={() => setActiveTab('vision')}>Tầm nhìn - Sứ mệnh</button></li>
                  <li><button onClick={() => setActiveTab('team')}>Đội ngũ</button></li>
                  <li><button onClick={() => setActiveTab('partners')}>Đối tác</button></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#sanpham">Sản phẩm ▾</a>
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
          <h1>Giới thiệu về SINH TOÀN</h1>
          <p className="page-subtitle">Công ty TNHH Thương mại Dịch vụ Sinh Toàn</p>
        </div>

        <div className="intro-tabs">
          <div className="tab-buttons">
            {['about', 'history', 'vision', 'team', 'partners'].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? 'active' : ''}
                onClick={() => setActiveTab(tab)}
              >
                {{
                  about: 'Về công ty',
                  history: 'Lịch sử phát triển',
                  vision: 'Tầm nhìn - Sứ mệnh',
                  team: 'Đội ngũ',
                  partners: 'Đối tác',
                }[tab]}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === 'about' && (
              <div className="about-content">
                {/* ... giữ nguyên phần nội dung "about" */}
              </div>
            )}

            {activeTab === 'history' && (
              <div className="about-content">
                {/* ... giữ nguyên phần nội dung "history" */}
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="about-content">
                {/* ... giữ nguyên phần nội dung "vision" */}
              </div>
            )}

            {activeTab === 'team' && (
              <div className="about-content">
                {/* ... giữ nguyên phần nội dung "team" */}
              </div>
            )}

            {activeTab === 'partners' && (
              <div className="about-content">
                {/* ... giữ nguyên phần nội dung "partners" */}
              </div>
            )}
          </div>
        </div>
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
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} SINH TOÀN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default GioiThieu;

