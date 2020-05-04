import React from 'react'
import '../styles/index.scss'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import About from '../components/About'
import Tools from '../components/Tools/Tools'
import WMData from '../data/wm.yaml'
import CliData from '../data/cli.yaml'
import VimData from '../data/vim.yaml'
import GraveyardData from '../data/graveyard.yaml'
import Graveyard from '../components/Graveyard/Graveyard'

const Index = () => {
  return <>
    <Navigation/>
    <Header/>
    <div className="container mx-auto">
      <Tools {...WMData}/>
      <Tools {...CliData}/>
      <Tools {...VimData}/>
    </div>
    <Graveyard {...GraveyardData}/>
    <About/>
  </>
}

export default Index
