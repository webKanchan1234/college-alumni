import React from 'react'
import "./members.css"
import { Link } from "react-router-dom"

const Members = () => {
    const members = [
        {
            image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            name: "xyz"
        },
        {
            image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            name: "xyz"
        },
        {
            image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            name: "xyz"
        },
        {
            image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            name: "xyz"
        }
    ]
    return (
        <div className='members'>
            <h3>Members</h3>
            <div className="members-container">
                {
                    members.map((data, idx) => {
                        return (
                            <Link to="" className="member-card">
                                <div className='member-card-img'>
                                    <img src={data.image} alt="" />
                                </div>
                                <p>{data.name}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Members