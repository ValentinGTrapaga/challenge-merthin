import React from 'react'
import { CheckSVG } from './icons'

interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
}

export const RadioInput = ({ children, ...props }: RadioInputProps) => {
  return (
    <div className='relative'>
      <input
        className={`text-button appearance-none bg-neutral-800 w-4 h-4 border border-neutral-500 rounded-full checked:bg-primary-600 transition-all peer ${props.className}`}
        {...props}
        type='radio'
      />
      <CheckSVG className='hidden peer-checked:block absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 text-blue-600 dark:text-blue-500' />
    </div>
  )
}
