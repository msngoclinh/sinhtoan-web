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
            <input type="text" placeholder="Tìm kiếm..." />
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
                  <li><Link to="/gioi-thieu">Về công ty</Link></li>
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
        <div className="page-header">
          <h1>Giới thiệu về SINH TOÀN</h1>
          <p className="page-subtitle">Công ty TNHH Thương mại Dịch vụ Sinh Toàn</p>
        </div>

        <div className="intro-tabs">
          <div className="tab-buttons">
            <button
              className={activeTab === 'about' ? 'active' : ''}
              onClick={() => setActiveTab('about')}
            >
            
              Lịch sử phát triển
            </button>
            <button
              className={activeTab === 'partners' ? 'active' : ''}
              onClick={() => setActiveTab('partners')}
            >
              Đối tác
            </button>
            <button
              className={activeTab === 'office' ? 'active' : ''}
              onClick={() => setActiveTab('office')}
            >
              Văn phòng phẩm
            </button>
            <button
              className={activeTab === 'medical' ? 'active' : ''}
              onClick={() => setActiveTab('medical')}
            >
              Thiết bị y tế
            </button>
            <button
              className={activeTab === 'fashion' ? 'active' : ''}
              onClick={() => setActiveTab('fashion')}
            >
              Thời trang
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'about' && (
              <div className="about-content">
                <h2>Về công ty</h2>
                <p>Công ty TNHH Thương mại Dịch vụ Sinh Toàn được thành lập vào ngày 24 tháng 11 năm 2011, là một trong những đơn vị tiên phong trong lĩnh vực cung cấp các sản phẩm y tế, văn phòng phẩm và thời trang chất lượng cao tại Việt Nam.</p>
                
                <p>Với hơn 12 năm kinh nghiệm trong ngành, SINH TOÀN đã khẳng định được vị thế của mình trên thị trường thông qua việc cung cấp các sản phẩm đa dạng, chất lượng và dịch vụ chuyên nghiệp.</p>
                
                <div className="company-stats">
                  <div className="stat-item">
                    <h3>12+</h3>
                    <p>Năm kinh nghiệm</p>
                  </div>
                  <div className="stat-item">
                    <h3>1000+</h3>
                    <p>Khách hàng tin tưởng</p>
                  </div>
                  <div className="stat-item">
                    <h3>100%</h3>
                    <p>Cam kết chất lượng</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="about-content">
                <h2>Lịch sử phát triển</h2>
                <p>Hành trình phát triển của SINH TOÀN từ năm 2011 đến nay đã ghi dấu nhiều cột mốc quan trọng.</p>
                <p><Link to="/lich-su-phat-trien" className="product-link">Xem chi tiết lịch sử phát triển →</Link></p>
              </div>
            )}

            {activeTab === 'partners' && (
              <div className="about-content">
                <h2>Đối tác</h2>
                <p>SINH TOÀN tự hào hợp tác với các đối tác uy tín như Johnson & Johnson và Janssen, mang đến những sản phẩm chất lượng cao nhất.</p>
                <p><Link to="/doi-tac" className="product-link">Xem chi tiết về đối tác →</Link></p>
              </div>
            )}

            {activeTab === 'office' && (
              <div className="about-content">
                <h2>Văn phòng phẩm</h2>
                <p>Chúng tôi cung cấp đa dạng các sản phẩm văn phòng phẩm chất lượng cao, phục vụ nhu cầu của doanh nghiệp và cá nhân.</p>
                <p><Link to="/san-pham/van-phong-pham" className="product-link">Xem sản phẩm văn phòng phẩm →</Link></p>
              </div>
            )}

            {activeTab === 'medical' && (
              <div className="about-content">
                <h2>Thiết bị y tế</h2>
                <p>Cung cấp các thiết bị y tế hiện đại, đảm bảo chất lượng và an toàn cho các cơ sở y tế trên toàn quốc.</p>
                <p><Link to="/san-pham/thiet-bi-y-te" className="product-link">Xem thiết bị y tế →</Link></p>
              </div>
            )}

            {activeTab === 'fashion' && (
              <div className="about-content">
                <h2>Thời trang</h2>
                <p>Bộ sưu tập thời trang hiện đại, phong cách, phù hợp với xu hướng thời đại và nhu cầu của khách hàng.</p>
                <p><Link to="/san-pham/thoi-trang" className="product-link">Xem sản phẩm thời trang →</Link></p>
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

export default GioiThieu;
