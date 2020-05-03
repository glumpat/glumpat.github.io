import React from 'react'

const Navigation = () => {
  return (
    <ul class="flex">
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">Active</a>
      </li>
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
      </li>
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
      </li>
      <li class="mr-6">
        <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
      </li>
    </ul>
  )

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top text-uppercase"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#">
          Glumpat{' '}
        </a>
        <button
          className="navbar-toggler navbar-toggler-right text-uppercase btn rounded"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#wm"
              >
                WM
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#cli"
              >
                CLI
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#vim"
              >
                VIM
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#graveyard"
              >
                The Graveyard
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#about"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
