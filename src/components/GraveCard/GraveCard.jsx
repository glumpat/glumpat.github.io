import React from 'react'

import classes from './GraveCard.module.scss'

const GraveCard = (props) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 flex justify-center">
    <div className={classes.Grave}>
      <div className={classes.GraveHeader}>
        <h2 className={classes.GraveTitle}>{props.title}</h2>
        <p className={classes.GraveSubHeader}>
          &#10013; {props.rip}
        </p>
      </div>
      <div className={classes.GraveBody}>
        <p className="tool-text">{props.description}</p>
      </div>
    </div>
  </div>
)

export default GraveCard
