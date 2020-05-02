import React from 'react'

const GraveCard = (props) => (
  <div class="col-md-6 col-lg-4 ">
    <div class="grave">
      <div class="grave-header">
        <h3 class="title">{props.title}</h3>
      </div>
      <div class="text-white text-center grave-subheader">
        <p class="tool-text text-center">+ {props.rip}</p>
      </div>
      <div class="grave-body">
        <p class="tool-text">{props.description}</p>
      </div>
    </div>
  </div>
)

export default GraveCard