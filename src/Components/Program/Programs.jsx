import React from 'react'
import './Programs.css'
import prgm1 from '../../Assets/2.jpg'
import prgm2 from '../../Assets/3.jpg'
import prgm3 from '../../Assets/4.jpg'


const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={prgm1} alt="" />
            <div className="caption">
              <img src="" alt="" />
              <h2>Farm</h2>
            </div>
        </div>
        <div className="program">
            <img src={prgm2} alt="" />
            <div className="caption">
              <img src="" alt="" />
              <h2>to</h2>
            </div>
        </div>
        <div className="program">
            <img src={prgm3} alt="" />
            <div className="caption">
              <img src="" alt="" />
              <h2>Table</h2>
            </div>
        </div>
    </div>
  )
}

export default Programs