import { motion } from "motion/react";
import type { GithubUser } from "../types/user";

interface UserInfoProps {
  user: GithubUser | null;
  error: string | null;
}

const UserInfo = ({ user, error }: UserInfoProps) => {
  if (error) {
    return <p className="mt-6 text-center text-red-500 font-medium">{error}</p>;
  }

  if (!user) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 3, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="mt-6 p-6 bg-white shadow-lg rounded-xl max-w-2xl mx-auto">
        <div className="flex items-center gap-6">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-28 h-28 rounded-full border-2 border-gray-200 shadow-sm"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800">
              {user.login}
            </h2>
            {user.bio && (
              <p className="mt-2 text-gray-600 leading-snug">{user.bio}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-center text-sm sm:text-base">
          <div>
            <p className="text-gray-500">Followers</p>
            <p className="font-semibold text-gray-800">{user.followers}</p>
          </div>
          <div>
            <p className="text-gray-500">Following</p>
            <p className="font-semibold text-gray-800">{user.following}</p>
          </div>
          <div>
            <p className="text-gray-500">Repos</p>
            <p className="font-semibold text-gray-800">{user.public_repos}</p>
          </div>
          <div>
            <p className="text-gray-500">Location</p>
            <p className="font-semibold text-gray-800">
              {user.location || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserInfo;
