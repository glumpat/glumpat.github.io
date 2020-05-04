import React from 'react'
import ToolLink from '../Icon/Icon'

import classes from './ToolCard.module.scss'

const ToolCard = (props) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 flex justify-center">
    <div className={classes.Tool}>
      <div className={classes.ToolHeader}>
        <ToolLink link={props.link}/>
        <h2 className={classes.ToolTitle}>{props.title}</h2>
      </div>
      <div className="text-white bg-black p-2 flex-grow">
        <p className="tool-text">{props.description}</p>
      </div>
    </div>
  </div>
)

export default ToolCard
