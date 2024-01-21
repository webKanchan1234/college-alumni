import React from 'react'
import "./newsdetails.css"
import { Link } from "react-router-dom"

const NewsDetails = () => {
  const data = {
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    title: "OBJECTIVES SHOULD BE STATED CLEARLY",
    description: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum."
  }
  return (
    <div className='newsdetails-container'>
      <div className="newsdetails-left">
        <div className="newsdetails-images-box">
          <img src={data.image} alt="" />
        </div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <h3>3 comments Found</h3>
      </div>
      <div className="newsdetails-right">
        <h2>Search</h2>
        <hr />
        <input type="text" name="" id="" placeholder='Search' />
        <h2>Recent Post</h2>
        <hr />
        <div className="search-link">
          <Link to="" id='search-link'>My Interview Was Extraordinary And Educative</Link>
          <hr id='hr'/>
        </div>
        <div className="search-link">
          <Link to="" id='search-link'>My Interview Was Extraordinary And Educative</Link>
          <hr id='hr'/>
        </div>

      </div>
    </div>
  )
}

export default NewsDetails