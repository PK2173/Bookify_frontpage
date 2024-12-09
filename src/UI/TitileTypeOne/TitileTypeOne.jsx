import React from 'react'

// import FeatureBooks css.............
import './TitileTypeOne.css'

//  import victor image..........
import victor from '../../assets/victor.png'

const TitileTypeOne = ({ClassName, Title, TitleTop}) => {
  return (
    <div className={`titileTypeOne ${ClassName}` }>
        <small>{TitleTop}</small>
        <div className="headeing-H">
          <div className="line"></div>
          <h2>{Title}</h2>
          <div className="line"></div>
        </div>
          <img src={victor} alt={victor} className='victor' />
    </div>
  )
}

export default TitileTypeOne