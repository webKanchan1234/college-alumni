import React from 'react'
import "./service.css"
import Career from '../Career/Career'
import Event from '../Event/Event'
import LatestNews from '../LatestNews/LatestNews'

const Service = () => {
  return (
    <div className='service-container'>
        <div className="latest-news">
            <LatestNews/>
        </div>
        <div className="careeer-opportunities">
          <Career/>
        </div>
        <div className="event-calendar">
          <Event/>
        </div>
    </div>
  )
}

export default Service