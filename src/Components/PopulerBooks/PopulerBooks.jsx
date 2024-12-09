import React, { useState } from 'react'
import './PopulerBooks.css'

// Import Titile Props......
import TitileTypeOne from '../../UI/TitileTypeOne/TitileTypeOne'
import { galleryData } from '../../Data/Data'
// Import Populer Books Data......


const PopulerBooks = () => {

  //  import useState.........
  const [activeButton, setactiveButton] = useState('all');
  
  // Filter gallery funcationality.......
const filterItems = activeButton === 'all' ? galleryData: galleryData.filter((item) => item.category === activeButton);

const handleFilterChange = (category)=>{
  setactiveButton(category);
}

  return (
    <section className='PopulerBooks'>
      <div className="container populerbooks-container">
        <TitileTypeOne ClassName={'populerbooks-titles'} TitleTop={'Some quality items'} Title={'Popular Books'}/>
        {/* ......Fileter Tabs Buttons........ */}
        <div className="filter-buttons">
          <button onClick={()=> handleFilterChange('all')} className={activeButton === 'all' ? 'active' : ''}>All</button>
          <button onClick={()=> handleFilterChange('Business')} className={activeButton === 'Business' ? 'active' : ''}>Business</button>
          <button onClick={()=> handleFilterChange('Technology')} className={activeButton === 'Technology' ? 'active' : ''}>Technology</button>
          <button onClick={()=> handleFilterChange('Adventure')} className={activeButton === 'Adventure' ? 'active' : ''}>Adventure</button>
          <button onClick={()=> handleFilterChange('Romantic')} className={activeButton === 'Romantic' ? 'active' : ''}>Romantic</button>
          <button onClick={()=> handleFilterChange('Fictional')} className={activeButton === 'Fictional' ? 'active' : ''}>Fictional</button>
        </div>
        {/* ........Fillter Books Content...... */}
        <div className="gallery">
          {
            filterItems.map(({name,writer, price, image}, index) => {
              return(
                <div key={index} className="gallery-item">
                   <div className="popularbook-image">
                    <img src={image} alt="" />
                   </div>
                   <div className="popularbook-info">
                    <h4>{name}</h4>
                    <div><small>{writer}</small></div>
                    <h5><span>{price}</span></h5>
                   </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default PopulerBooks