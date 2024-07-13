import React from 'react'

const Button = ({classname, children}) => {
  return (
    <button className={` bg-tblue text-white rounded pr-4 pl-4 ${classname}`}>{children}</button>
  )
}

export default Button