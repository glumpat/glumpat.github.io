import React from 'react'

import classes from './Header.module.scss'

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className="m-auto text-center w-4/5 lg:w-2/3">
        <div className={classes.Title}>
          <h1 className="block text-uppercase text-4xl sm:text-6xl uppercase">Glumpat</h1>
          <h2 className="block font-weight-light text-xl sm:text-4xl lowercase">[gluːmpa:t]</h2>
        </div>
        <div className="pt-12">
          <p className="mb-3 text-xl text-left">
            <i>Glumpat</i> is what Austrians would colloquially call <i>&quot;Stuff&quot;</i>.
            <br className="mb-1"/>
            This is exactly what this is - my stuff. Stuff I use on a daily
            basis. Stuff I really like. People keep asking me &quot;This looks
            cool! What is it and where do I get it?&quot;
            <br className="mb-1"/>
            This website is for them.
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
