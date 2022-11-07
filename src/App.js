import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Navbar1 from './Common/Navbar1';
import Navbar2 from './Common/Navbar2';
import Navbar3 from './Common/Navbar3';
import Firstpage from './Components/Firstpage';
import Secondpage from './Components/Secondpage'

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <Firstpage />
      <Secondpage />
    </div>
  );
}

export default App;
