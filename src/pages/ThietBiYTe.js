import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function ThietBiYTe() {
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
          <h1>Thiết bị y tế</h1>
          <p>Cung cấp thiết bị y tế đảm bảo chất lượng, an toàn cho các cơ sở y tế</p>
        </section>

        <section className="product-details">
          <div className="product-grid">
            <div className="product-item">
              <h3>Thiết bị đo lường</h3>
              <p>Máy đo huyết áp, nhiệt kế, máy đo đường huyết</p>
            </div>
            <div className="product-item">
              <h3>Dụng cụ y tế cơ bản</h3>
              <p>Ống nghe, kính soi tai mũi họng, đèn pin y tế</p>
            </div>
            <div className="product-item">
              <h3>Vật tư tiêu hao</h3>
              <p>Băng gạc, bông y tế, kim tiêm, ống nghiệm</p>
            </div>
            <div className="product-item">
              <h3>Thiết bị bảo hộ</h3>
              <p>Khẩu trang y tế, găng tay, áo blouse, kính bảo hộ</p>
            </div>
            <div className="product-item">
              <h3>Máy móc chuyên dụng</h3>
              <p>Máy siêu âm, máy X-quang, máy xét nghiệm</p>
            </div>
            <div className="product-item">
              <h3>Dụng cụ phẫu thuật</h3>
              <p>Dao mổ, kéo y tế, kẹp y tế, dụng cụ nội soi</p>
            </div>
          </div>
        </section>

        <section className="quality-assurance">
          <h2>Cam kết chất lượng</h2>
          <div className="quality-points">
            <div className="quality-item">
              <h4>✓ Chứng nhận FDA</h4>
              <p>Tất cả sản phẩm đều có chứng nhận FDA và các tiêu chuẩn quốc tế</p>
            </div>
            <div className="quality-item">
              <h4>✓ Bảo hành chính hãng</h4>
              <p>Bảo hành từ 1-5 năm tùy theo từng loại sản phẩm</p>
            </div>
            <div className="quality-item">
              <h4>✓ Hỗ trợ kỹ thuật</h4>
              <p>Đội ngũ kỹ thuật viên chuyên nghiệp hỗ trợ 24/7</p>
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
          <p>&copy; {new Date().getFullYear()} SINH TOÀN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ThietBiYTe;
