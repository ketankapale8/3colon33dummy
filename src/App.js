// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/common/Navbar/Navbar';
import Aboutus from './components/Aboutus/Aboutus';
import Careers from './components/Careers/Carrers';
import Leadership from './components/Leadership/Leadership';
import Letstalk from './components/LetsTalk/Letstalk';
import Openings from './components/Openings/Openings';
import Services from './components/Services/Services';
import ApplicationEngg from './components/ApplicationEngg/ApplicationEngg';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Aboutus/>} path="/aboutus"/>
          <Route element={<Careers/>} path="/careers"/>
          <Route element={<Leadership/>} path="/leadership"/>
          <Route element={<Letstalk/>} path="/letstalk"/>
          <Route element={<Openings/>} path="/currentopenings"/>
          <Route element={<Services/>} path="/services"/>
          <Route element={<ApplicationEngg/>} path="/application-engg"/>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
