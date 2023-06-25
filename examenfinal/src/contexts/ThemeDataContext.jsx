import { useState, useEffect, createContext } from "react";
export const ThemeDataContext = createContext();

function ThemeDataProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState();

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    async function fetchingData() {
      try {
        const dataResponse = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const data = await dataResponse.json();

        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchingData();
    
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeDataContext.Provider value={{ theme, data, toggleTheme }}>
      {children}
    </ThemeDataContext.Provider>
  );
}
export default ThemeDataProvider;
