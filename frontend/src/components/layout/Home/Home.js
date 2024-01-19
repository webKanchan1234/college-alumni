import Carousel from 'react-bootstrap/Carousel';
import "./home.css"
import CustomCarousel from '../Carousel/CustomCarousel';
import Service from '../Service/Service';
import Interview from '../Interview/Interview';
import Footer from '../Footer/Footer';
// import Slide1 from ""
// import Slide2 from "./slide2.jpg"
// import Slide3 from "./slide3.jpg"
// import Slide4 from "./slide4.jpg"

function Home() {
    
    return (
        <>
        <CustomCarousel/>
        <Service/>
        <Interview/>
        
        </>
    );
}

export default Home;