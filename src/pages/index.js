import React from 'react'
import '../styles/index.scss'
import Header from '../components/header'
import Navigation from '../components/navigation'
import About from '../components/about'

const Index = () => {
  return (
    <>
      <Navigation />
      <Header />
      <About />
    </>
  )
}

export default Index
