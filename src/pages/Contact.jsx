import { Link } from 'react-router-dom';
import './Page.css';

export default function Contact() {
  return (
    <div className="page contact-page">
      <div className="content">
        <h1 className="title">Контакты</h1>
        <p className="description">
          Свяжитесь с нами для получения дополнительной информации
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="icon">📧</div>
            <h3>Email</h3>
            <p>example@example.com</p>
          </div>
          <div className="contact-card">
            <div className="icon">💬</div>
            <h3>Telegram</h3>
            <p>@example</p>
          </div>
          <div className="contact-card">
            <div className="icon">🐙</div>
            <h3>GitHub</h3>
            <p>github.com/example</p>
          </div>
          <div className="contact-card">
            <div className="icon">🌐</div>
            <h3>Website</h3>
            <p>example.com</p>
          </div>
        </div>
        <nav className="navigation">
          <Link to="/" className="nav-link">← Главная</Link>
          <Link to="/about" className="nav-link">← О нас</Link>
        </nav>
      </div>
    </div>
  );
}

