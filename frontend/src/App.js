import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header/Header';
import Home from './components/layout/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from './components/layout/Footer/Footer';
import Contact from './components/layout/Contact/Contact';
import Directory from './components/layout/Directory/Directory';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/contact' element={<Contact />}/>
          <Route exact path='/directory' element={<Directory />}/>
        </Routes>
        <Footer/>
      </Router>


    </>
  );
}

export default App;
