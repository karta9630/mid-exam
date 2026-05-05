export interface Profile {
  name: string;
  major: string;
  skills: string[];
  bio: string[];
}

export const myProfile: Profile = {
  name: "戴嘉豪", // 請改成你的名字
  major: "資訊工程系", // 請改成你的科系
  skills: ["C", "C++", "Python"],
  bio: ["金門大學資工系"]

};