import React from 'react'
import GraveCard from '../GraveCard/GraveCard'

const Graveyard = (props) => {
  return <section id="graveyard">
    <div className="container">
      <h2 className="text-center text-uppercase mb-5">{props.title}</h2>
      <div className="mb-5">
        <h4 className="section-text font-weight-light">
          {props.description}
        </h4>
      </div>
      {props.graves.map(grave => <GraveCard {...grave}/>)}
    </div>
  </section>
}

export default Graveyard