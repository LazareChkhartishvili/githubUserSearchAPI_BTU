import { motion } from "motion/react";
import { CiDark } from "react-icons/ci";
import { MdSunny } from "react-icons/md";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (e: boolean) => void;
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <div className="flex justify-between">
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 3, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>devfinder</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 3, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-4"
        >
          <h2>{darkMode ? "Light" : "Dark"}</h2>
          {darkMode ? (
            <MdSunny size={20} color="#FFFFFF" />
          ) : (
            <CiDark size={20} color="#697C9A" />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
