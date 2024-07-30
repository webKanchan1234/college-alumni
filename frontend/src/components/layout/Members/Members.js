import React, { useEffect } from 'react'
import "./members.css"
import { Link } from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { allUsers } from '../../../action/userAction'

const Members = () => {
    const dispatch = useDispatch()
    const {users} = useSelector(state=>state.allUsers)
    console.log(users)
    console.log("users")

    useEffect(() => {
      dispatch(allUsers())
    }, [])
    
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
                    users.map((data, idx) => {
                        return (
                            <Link to="" className="member-card">
                                <div className='member-card-img'>
                                    <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
                                    {/* <img src={data.image} alt="" /> */}
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