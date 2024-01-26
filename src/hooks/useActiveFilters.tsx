import { useState } from 'react'

type ActiveFiltersProps = {
  severity: string[]
  time: string
}

export const useActiveFilters = () => {
  const [activeFilters, setActiveFilters] = useState<ActiveFiltersProps>({
    severity: [],
    time: ''
  })

  const resetSeverity = () => {
    setActiveFilters((prev) => ({
      ...prev,
      severity: []
    }))
  }

  const resetTime = () => {
    setActiveFilters((prev) => ({
      ...prev,
      time: ''
    }))
  }

  const resetAll = () => {
    setActiveFilters({
      severity: [],
      time: ''
    })
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

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setActiveFilters((prev) => ({
      ...prev,
      time: value
    }))
  }

  return {
    activeFilters,
    setActiveFilters,
    resetSeverity,
    resetTime,
    resetAll,
    handleChecbkoxChange,
    handleRadioChange
  }
}
