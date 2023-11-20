import React from "react";
import { useDarkMode } from "../DarkModeContext/DarkModeContext";
import moon from "../../../../public/icon/half-moon.png";
import clound from "../../../../public/icon/cloudy.png";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="toggle-button  hover:animate-bounce    "
    >
      {isDarkMode ? (
        <span role="img" aria-label="Moon Icon">
          <img width={40} height={40} src={moon} />
        </span>
      ) : (
        <span role="img" aria-label="Sun Icon">
          <img width={40} height={40} src={clound} />
        </span>
      )}
    </button>
  );
};

export default DarkModeToggle;
