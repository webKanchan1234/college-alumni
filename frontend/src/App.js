import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header/Header';
import Home from './components/layout/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from './components/layout/Footer/Footer';
import Contact from './components/layout/Contact/Contact';
import Directory from './components/layout/Directory/Directory';
import Login from './components/user/Login/Login';
import Register from './components/user/Register/Register';
import Gallery from './components/layout/Gallery/Gallery';
import News from './components/layout/News/News';
import NewsDetails from './components/layout/NewsDetails/NewsDetails';
import Sponsorship from './components/layout/Sponsorship/Sponsorship';
import Members from './components/layout/Members/Members';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/contact' element={<Contact />}/>
          <Route exact path='/directory' element={<Directory />}/>
          <Route exact path='/login' element={<Login />}/>
          <Route exact path='/register' element={<Register />}/>
          <Route exact path='/gallery' element={<Gallery />}/>
          <Route exact path='/news' element={<News />}/>
          <Route exact path='/news/:id' element={<NewsDetails />}/>
          <Route exact path='/sponsorship' element={<Sponsorship />}/>
          <Route exact path='/members' element={<Members />}/>
        </Routes>
        <Footer/>
      </Router>


    </>
  );
}

export default App;
