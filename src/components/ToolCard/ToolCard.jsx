import React from 'react'

const ToolCard = (props) => (
  <div className="col-md-6 col-lg-4">
    <div className="tool ">
      <div className="tool-header d-flex text-left">
        <h2 className="title short m-auto">{props.title}</h2>
        <ul className="list-inline icon-bar">
          <li className="list-inline-item">
            <a className="btn-link"
               href={props.link} title="Homepage">{props.icon}
            </a>
          </li>
        </ul>
      </div>
      <div className="tool-body">
        <p className="tool-text">{props.description}</p>
      </div>
    </div>
  </div>
)

export default ToolCard