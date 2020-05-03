import React, { useState } from 'react'

const Navigation = () => {
  const [open, setOpen] = useState(true)

  return <nav
    className="flex items-center w-full justify-between flex-wrap bg-red border-b-4 border-black p-6 font-mono font-semibold">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <a href="#" className="font-semibold text-xl tracking-tight uppercase hover:underline">Glumpat</a>
    </div>
    <div className="block lg:hidden">
      <button
        onClick={() => setOpen((previous) => !previous)}
        className="flex items-center px-3 py-2 border rounded">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    {open
      ? <div className="w-full align-items-end block lg:flex lg:items-center lg:w-auto ">
        <div className="text-sm">
          <a href="#wm" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:underline">
            WM
          </a>
          <a href="#cli"
             className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:underline">
            CLI
          </a>
          <a href="#vim"
             className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:underline">
            VIM
          </a>
          <a href="#graveyard" className="block uppercase mt-4 lg:inline-block lg:mt-0 text-white hover:underline">
            The Graveyard
          </a>
        </div>
      </div>
      : null}
  </nav>
}

export default Navigation
