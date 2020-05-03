import React from 'react'

const Header = () => {
  return (
    <header className="text-center">
      <div className="masthead container">
        <div className="title jumbotron jumbotron-fluid">
          <div className="">
            <h1 className="text-uppercase">Glumpat</h1>
            <h2 className="font-weight-light mt-2">[gluːmpa:t]</h2>
          </div>
        </div>
        <div className="subtitle">
          <div>
            <h3 className="text-left font-weight-light body-font mb-3">
              <i>Glumpat</i> is what Austrians would colloquially call{' '}
              <i>"Stuff"</i>.
            </h3>
            <h3 className="text-left font-weight-light body-font mb-3">
              This is exactly what this is - my stuff. Stuff I use on a daily
              basis. Stuff I really like. People keep asking me &quot;This looks
              cool! What is it and where do I get it?&quot;{' '}
            </h3>
            <h3 className="text-left font-weight-light body-font">
              This website is for them.
            </h3>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
