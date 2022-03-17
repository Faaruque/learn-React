import "./App.css";
import FuntionalComponents from "./components/FuntionalComponent/FuntionalComponents/index";
import ClassComponents from "./components/ClassComponent/ClassComponents/index";
import PropsWithClass from "./components/ClassComponent/PropsWithClass/index";
import PropsWithFuntional from "./components/FuntionalComponent/PropsWithFuntional/index";
import FuntionBotton from "./components/Botton/FuntionBotton";
import ClassBotton from "./components/Botton/ClassBotton";
import ClassBottonArguments from "./components/Botton/ClassBottonArguments";
import FuntionBottonArguments from "./components/Botton/FuntionBottonArguments";

function App() {
  return (
    <div className="App">
      {/* FuntionalComponents */}
      <FuntionalComponents />
      <br />
      <br />

      {/* ClassComponents */}
      <ClassComponents />

      {/* PropsWithFuntional */}
      <PropsWithFuntional name="Faruque" age="21" desc="Web Devloper" />
      <PropsWithFuntional name="Millad" age="22" desc="Doctor" />
      <PropsWithFuntional name="Motaleb" age="23" desc="Graphics Disgenr" />

      {/* PropsWithClass */}
      <PropsWithClass
        tittle="Hello World"
        tittleDesc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia
          aut aperiam repellat possimus hic voluptate veritatis,"
      />
      <FuntionBotton />
      <ClassBotton />
      <FuntionBottonArguments />
      <ClassBottonArguments />
    </div>
  );
}

export default App;
