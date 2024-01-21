import React from 'react'
import "./gallery.css"

const Gallery = () => {
    const images = [
        {
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        }
    ]
    return (
        <div className='gallery-container'>
            <h2>Alumni Gallery</h2>
            <div className="image-box">
                {
                    images.map((data, idx) => {
                        return (
                            <div className="image-card" key={idx}>
                                <img src={data.image} alt="image" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Gallery