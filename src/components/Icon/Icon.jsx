import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const ToolLink = (props) => {
  let icon = faLink
  if (props.link.match(/github.com/)) {
    icon = faGithub
  }

  return <a
    className="hover:text-red text-xl text-right self-end"
    href={props.link} title="Homepage">
    <FontAwesomeIcon icon={icon}/>
  </a>
}

export default ToolLink
