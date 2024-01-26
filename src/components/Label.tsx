import React from 'react'

interface Label extends React.HTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

export const Label = ({ children, ...props }: Label) => {
  return (
    <label
      {...props}
      className='text-button text-white flex gap-2 items-center'>
      {children}
    </label>
  )
}
