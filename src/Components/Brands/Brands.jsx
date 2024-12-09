import React from 'react'
import './Brands.css'

// import brands.Data..................
import { brandsData } from '../../Data/Data'

const Brands = () => {
  return (
    <section className='Brands'>
        <div className="container brands-container">
            {
                brandsData.map(({img}, index) => {
                    return (
                        <div key={index} className="brand">
                            <img src={img} alt="brand" />
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Brands