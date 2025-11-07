import { Link } from "react-router-dom";
import "./Page.css";

export default function About() {
  return (
    <div className="page about-page">
      <div className="content">
        <h1 className="title">О проекте</h1>
        <p className="description">
          Этот проект демонстрирует возможности View Transitions API в React.
        </p>
        <div className="info-section">
          <div className="info-card">
            <h3>React Canary</h3>
            <p>
              Использует последнюю canary версию React с поддержкой
              экспериментальных функций, включая встроенную поддержку View
              Transitions API.
            </p>
          </div>
          <div className="info-card">
            <h3>React Router</h3>
            <p>
              React Router DOM обеспечивает навигацию в режиме SPA (Single Page
              Application) с поддержкой программных переходов и истории
              браузера.
            </p>
          </div>
        </div>
        <nav className="navigation">
          <Link to="/" className="nav-link">
            ← Главная
          </Link>
          <Link to="/contact" className="nav-link">
            Контакты →
          </Link>
        </nav>
      </div>
    </div>
  );
}
