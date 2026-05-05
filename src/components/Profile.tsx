import { myProfile } from '../profileData';

export default function Profile() {
  return (
    <section id="profile" className="section-container">
      <h2>個人簡介</h2>
      <div className="card">
        <h3>{myProfile.name}</h3>
        <p><strong>關於我：</strong> {myProfile.bio}</p>
        <div>
          <strong>技能：</strong>
          <ul className="skill-list">
            {/* 這裡補上了 : string 和 : number 來明確定義型別，解決 TS7006 報錯 */}
            {myProfile.skills.map((skill: string, index: number) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}