import { useState } from 'react'
import { DropdownMenu } from './DropdownMenu'
import { CrossSVG, FilterSVG, ResetSVG } from './icons'
import { Button } from './Button'
import { Label } from './Label'
import { RadioInput } from './RadioInput'
import { CheckboxInput } from './CheckboxInput'
import { useActiveFilters } from '../hooks/useActiveFilters'
import { filters } from '../const'
import { InputsBox } from './InputsBox'
import { Header2 } from './Typography'

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {
    activeFilters,
    resetSeverity,
    resetTime,
    resetAll,
    handleChecbkoxChange,
    handleRadioChange
  } = useActiveFilters()

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div className='flex gap-2 rounded-2xl relative max-h-[500px]'>
      <span className='flex gap-4'>
        <Button onClick={handleOpen}>
          <FilterSVG className='w-4 group-hover:fill-white fill-primary-500 transition-colors' />
          <p className='hidden sm:block'>Filter</p>
        </Button>
        {activeFilters.severity.length > 0 && (
          <Button
            variant='filter'
            onClick={resetSeverity}>
            <CrossSVG className='w-4' />{' '}
            <p>Severity: {activeFilters.severity.join(', ')}</p>
          </Button>
        )}
        {activeFilters.time && (
          <Button
            variant='filter'
            onClick={resetTime}>
            <CrossSVG className='w-4' />
            <p>Time: {activeFilters.time}</p>
          </Button>
        )}
      </span>
      {
        <InputsBox isOpen={isOpen}>
          <div className='w-full flex justify-between items-center'>
            <Header2>Filter data by</Header2>
            <Button
              variant='ghost'
              onClick={resetAll}>
              <ResetSVG className='w-4 rotate-45 group-hover:-rotate-[360deg] transition-all duration-500' />
              Reset
            </Button>
          </div>
          <DropdownMenu title='Severity'>
            {filters.severity.map((filter: string) => (
              <Label key={filter}>
                <CheckboxInput
                  checked={activeFilters.severity.includes(filter)}
                  value={filter}
                  onChange={handleChecbkoxChange}
                />
                {filter}
              </Label>
            ))}
          </DropdownMenu>
          <DropdownMenu title='Time'>
            {filters.time.map((filter: string) => (
              <Label key={filter}>
                <RadioInput
                  checked={activeFilters.time === filter}
                  value={filter}
                  onChange={handleRadioChange}
                />
                {filter}
              </Label>
            ))}
          </DropdownMenu>
        </InputsBox>
      }
    </div>
  )
}
