import Carousel from 'react-bootstrap/Carousel';
import "./custom.css"
// import Slide1 from ""
// import Slide2 from "./slide2.jpg"
// import Slide3 from "./slide3.jpg"
// import Slide4 from "./slide4.jpg"

function CustomCarousel() {
    const carousels = [
        {
            image: "./images/slide1.jpg",
            alt: "First Slide",
            title: "First slide label",
            desc: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            image: "./images/slide2.jpg",
            alt: "Second Slide",
            title: "Second slide label",
            desc: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            image: "./images/slide3.jpg",
            alt: "First Slide",
            title: "Third slide label",
            desc: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        }
    ]
    return (
        <Carousel data-bs-theme="dark">
            {
                carousels.map((data, key) => {
                    return (
                        <Carousel.Item className='carousel'>
                            <div className='custom-caption'>
                                {/* <div className="carousel-box">
                                    <h2>Title</h2>
                                    <p>description</p>
                                    <button>Read story</button>
                                </div> */}
                            </div>
                            <img
                                className="d-block w-100"
                                src={data.image}
                                alt={data.alt}
                            />

                            <Carousel.Caption>
                                <h5>{data.title}</h5>
                                <p >{data.desc}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    );
}

export default CustomCarousel;