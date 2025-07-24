import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function ThietBiYTe() {
  return (
    <div className="App">
      <header className="main-header">
        <div className="container header-top">
          <div className="logo">
            <Link to="/">SINHTOAN</Link>
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
                  <li><Link to="/lich-su-phat-trien">Lịch sử phát triển</Link></li>
                  <li><Link to="/doi-tac">Đối tác</Link></li>
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
        <section className="banner" style={{background: '#fff', padding: 0}}>
          <div className="banner-image-full floating-banner" style={{position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', background: '#fff', minHeight: '340px', border: '4px solidrgb(79, 131, 101)'}}>
            <img src={process.env.PUBLIC_URL + '/tbyt.jpg'} alt="Banner Thiết bị y tế" style={{width: '100%', height: '100%', maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center', position: 'absolute', left: 0, top: 0, zIndex: 1, animation: 'floatBanner 6s ease-in-out infinite'}} />
            <div style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', background: 'rgba(198, 193, 193, 0.38)', zIndex: 2}}></div>
            <div className="banner-text" style={{position: 'relative', zIndex: 3, color: '#fff', width: '100%', padding: '2.5rem 2rem 2.5rem 2rem', textAlign: 'center', fontWeight: 900, letterSpacing: '1px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <h1 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.2rem', color: '#fff', textShadow: '0 4px 24px #000, 0 2px 8px #234d20', fontFamily: 'Montserrat, Arial, sans-serif'}}>THIẾT BỊ Y TẾ</h1>
            </div>
          </div>
        </section>

        <section className="product-details">
          <div className="product-grid">
            <div className="product-item">
              <img src={process.env.PUBLIC_URL + '/tbdl.jpg'} alt="Thiết bị đo lường" style={{width: '100%', maxWidth: '220px', borderRadius: '8px', margin: '0.5rem auto 1rem', display: 'block', boxShadow: '0 2px 12px rgba(62,86,65,0.10)'}} />
              <h3>Thiết bị đo lường</h3>
              <p>Máy đo huyết áp, nhiệt kế, máy đo đường huyết</p>
            </div>
            <div className="product-item">
             
              <img src={process.env.PUBLIC_URL + '/on.png'} alt="Dụng cụ y tế cơ bản" style={{width: '100%', maxWidth: '220px', borderRadius: '8px', margin: '0.5rem auto 1rem', display: 'block', boxShadow: '0 2px 12px rgba(62,86,65,0.10)'}} />
              <h3>Dụng cụ y tế cơ bản</h3>
              
              <p>Ống nghe, kính soi tai mũi họng, đèn pin y tế</p>
            </div>
            <div className="product-item">
              <img src={process.env.PUBLIC_URL + '/bong.jpg'} alt="Vật tư tiêu hao" style={{width: '100%', maxWidth: '220px', borderRadius: '8px', margin: '0.5rem auto 1rem', display: 'block', boxShadow: '0 2px 12px rgba(62,86,65,0.10)'}} />
              <h3>Vật tư tiêu hao</h3>

              <p>Băng gạc, bông y tế, kim tiêm, ống nghiệm</p>
            </div>
            <div className="product-item">
              <img src={process.env.PUBLIC_URL + '/hj.jpg'} alt="Thiết bị bảo hộ" style={{width: '100%', maxWidth: '220px', borderRadius: '8px', margin: '0.5rem auto 1rem', display: 'block', boxShadow: '0 2px 12px rgba(62,86,65,0.10)'}} />
              <h3>Thiết bị bảo hộ</h3>

              <p>Khẩu trang y tế, găng tay, áo blouse, kính bảo hộ</p>
            </div>
            <div className="product-item">
              <img src={process.env.PUBLIC_URL + '/ha.jpg'} alt="Máy móc chuyên dụng" style={{width: '100%', maxWidth: '220px', borderRadius: '8px', margin: '0.5rem auto 1rem', display: 'block', boxShadow: '0 2px 12px rgba(62,86,65,0.10)'}} />
              <h3>Máy móc chuyên dụng</h3>

              <p>Máy siêu âm, máy X-quang, máy xét nghiệm</p>
            </div>
            <div className="product-item">
              <img src={process.env.PUBLIC_URL + '/haa.png'} alt="Dụng cụ phẫu thuật" style={{width: '100%', maxWidth: '220px', borderRadius: '8px', margin: '0.5rem auto 1rem', display: 'block', boxShadow: '0 2px 12px rgba(62,86,65,0.10)'}} />
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
            <p><strong>Điện thoại:</strong> [Số điện thoại]</p>
            <p><strong>Email:</strong> [Email liên hệ]</p>
            <p><strong>Địa chỉ:</strong> [Địa chỉ công ty]</p>
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

export default ThietBiYTe;
