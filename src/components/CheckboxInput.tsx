import React from 'react'
import { CheckSVG } from './icons'

interface CheckboxInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const CheckboxInput = ({ ...props }: CheckboxInputProps) => {
  return (
    <div className='relative'>
      <input
        {...props}
        type='checkbox'
        className='text-button appearance-none w-4 h-4 rounded-sm border bg-neutral-800 border-neutral-500 checked:bg-primary-600 checked:border-primary-600 transition-all peer'
      />
      <CheckSVG className='hidden peer-checked:block absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 text-blue-600 dark:text-blue-500' />
    </div>
  )
}
