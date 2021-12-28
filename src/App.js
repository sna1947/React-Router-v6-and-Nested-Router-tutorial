import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Header from './components/Header/Header';
import DashBoard from './components/DashBoard/DashBoard';
import DashHome from './components/DashBoard/DashHome';
import DashAbout from './components/DashBoard/DashAbout';

function App() {
  return (
    <div className="App">
     <h1>Welcome to React Router! v6 and Nested Router tutorial</h1>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />

        <Route path="dashboard" element={<DashBoard />}>
          <Route index element={<DashHome/>}/>
          <Route path='dashabout' element={<DashAbout/>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
