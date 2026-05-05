import About from './components/About';
import Profile from './components/Profile';
import Game from './components/Game';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <a href="#about">網站介紹</a>
        <a href="#profile">個人簡介</a>
        <a href="#game">小遊戲</a>
      </nav>
      <main>
        <About />
        <Profile />
        <Game />
      </main>
    </div>
  );
}