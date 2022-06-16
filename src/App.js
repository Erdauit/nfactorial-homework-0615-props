import { useState } from "react";
import { DefaultContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";


export default function App() {
  const [fan, setFan] = useState("");
  const [theme, setTheme] = useState("light");

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };

  const handleSetTheme = (theme) => {
    console.log(theme);
    if(theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <DefaultContext.Provider value={{ handleCreateFan, handleSetTheme }}>
      <Header fan={fan} handleSetTheme={ handleSetTheme } theme={theme}/>
      <hr style={{color: "black"}}/>
      <Content handleSetTheme={ handleSetTheme } theme={theme} />
      <Footer handleSetTheme={ handleSetTheme } theme={theme}/>
    </DefaultContext.Provider>
  );
}
