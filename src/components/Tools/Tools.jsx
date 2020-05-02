import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ToolCard from '../ToolCard/ToolCard'

const Tools = (props) => (
  <section>
    <div class="container">
      <h2 class="text-center text-uppercase mb-5">{props.title}</h2>
      <div class="mb-5">
        <h4 class="section-text font-weight-light">
          {props.description}
        </h4>
        {props.tools.map(tool => <ToolCard {...tool}/>)}
      </div>
    </div>
  </section>
)

export default Tools