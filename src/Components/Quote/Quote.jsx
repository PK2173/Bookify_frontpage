import React from 'react'
import './Quote.css'

// ........ Title Props...........
import TitileTypeTwo from '../../UI/TitileTypeTwo/TitileTypeTwo'
import { quoteData } from '../../Data/Data'

// Quote Props Data

const Quote = () => {
  return (
    <section className='Quote'>
        <div className="container quote-contnainer">
            <TitileTypeTwo Title={'Quote of the day'} ClassName='quote-title'/>
            {
                quoteData.map(({quote, speaker}, index)=>{
                    return(
                        <article key={index}>
                            <p>{quote}</p>
                            <h5>{speaker}</h5>
                        </article>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Quote