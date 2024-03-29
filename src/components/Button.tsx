import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'filter' | 'ghost'
  children: React.ReactNode
}
export const Button = ({
  variant = 'primary',
  children,
  ...props
}: ButtonProps) => {
  const variantClassName = {
    primary:
      'text-primary-600 hover:bg-primary-500 hover:text-white rounded-md p-3 text-button transition-colors duration-200 flex items-center gap-2 group',
    filter:
      'bg-neutral-700 text-button text-white rounded-md p-3 hidden sm:flex items-center gap-2 hover:bg-neutral-800 transition-colors ',
    ghost:
      'p-3 flex items-center gap-2 hover:bg-neutral-700 text-button text-primary-500 rounded-md transition-colors duration-200 group'
  }

  return (
    <button
      {...props}
      className={`${variantClassName[variant]} ${props.className}`}>
      {children}
    </button>
  )
}
