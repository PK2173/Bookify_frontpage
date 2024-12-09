import React from 'react'
import './Home.css'

// ..... components Impoert............
import Header from '../../Components/Header/Header'
import Brands from '../../Components/Brands/Brands'
import FeatureBooks from '../../Components/FeaturesBooks/FeatureBooks'
import BestSeelingBooks from '../../Components/BestSeelingBooks/BestSeelingBooks'
import PopulerBooks from '../../Components/PopulerBooks/PopulerBooks'
import Quote from '../../Components/Quote/Quote'
import LatestArticle from '../../Components/LatestArticle/LatestArticle'

const Home = () => {
  return (
    
    <div>
      <Header />
      <Brands/>
      <FeatureBooks/>
      <BestSeelingBooks/>
      <PopulerBooks/>
      <Quote/>
      <LatestArticle/>
    </div>
  )
}

export default Home