import React from 'react'
import "./interview.css"
import {Link} from "react-router-dom"

const Interview = () => {
    return (
        <div className='interview-container'>
            <div className="interview-left"></div>
            <div className="interview-right">
                <div className="interview-right-box">
                    <p>Alumni Interview</p>
                    <h3>Kanchan Kumar</h3>
                    <p>Alumni Interview
                        Hannah Jordan
                        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                    <Link to="" className='interview-right-box-story'>See Story</Link>
                </div>
            </div>
        </div>
    )
}

export default Interview