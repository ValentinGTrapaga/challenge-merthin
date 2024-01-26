import { useState } from 'react'
import { DropdownMenu } from './DropdownMenu'
import { CrossSVG, FilterSVG, ResetSVG } from './icons'
import { Button } from './Button'
import { Label } from './Label'
import { RadioInput } from './RadioInput'
import { CheckboxInput } from './CheckboxInput'

type ActiveFiltersProps = {
  severity: string[]
  time: string
}

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const filters = {
    severity: ['Low', 'Medium', 'High'],
    time: ['Last 24 hours', 'Last 72 Hours', 'Last 7 days', 'Last 30 days']
  }
  const [activeFilters, setActiveFilters] = useState<ActiveFiltersProps>({
    severity: [],
    time: ''
  })

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleChecbkoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (activeFilters.severity.includes(value)) {
      setActiveFilters((prev) => ({
        ...prev,
        severity: prev.severity.filter((filter) => filter !== value)
      }))
    } else {
      setActiveFilters((prev) => ({
        ...prev,
        severity: [...prev.severity, value]
      }))
    }
  }

  return (
    <div className='flex gap-2 rounded-2xl relative max-h-[500px]'>
      <span className='flex gap-4'>
        <Button
          onClick={handleOpen}
          label='Filter'
          icon={
            <FilterSVG className='w-4 group-hover:fill-white fill-primary-500 transition-colors' />
          }
        />
        {filters.severity && (
          <Button
            variant='filter'
            icon={<CrossSVG className='w-4' />}
            label={`Severity: ${activeFilters.severity.join(', ')}`}></Button>
        )}
        {filters.time && (
          <Button
            variant='filter'
            icon={<CrossSVG className='w-4' />}
            label={`Time: {activeFilters.time}`}
          />
        )}
      </span>
      {
        <div
          className={`bg-neutral-800 p-5 rounded-[14px] absolute top-16 left-0 flex flex-col gap-4 max-h-[80dvh] overflow-y-auto transition-all ${
            isOpen ? ' opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-filter-title font-semibold text-white flex'>
              Filter data by
            </h1>
            <Button variant='ghost'>
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
              <Label>
                <RadioInput
                  key={filter}
                  checked={activeFilters.time === filter}
                  value={filter}
                  onChange={() => {
                    setActiveFilters((prev) => ({
                      ...prev,
                      time: filter
                    }))
                  }}
                />
                {filter}
              </Label>
            ))}
          </DropdownMenu>
        </div>
      }
    </div>
  )
}
