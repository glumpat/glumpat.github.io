import React from 'react'
import GraveCard from '../GraveCard/GraveCard'

const Graveyard = (props) => {
  return <section id="graveyard" className="bg-black">
    <div className="container mx-auto text-white">
      <h2 className="text-center text-uppercase mb-5">{props.title}</h2>
      <h4 className="font-sans font-medium text-white mb-8 p-4">
        {props.description}
      </h4>
      <div className="flex flex-wrap">
        {props.graves.map(grave => <GraveCard key={grave.title} {...grave}/>)}
      </div>
    </div>

  </section>
}

export default Graveyard
