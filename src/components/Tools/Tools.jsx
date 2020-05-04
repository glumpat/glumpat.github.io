import React from 'react'
import ToolCard from '../ToolCard/ToolCard'

const Tools = (props) => (
  <section id={props.title.toLowerCase()}>
    <h2 className="text-center uppercase mb-5">{props.title}</h2>
    <h4 className="font-sans text-lg font-medium p-4 mb-4">
      {props.description}
    </h4>
    <div className="flex flex-wrap">
      {props.tools.map(tool => <ToolCard key={tool.title} {...tool}/>)}
    </div>
  </section>
)

export default Tools
