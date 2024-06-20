import React from 'react'
import './home.css';
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="homeContainer">
        <Featured></Featured>
        <h1>Get the most rated places</h1>
        <PropertyList></PropertyList>
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties></FeaturedProperties>
        <MailList></MailList>
        <Footer></Footer>


      </div>
    </div>
  )
}

export default Home
