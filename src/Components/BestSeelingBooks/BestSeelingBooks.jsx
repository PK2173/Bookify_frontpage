import React from 'react'
import './BestSeelingBooks.css'

// import titile Props
import TitileTypeTwo from '../../UI/TitileTypeTwo/TitileTypeTwo';

// import tree shape.......
import TreeShape from '../../assets/treeShape.png';
import { sellingBooksData } from '../../Data/Data';

// import link
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

// import react icons


const BestSeelingBooks = () => {
  return (
    <div className='BestSeelingBooks'>
      {/* .....Selling Book tree shape..... */}
      <div className="treeShape">
        <img src={TreeShape} alt='TreeShape' />
      </div>

      {/* .....Selling Book title..... */}
        {
          sellingBooksData.map(({img,infoTitle,infoTitleTop,desc,price,
            shopbtnLink})=>{
              return (
            <div className="container bestselling-container">
              <div className="selling-book-left">
                <img src={img} alt='sellingBook' />
              </div>  
              <div className="selling-book-right">
                <TitileTypeTwo ClassName='sellingBookTitile' Title={'Best Selling Book'}/>
                <div><small>{infoTitleTop}</small></div>
                <h3>{infoTitle}</h3>
                <p>{desc}</p>
                <h5><span>Price: {price}</span></h5>
                <Link to={shopbtnLink} className='btn'>
                <small>Shop it now <BsArrowRight /></small></Link>
                
              </div>
            </div>
          )})
        }
    </div>
  )
}

export default BestSeelingBooks