import { CiSearch } from "react-icons/ci";
import type { GithubUser } from "../types/user";
import { useState } from "react";
import githubAPI from "../api/github";

interface UserSearchProps {
  handleSearch: (user: GithubUser | null, error: string | null) => void;
}

const UserSearch = ({ handleSearch }: UserSearchProps) => {
  const [userName, setUserName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUser = async () => {
    if (!userName.trim()) return;

    try {
      setLoading(true);
      const res = await githubAPI.get<GithubUser>(`${userName}`);
      handleSearch(res.data, null);
    } catch {
      handleSearch(null, "User Not Found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mt-9 w-full">
      <CiSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-[24px]" />
      <input
        type="text"
        placeholder="Search GitHub username…"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="py-[22px] pl-12 pr-24 bg-[#FEFEFE] w-full rounded-[15px] focus:outline-none"
      />
      <button
        onClick={fetchUser}
        disabled={loading}
        className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
};

export default UserSearch;
