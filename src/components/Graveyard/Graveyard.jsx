import React from 'react'
import GraveCard from '../GraveCard/GraveCard'

const Graveyard = (props) => {
  return <section id="wm">
    <div class="container">
      <h2 class="text-center text-uppercase mb-5">{props.title}</h2>
      <div class="mb-5">
        <h4 class="section-text font-weight-light">
          {props.description}
        </h4>
      </div>
      {props.graves.map(grave => <GraveCard {...grave}/>)}
    </div>
  </section>
}

export default Graveyard