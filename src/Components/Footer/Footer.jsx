import React from 'react'
import './Footer.css'
import { FootersLinksData } from '../../Data/Data'
import { Link } from 'react-router-dom'
import CopyRight from '../CopyRight/CopyRight'

const Footer = () => {
  return (
    <footer>
      <div className="contaner footer-container">
        {/* ......about params..... */}
        <div>
          <h4>About Us</h4>
          <ul className="about-params param-links">
            {
              FootersLinksData.Aboutus.map(({link,linkname},index)=>{
                return(
                  <li key={index}><Link to={link}>{linkname}</Link></li>
                )
              })
            }
          </ul>
        </div>
        {/* ......Discover params..... */}
        <div>
          <h4>Discover Us</h4>
          <ul className="Discover-params param-links">
            {
              FootersLinksData.Discover.map(({link,linkname},index)=>{
                return(
                  <li key={index}><Link to={link}>{linkname}</Link></li>
                )
              })
            }
          </ul>
        </div>
        {/* ......My account params..... */}
        <div>
          <h4>My Accout</h4>
          <ul className="MyAccount-params param-links">
            {
              FootersLinksData.Myaccount.map(({link,linkname},index)=>{
                return(
                  <li key={index}><Link to={link}>{linkname}</Link></li>
                )
              })
            }
          </ul>
        </div>
        {/* ......Help params..... */}
        <div>
          <h4>Helps</h4>
          <ul className="Help-params param-links">
            {
              FootersLinksData.Help.map(({link,linkname},index)=>{
                return(
                  <li key={index}><Link to={link}>{linkname}</Link></li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <CopyRight/>
    </footer>
  )
}

export default Footer