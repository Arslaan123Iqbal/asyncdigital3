import React from 'react'

const Layout = ({children}) => {
  return (
    <main className="pr-28 pl-28 max-md:pl-10 max-md:pr-10 max-sm:pl-3 max-sm:pr-3 max-lg:pl-14 max-lg:pr-14">{children}</main>
  )
}

export default Layout