import React from 'react'
import "./career.css"
import { Link } from "react-router-dom"

const Career = () => {
    const news = [
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
            <div className='news'>
                <h2>Career Opportunities</h2>
                <div className="news-container">
                    {
                        news.map((data, key) => {
                            return (
                                <Link to="" className='news-box-link'>
                                    <div className="news-box">
                                        <div className="news-image">
                                            <img src={data.image} alt={data.heading} />
                                        </div>
                                        <div className="news-details">
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
            <div className="news-link-div">
                <Link to="" className='news-link'>View All News</Link>
            </div>
        </>
    )
}

export default Career