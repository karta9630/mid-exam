export default function About() {
  return (
    <section id="about" className="section-container">
      <h2>網站介紹</h2>
      <p>歡迎來到我的期中專案網站！</p>
      <p>本網站採用 React + TypeScript 開發，全站採用單頁式滾動設計 (Single Page Scroll)，包含以下核心：</p>
      <ul style={{ textAlign: 'left', display: 'inline-block' }}>
        <li><strong>網站介紹：</strong> 說明本專案的架構。</li>
        <li><strong>個人簡介：</strong> 展示 TypeScript 資料渲染。</li>
        <li><strong>小遊戲：</strong> 實作「猜拳遊戲」，展示 React 狀態管理。</li>
      </ul>
    </section>
  );
}