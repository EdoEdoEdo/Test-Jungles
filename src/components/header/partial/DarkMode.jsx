import { FaMoon, FaSun } from 'react-icons/fa';
import { useState } from 'react';
import { Toggler, LightToggle, DarkToggle } from "../header";
export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false);
  const changeTheme = () => {
    document.body.classList.toggle('dark');
    setDarkMode(!darkMode);
  };
  return (
    <Toggler onClick={changeTheme}>
      {darkMode ? (
        <LightToggle>
          <FaSun /> <p>Light Mode</p>
        </LightToggle>
      ) : (
        <DarkToggle>
          <FaMoon />
          <p>Dark Mode</p>
        </DarkToggle>
      )}
    </Toggler>
  );
}