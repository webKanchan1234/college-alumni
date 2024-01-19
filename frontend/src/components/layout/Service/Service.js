import React from 'react'
import "./service.css"
import News from '../News/News'
import Career from '../Career/Career'
import Event from '../Event/Event'

const Service = () => {
  return (
    <div className='service-container'>
        <div className="latest-news">
            <News/>
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