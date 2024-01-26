import React from 'react'

interface Header2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}
export const Header2 = ({ children, ...props }: Header2Props) => {
  return (
    <h2
      className={`text-filter-title font-semibold text-white flex ${props.className}`}>
      {children}
    </h2>
  )
}
