import { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({theme: 'light', toggleTheme: () => {}});

export const ThemeProvider = ({ children }: { children: ReactNode} ) => {
  const [theme, setThemes] = useState('light');
  
  const toggleTheme = () => {
    setThemes((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): [string, () => void] => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  
  const { theme, toggleTheme } = context;
  return [theme, toggleTheme]
};