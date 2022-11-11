import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Navbar1 from "./Common/Navbar1";
import Navbar2 from "./Common/Navbar2";
import Navbar3 from "./Common/Navbar3";
import Firstpage from "./Components/Firstpage";
import Secondpage from "./Components/Secondpage";
import Counter from "./Components/Counter";
import Testfile from "./Components/Testfile";
import Thirdpage from './Components/Thirdpage'


function App() {
  return (
    <div className="App">
      <div>
        <Navbar1 />
        <Navbar2 />
        <Navbar3 />
      </div>
      <div>
        <Firstpage />
      </div>
      <div className="margindiv">
        <Counter />
      </div>
      <div className="margindiv">
        <Secondpage />
      </div>
      <div className="margindiv">
        <Thirdpage />
      </div>

      

      {/* <Testfile /> */}
    </div>
  );
}

export default App;
