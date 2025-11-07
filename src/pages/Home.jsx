import { Link } from 'react-router-dom';
import './Page.css';

export default function Home() {
  return (
    <div className="page home-page">
      <div className="content">
        <h1 className="title">Главная страница</h1>
        <p className="description">
          Добро пожаловать! Это демонстрация React View Transitions API с React Router.
        </p>
        <div className="features">
          <div className="feature-card">
            <h3>🚀 Плавные переходы</h3>
            <p>View Transitions API создает красивые анимации</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Высокая производительность</h3>
            <p>Нативная поддержка браузера для оптимальной скорости</p>
          </div>
          <div className="feature-card">
            <h3>🎨 Современный дизайн</h3>
            <p>Классический интерфейс с чистым дизайном</p>
          </div>
        </div>
        <nav className="navigation">
          <Link to="/about" className="nav-link">О нас →</Link>
          <Link to="/contact" className="nav-link">Контакты →</Link>
        </nav>
      </div>
    </div>
  );
}

