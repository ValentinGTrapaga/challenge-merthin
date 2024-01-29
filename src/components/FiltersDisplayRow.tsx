import { Button } from './Button'
import { FilterSVG, CrossSVG } from './icons'
import { useFilterStore } from '../store/FilterStore'

export const FiltersDisplayRow = ({
  handleOpen
}: {
  handleOpen: () => void
}) => {
  const { severity, time, resetSeverity, resetTime } = useFilterStore()

  return (
    <span className='flex gap-4'>
      <Button onClick={handleOpen}>
        <FilterSVG className='w-4 group-hover:fill-white fill-primary-500 transition-colors' />
        <p className='hidden sm:block'>Filter</p>
      </Button>
      {severity.length > 0 && (
        <Button
          variant='filter'
          onClick={resetSeverity}>
          <CrossSVG className='w-4' /> <p>Severity: {severity.join(', ')}</p>
        </Button>
      )}
      {time && (
        <Button
          variant='filter'
          onClick={resetTime}>
          <CrossSVG className='w-4' />
          <p>Time: {time}</p>
        </Button>
      )}
    </span>
  )
}
