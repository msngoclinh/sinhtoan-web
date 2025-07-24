import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function DoiTac() {
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
        <div className="page-header">
          <h1>Đối tác của SINH TOÀN</h1>
          <p className="page-subtitle">Mạng lưới đối tác uy tín và đáng tin cậy</p>
        </div>

        <div className="about-section">
          <div className="about-content">
            <h2>Về đối tác</h2>
            <p>Sinh Toàn tự hào hợp tác với hai đối tác lớn trong ngành y tế là Johnson & Johnson và Janssen. Johnson & Johnson, với hơn 130 năm kinh nghiệm, là một trong những tập đoàn hàng đầu thế giới trong lĩnh vực sản xuất sản phẩm chăm sóc sức khỏe và thiết bị y tế.</p>
            <p>Cùng với đó, Janssen, thành viên của Johnson & Johnson, chuyên phát triển các giải pháp y tế sáng tạo, từ dược phẩm đến các liệu pháp điều trị tiên tiến.</p>
            <p>Sự hợp tác này không chỉ giúp Sinh Toàn cung cấp các sản phẩm chất lượng cao mà còn nâng cao khả năng phục vụ và đáp ứng nhu cầu của cộng đồng.</p>
          </div>
        </div>

        <div className="partners-section">
          <h3>Đối tác chính</h3>
          <div className="partners-grid">
            <div className="partner-item">
              <div className="partner-logo">Johnson & Johnson</div>
              <p>Tập đoàn y tế hàng đầu thế giới với hơn 130 năm kinh nghiệm trong lĩnh vực chăm sóc sức khỏe</p>
            </div>
            <div className="partner-item">
              <div className="partner-logo">Janssen</div>
              <p>Công ty dược phẩm thuộc Johnson & Johnson, chuyên phát triển các giải pháp y tế tiên tiến</p>
            </div>
          </div>
        </div>

        <div className="partnership-benefits">
          <h3>Lợi ích từ sự hợp tác</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Chất lượng đảm bảo</h4>
              <p>Sản phẩm từ các đối tác uy tín đảm bảo chất lượng cao nhất, đáp ứng các tiêu chuẩn quốc tế</p>
            </div>
            <div className="benefit-item">
              <h4>Công nghệ tiên tiến</h4>
              <p>Tiếp cận những công nghệ y tế mới nhất và hiện đại nhất từ các tập đoàn hàng đầu</p>
            </div>
            <div className="benefit-item">
              <h4>Hỗ trợ chuyên nghiệp</h4>
              <p>Được hỗ trợ kỹ thuật và đào tạo chuyên nghiệp từ đội ngũ chuyên gia quốc tế</p>
            </div>
            <div className="benefit-item">
              <h4>Cập nhật liên tục</h4>
              <p>Luôn được cập nhật những sản phẩm và giải pháp mới nhất trong lĩnh vực y tế</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <div className="about-content">
            <h2>Khách hàng tin tưởng</h2>
            <p>Với sự hỗ trợ từ các đối tác uy tín, SINH TOÀN đã phục vụ thành công nhiều khách hàng lớn:</p>
            <div className="customer-list">
              <ul>
                <li>Các bệnh viện công và tư nhân trên toàn quốc</li>
                <li>Các phòng khám chuyên khoa</li>
                <li>Trung tâm y tế cộng đồng</li>
                <li>Các doanh nghiệp và tập đoàn lớn</li>
                <li>Cơ quan nhà nước và tổ chức phi lợi nhuận</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-section">
          <div className="about-content">
            <h2>Cam kết hợp tác</h2>
            <p>SINH TOÀN cam kết duy trì và phát triển mối quan hệ hợp tác lâu dài với các đối tác, đảm bảo:</p>
            <ul>
              <li><strong>Tuân thủ nghiêm ngặt:</strong> Các quy định và tiêu chuẩn của đối tác</li>
              <li><strong>Phát triển bền vững:</strong> Xây dựng mối quan hệ hợp tác win-win</li>
              <li><strong>Đổi mới liên tục:</strong> Cập nhật và áp dụng những tiến bộ mới nhất</li>
              <li><strong>Phục vụ tận tâm:</strong> Đặt lợi ích khách hàng lên hàng đầu</li>
            </ul>
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
                📍 Địa chỉ: Lầu 9, Tòa nhà Viễn Đông, số 14<br />
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

export default DoiTac;
