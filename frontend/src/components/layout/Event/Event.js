import React from 'react'
import "./event.css"
import { Link } from "react-router-dom"

const Event = () => {
    const latestnews = [
        {
            image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            heading: "Objectives Should Be Stated Clearly",
            desc: "description"
        },
        {
            image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            heading: "Objectives Should Be Stated Clearly",
            desc: "description"
        },
        {
            image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            heading: "Objectives Should Be Stated Clearly",
            desc: "description"
        },
        {
            image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            heading: "Objectives Should Be Stated Clearly",
            desc: "description"
        },
        {
            image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            heading: "Objectives Should Be Stated Clearly",
            desc: "description"
        },
        {
            image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            heading: "Objectives Should Be Stated Clearly",
            desc: "description"
        },
        {
            image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            heading: "Objectives Should Be Stated Clearly",
            desc: "description"
        },
        {
            image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            heading: "Objectives Should Be Stated Clearly",
            desc: "description"
        }
    ]
    return (
        <>
            <div className='latestlatestnews'>
                <h2>Event Calendar</h2>
                <div className="latestnews-container">
                    {
                        latestnews.map((data, key) => {
                            return (
                                <Link to="" className='latestnews-box-link'>
                                    <div className="latestnews-box">
                                        <div className="latestnews-image">
                                            <img src={data.image} alt={data.heading} />
                                        </div>
                                        <div className="latestnews-details">
                                            <h3>{data.heading}</h3>
                                            <p>{data.desc}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>

            </div>
            <div className="latestnews-link-div">
                <Link to="" className='latestnews-link'>View All latestnews</Link>
            </div>
        </>
    )
}

export default Event