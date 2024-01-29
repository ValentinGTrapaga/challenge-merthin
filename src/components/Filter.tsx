import React from 'react'

interface FilterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  filtersDisplayRowComponent: React.ReactNode
}

export const Filter = ({
  children,
  filtersDisplayRowComponent
}: FilterProps) => {
  return (
    <div className='flex gap-2 rounded-2xl relative max-h-[500px]'>
      {filtersDisplayRowComponent}
      {children}
    </div>
  )
}
