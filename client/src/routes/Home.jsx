import React from 'react'
import Header from '../components/Header'
import AddLocation from '../components/AddLocation'
import LocationList from '../components/LocationList'

const Home = () => {
  return (
    <div>
      <Header />
      <AddLocation />
      <LocationList />
    </div>
  )
}

export default Home
