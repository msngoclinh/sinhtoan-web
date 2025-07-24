import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function LichSuPhatTrien() {
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
        <div className="page-header">
          <h1>Lịch sử hình thành và phát triển</h1>
          <p className="page-subtitle">Hành trình phát triển của SINH TOÀN từ năm 2011</p>
        </div>

        <div className="about-section">
          <div className="about-content">
            <h2>Khởi đầu và thành lập (2011)</h2>
            <p>Công ty TNHH Thương mại Dịch vụ Sinh Toàn được thành lập vào ngày 24 tháng 11 năm 2011, với sứ mệnh cung cấp các sản phẩm y tế chất lượng cao nhằm nâng cao sức khỏe cộng đồng. Ngay từ những ngày đầu, công ty đã tập trung vào việc xây dựng mối quan hệ bền vững với các nhà sản xuất uy tín.</p>
            
            <h2>Giai đoạn phát triển mạnh mẽ (2012-2015)</h2>
            <p>Quá trình phát triển của công ty diễn ra mạnh mẽ với việc mở rộng danh mục sản phẩm, bao gồm thiết bị y tế, dụng cụ y tế và các sản phẩm chăm sóc sức khỏe. Nhờ vào đội ngũ nhân viên chuyên nghiệp và tâm huyết, Sinh Toàn đã nhanh chóng khẳng định được vị thế trên thị trường, trở thành đối tác tin cậy của nhiều cơ sở y tế và bệnh viện.</p>
            
            <h2>Đổi mới và ứng dụng công nghệ (2016-2020)</h2>
            <p>Công ty không ngừng đổi mới và ứng dụng công nghệ vào quy trình kinh doanh, giúp tối ưu hóa dịch vụ và nâng cao trải nghiệm khách hàng. Trong giai đoạn này, SINH TOÀN đã mở rộng sang các lĩnh vực mới như văn phòng phẩm và thời trang, đáp ứng nhu cầu đa dạng của khách hàng.</p>
            
            <h2>Mở rộng và phát triển bền vững (2021-nay)</h2>
            <p>Với những nỗ lực không ngừng nghỉ, Công ty TNHH Thương mại Dịch vụ Sinh Toàn đã gặt hái được nhiều thành công và hiện đang tiếp tục mở rộng tầm ảnh hưởng trong các lĩnh vực kinh doanh. Công ty cam kết phát triển bền vững, đóng góp tích cực cho sự phát triển của cộng đồng và xã hội.</p>
          </div>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2011</div>
            <div className="timeline-content">
              <h3>Thành lập công ty</h3>
              <p>Công ty TNHH Thương mại Dịch vụ Sinh Toàn được thành lập vào ngày 24/11/2011</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2013</div>
            <div className="timeline-content">
              <h3>Mở rộng sản phẩm y tế</h3>
              <p>Bắt đầu cung cấp đa dạng thiết bị y tế và dụng cụ y tế chất lượng cao</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2016</div>
            <div className="timeline-content">
              <h3>Ứng dụng công nghệ</h3>
              <p>Triển khai hệ thống quản lý hiện đại, tối ưu hóa quy trình kinh doanh</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2019</div>
            <div className="timeline-content">
              <h3>Đa dạng hóa sản phẩm</h3>
              <p>Mở rộng sang lĩnh vực văn phòng phẩm và thời trang</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2023</div>
            <div className="timeline-content">
              <h3>Phát triển bền vững</h3>
              <p>Cam kết phát triển bền vững, đóng góp tích cực cho cộng đồng</p>
            </div>
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

export default LichSuPhatTrien;
