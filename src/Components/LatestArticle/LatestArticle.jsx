import React from 'react'
import './LatestArticle.css'

// import title props........
import TitileTypeOne from '../../UI/TitileTypeOne/TitileTypeOne'
import { lettestArticleData } from '../../Data/Data'
import { Link } from 'react-router-dom'
import { ImFacebook } from 'react-icons/im'
import { FiInstagram } from 'react-icons/fi'
import { RiTwitterXLine } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'



function LatestArticle() {
  return (
    <section className='latestArticle'>
      <div className="container letest-article-container">
        <TitileTypeOne Title={'Latest Articles'} TitleTop={'Read our articles'}/>
        <div className="latest-article-content">
          {
            lettestArticleData.map(({titLink,title,date,instLink,fbLink,twitaLink,inspiration,image},index)=>{
              return(
                <article className='latest-article' key={index}>
                  <div className="article-image">
                    <img src={image} alt={image} />
                  </div>
                  <div className="article-info">
                    <h5>{date}</h5>
                    <Link to={titLink}><h3>{title}</h3></Link>
                  </div>
                  <div className="latest-article-social">
                    <p>{inspiration}</p>
                    <div className="article-social">
                      <a href={fbLink} target="_blank" rel="noopener noreferrer"><ImFacebook/></a>
                      <a href={instLink} target="_blank" rel="noopener noreferrer"><FiInstagram/></a>
                      <a href={twitaLink} target="_blank" rel="noopener noreferrer"><RiTwitterXLine/></a>
                    </div>
                  </div>
                </article>
              )
            })
          }
        </div>
        <Link to={'*'} className='btn btn-border'>read all articles <BsArrowRight/></Link>
      </div>
    </section>
  )
}

export default LatestArticle