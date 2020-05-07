import React from 'react'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const About = props => {
  return (
    <section className="bg-black text-white" id="about">
      <div className="container mx-auto">
        <h2 className="text-center text-uppercase text-white mb-5">About</h2>
        <div className="p-2 text-white text-lg font-sans font-medium">
          <p>My name is Hans Schnedlitz.</p>
          <p>
            I created Glumpat to give people some insight into the tools I use
            on a daily basis. I really enjoy my stuff, and I wanted an easy way
            to share my personal stack.
          </p>
          <p>
            The project is a Github organisation that consists of a{' '}
            <a className="link-red" href="https://github.com/andsens/homeshick">
               homeshick
            </a>{' '}
            castle {' '}
            <a className="link-red" href="https://github.com/glumpat/dotfiles">
              Dotfiles
            </a>
            , which contains configuration files for all my tools and also some
            useful little scripts. Please do poke around.
          </p>
          <p>
            There is also a <a className="link-red" href="https://github.com/glumpat/setup"> repository containing a
            script
          </a> for automatically setting up the whole stack. Check it out on{' '}
            <a className="link-red" href="https://github.com/glumpat">
              Github.
            </a>
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 text-center">
            <h4 className="text-uppercase mb-4 mt-4 text-white">Contact Me </h4>
            <div className="flex justify-center">
              <ul className="flex justify-between w-1/12 mb-0">
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social rounded-circle"
                    href="https://github.com/hschne"
                  >
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="https://twitter.com/hschnedlitz"
                  >
                    <FontAwesomeIcon icon={faTwitter}/>
                  </a>
                </li>
                <li className="">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="https://hschne.at"
                  >
                    <FontAwesomeIcon icon={faHome}/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
