export default function About() {
  return (
    <section id="about" className="section-container">
      <h2>網站介紹</h2>
      <p>期中專案網站！</p>
      <p>本網站採用 React + TypeScript 開發，全站採用單頁式滾動設計 (Single Page Scroll)，包含以下核心：</p>
      <ul style={{ textAlign: 'left', display: 'inline-block' }}>
        <li><strong>網站介紹：</strong> 期中專案。</li>
        <li><strong>個人簡介</strong> </li>
        <li><strong>小遊戲：</strong>猜拳遊戲</li>
      </ul>
    </section>
  );
}