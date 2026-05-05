export interface Profile {
  name: string;
  major: string;
  skills: string[];
  bio: string;
}

export const myProfile: Profile = {
  name: "你的名字", // 請改成你的名字
  major: "資訊工程系", // 請改成你的科系
  skills: ["React", "TypeScript", "HTML/CSS", "JavaScript"],
  bio: "這是一段個人簡介。這是我使用 React 與 TypeScript 開發的期中專案網站，包含了元件化設計與狀態管理。"
};