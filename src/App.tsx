import { useState } from 'react'
import { Filter } from './components/Filter'
import { FiltersDisplayRow } from './components/FiltersDisplayRow'
import { Button } from './components/Button'
import { CheckboxInput } from './components/CheckboxInput'
import { DropdownMenu } from './components/DropdownMenu'
import { InputsBox } from './components/InputsBox'
import { Label } from './components/Label'
import { RadioInput } from './components/RadioInput'
import { Header2 } from './components/Typography'
import { ResetSVG } from './components/icons'
import { filtersArray } from './const'
import { useFilterStore } from './store/FilterStore'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const { handleCheckBoxChange, handleRadioChange, resetAll, severity, time } =
    useFilterStore()

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div className='bg-primary-bg min-h-screen p-4'>
      <Filter
        filtersDisplayRowComponent={
          <FiltersDisplayRow handleOpen={handleOpen} />
        }>
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
            {filtersArray.severity.map((filter) => (
              <Label key={filter}>
                <CheckboxInput
                  checked={severity.includes(filter)}
                  value={filter}
                  onChange={handleCheckBoxChange}
                />
                {filter}
              </Label>
            ))}
          </DropdownMenu>
          <DropdownMenu title='Time'>
            {filtersArray.time.map((filter) => (
              <Label key={filter}>
                <RadioInput
                  checked={time === filter}
                  value={filter}
                  onChange={handleRadioChange}
                />
                {filter}
              </Label>
            ))}
          </DropdownMenu>
        </InputsBox>
      </Filter>
    </div>
  )
}

export default App
