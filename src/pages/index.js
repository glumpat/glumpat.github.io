import React from 'react'
import '../styles/index.scss'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import About from '../components/About'
import Tools from '../components/Tools/Tools'
import WMData from '../data/wm.yaml'
import GraveyardData from '../data/graveyard.yaml'
import Graveyard from '../components/Graveyard/Graveyard'

const Index = () => {
  return <>
    <Navigation/>
    <Header/>
    <Tools {...WMData}/>
    <Tools {...WMData}/>
    <Graveyard {...GraveyardData}/>
    <About/>
  </>
}

export default Index

