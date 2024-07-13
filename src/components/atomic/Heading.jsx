import React from 'react'

const Heading = ({classname, children}) => {
  return (
    <h1 className={`text-tblack font-extrabold text-5xl ${classname}`}>{children}</h1>
  )
}

export default Heading