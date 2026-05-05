import { myProfile } from '../../profileData';

export default function Profile() {
  return (
    <section id="profile" className="section-container">
      <h2>個人簡介</h2>
      <div className="card">
        <h3>{myProfile.name}</h3>
        <p><strong>科系：</strong> {myProfile.major}</p>
        <p><strong>關於我：</strong> {myProfile.bio}</p>
        <div>
          <strong>技能：</strong>
          <ul className="skill-list">
            {myProfile.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}