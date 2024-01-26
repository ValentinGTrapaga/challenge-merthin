import { useState } from 'react'
import { DownChevronSVG } from './icons'

export const DropdownMenu = ({
  children,
  title
}: {
  children?: React.ReactNode
  title: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`bg-neutral-900 py-[15px] px-[20px] rounded-md w-[340px] transition-all duration-300 ease-in-out overflow-y-hidden ${
        isOpen ? 'max-h-[1000px]' : 'max-h-[54px]'
      }`}>
      <button
        onClick={handleToggle}
        className='flex items-center justify-between w-full'>
        <p className='text-primary-500'>{title}</p>
        <DownChevronSVG
          className={`w-4 ${isOpen ? 'rotate-90' : ''} transition-all`}
        />
      </button>
      <div className={`flex flex-col gap-4 py-4 transition-all`}>
        {children}
      </div>
    </div>
  )
}