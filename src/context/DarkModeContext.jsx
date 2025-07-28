import { useContext, useState } from "react";
import { createContext } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(null);

  const toggleMode = () => setIsDark((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useTheme = () => useContext(DarkModeContext);
