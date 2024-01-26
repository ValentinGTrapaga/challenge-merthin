import React from 'react'

interface InputsBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  isOpen: boolean
}

export const InputsBox = ({ children, isOpen, ...props }: InputsBoxProps) => {
  return (
    <div
      {...props}
      className={`bg-neutral-800 p-5 rounded-[14px] absolute top-16 left-0 flex flex-col gap-4 max-h-[80dvh] overflow-y-auto transition-all ${
        isOpen ? ' opacity-100' : 'opacity-0 pointer-events-none'
      } shadow-filterBox ${props.className}`}>
      {children}
    </div>
  )
}
