import React from 'react'
import './CopyRight.css'
import { FootersLinksData } from '../../Data/Data'
import { Link } from 'react-router-dom'

const CopyRight = () => {
  return (
    <div className='footer-copyright'>
        <div className="container copyright-container">
            <p>Copyright 2024. All rights reserved.</p>
            <div className="footer-socials">
                {
                    FootersLinksData.socials.map((item,index)=>{
                        return(
                            <Link to={item.link} key={index}>
                                <item.icon/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default CopyRight