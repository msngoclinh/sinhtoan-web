import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import VanPhongPham from './pages/VanPhongPham';
import ThietBiYTe from './pages/ThietBiYTe';
import ThoiTrang from './pages/ThoiTrang';

const historyContent = (
  <div className="about-content">
    <h2>Lịch sử hình thành và phát triển</h2>
    <p>Công ty TNHH Thương mại Dịch vụ Sinh Toàn được thành lập vào ngày 24 tháng 11 năm 2011, với sứ mệnh cung cấp các sản phẩm y tế chất lượng cao nhằm nâng cao sức khỏe cộng đồng. Ngay từ những ngày đầu, công ty đã tập trung vào việc xây dựng mối quan hệ bền vững với các nhà sản xuất uy tín.</p>
    <p>Quá trình phát triển của công ty diễn ra mạnh mẽ với việc mở rộng danh mục sản phẩm, bao gồm thiết bị y tế, dụng cụ y tế và các sản phẩm chăm sóc sức khỏe. Nhờ vào đội ngũ nhân viên chuyên nghiệp và tâm huyết, Sinh Toàn đã nhanh chóng khẳng định được vị thế trên thị trường, trở thành đối tác tin cậy của nhiều cơ sở y tế và bệnh viện.</p>
    <p>Hơn nữa, công ty không ngừng đổi mới và ứng dụng công nghệ vào quy trình kinh doanh, giúp tối ưu hóa dịch vụ và nâng cao trải nghiệm khách hàng. Với những nỗ lực không ngừng nghỉ, Công ty TNHH Thương mại Dịch vụ Sinh Toàn đã gặt hái được nhiều thành công và hiện đang tiếp tục mở rộng tầm ảnh hưởng trong lĩnh vực y tế.</p>
  </div>
);

const partnerContent = (
  <div className="about-content">
    <h2>Về đối tác</h2>
    <p>Sinh Toàn tự hào hợp tác với hai đối tác lớn trong ngành y tế là Johnson & Johnson và Janssen. Johnson & Johnson, với hơn 130 năm kinh nghiệm, là một trong những tập đoàn hàng đầu thế giới trong lĩnh vực sản xuất sản phẩm chăm sóc sức khỏe và thiết bị y tế.</p>
    <p>Cùng với đó, Janssen, thành viên của Johnson & Johnson, chuyên phát triển các giải pháp y tế sáng tạo, từ dược phẩm đến các liệu pháp điều trị tiên tiến.</p>
    <p>Sự hợp tác này không chỉ giúp Sinh Toàn cung cấp các sản phẩm chất lượng cao mà còn nâng cao khả năng phục vụ và đáp ứng nhu cầu của cộng đồng.</p>
  </div>
);

function HomePage() {
  const [aboutTab, setAboutTab] = useState('history');

  return (
    <div className="App">
      <header className="main-header">
        <div className="container header-top">
          <div className="logo">SINH TOÀN</div>
          <div className="search-bar">
            <input type="text" placeholder="Nhập tên sản phẩm" />
            <button type="submit">🔍</button>
          </div>
        </div>
        <nav className="main-nav">
          <div className="container">
            <ul>
              <li className="dropdown">
                <a href="#gioithieu">Giới thiệu ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="#lichsu" onClick={() => setAboutTab('history')}>Về lịch sử hình thành và phát triển</a></li>
                  <li><a href="#doitac" onClick={() => setAboutTab('partner')}>Về đối tác</a></li>
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
        <section className="banner">
          <h1>Chào mừng đến với SINH TOÀN</h1>
          <p>Chuyên cung cấp Văn phòng phẩm, Thiết bị y tế, Thời trang chất lượng</p>
        </section>

        {/* About Section */}
        <section className="about-section">
          {aboutTab === 'history' && historyContent}
          {aboutTab === 'partner' && partnerContent}
        </section>

        <section className="products" id="sanpham">
          <div className="product" id="vanphongpham">
            <h2>Văn phòng phẩm</h2>
            <p>Đa dạng sản phẩm văn phòng phẩm cho doanh nghiệp và cá nhân.</p>
            <Link to="/san-pham/van-phong-pham" className="product-link">Xem chi tiết →</Link>
          </div>
          <div className="product" id="thietbiyte">
            <h2>Thiết bị y tế</h2>
            <p>Cung cấp thiết bị y tế đảm bảo chất lượng, an toàn.</p>
            <Link to="/san-pham/thiet-bi-y-te" className="product-link">Xem chi tiết →</Link>
          </div>
          <div className="product" id="thoitrang">
            <h2>Thời trang</h2>
            <p>Bộ sưu tập thời trang hiện đại, phong cách.</p>
            <Link to="/san-pham/thoi-trang" className="product-link">Xem chi tiết →</Link>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SINH TOÀN. All rights reserved.</p>
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
        <Route path="/san-pham/van-phong-pham" element={<VanPhongPham />} />
        <Route path="/san-pham/thiet-bi-y-te" element={<ThietBiYTe />} />
        <Route path="/san-pham/thoi-trang" element={<ThoiTrang />} />
      </Routes>
    </Router>
  );
}

export default App;
