import React from 'react'
import './TitileTypeTwo.css'

//  import victor image..........
import victor from '../../assets/victor.png'

const TitileTypeTwo = ({ClassName, Title}) => {
  return (
    <div className={`titileTypeTwo ${ClassName}` }>
            <h2>{Title}</h2>
          <img src={victor} alt={victor} className='victor' />
    </div>
  )
}

export default TitileTypeTwo