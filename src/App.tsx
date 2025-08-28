import { useEffect, useState } from "react";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import UserSearch from "./components/UserSearch";
import type { GithubUser } from "./types/user";
import githubAPI from "./api/github";

const App = () => {
  const [userData, setUserData] = useState<GithubUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleSearch = (user: GithubUser | null, err: string | null) => {
    setUserData(user);
    setError(err);
  };

  useEffect(() => {
    const fetchDefaultUser = async () => {
      try {
        const res = await githubAPI.get<GithubUser>("lazzzare");
        setUserData(res.data);
        setError(null);
      } catch {
        setError("Default User Not Found");
      }
    };

    fetchDefaultUser();
  }, []);

  return (
    <div
      className={`w-full min-h-screen flex items-center justify-center ${
        darkMode ? "bg-[#141D2F]" : "bg-[#F6F8FF]"
      } `}
    >
      <div className="max-w-[730px] w-full">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <UserSearch handleSearch={handleSearch} />
        <UserInfo user={userData} error={error} />
      </div>
    </div>
  );
};

export default App;
