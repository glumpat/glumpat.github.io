import React from 'react'

const About = props => {
  return (
    <section className="bg-dark" id="about">
      <div className="container">
        <h2 className="text-center text-uppercase text-white mb-5">About</h2>

        <div className="section-text text-white font-weight-light">
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
            </a>
            castle:{' '}
            <a className="link-red" href="https://github.com/glumpat/dotfiles">
              Dotfiles
            </a>
            , which contains configuration files for all my tools and also some
            useful little scripts. Please do poke around.
          </p>
          <p>
            There is also a{' '}
            <a className="link-red" href="https://github.com/glumpat/setup">
              repository containing a script
            </a>{' '}
            for automatically setting up the whole stack. Check it out on{' '}
            <a className="link-red" href="https://github.com/glumpat">
              Github.
            </a>
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 text-center">
            <h4 className="text-uppercase mb-4 mt-4 text-white">Contact Me </h4>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a
                  className="btn btn-outline-light btn-social rounded-circle"
                  href="https://github.com/hschne"
                >
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-outline-light btn-social text-center rounded-circle"
                  href="https://twitter.com/hschnedlitz"
                >
                  <i className="fa fa-fw fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-outline-light btn-social text-center rounded-circle"
                  href="https://hschne.at"
                >
                  <i className="fa fa-fw fa-home"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
