import React from 'react'

const Grave = props => {
  return (
    <div className="grave">
      <div className="grave-header">
        <h2 className="title title-short">Jenv</h2>
        <ul className="list-inline icon-bar">
          <li className="list-inline-item">
            <a
              className="btn-link-inverse"
              href="http://www.jenv.be/"
              title="Homepage"
            >
              <i className="fa fa-fw fa-link"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="text-white text-center grave-subheader">
        <p className="tool-text text-center">+ 2018</p>
      </div>
      <div className="grave-body">
        <p className="tool-text h-100">
          If you don't use Java anymore, the Java tools get taken out back and
          shot.
        </p>
      </div>
    </div>
  )
}

export default Grave
