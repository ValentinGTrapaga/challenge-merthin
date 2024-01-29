import { create } from 'zustand'

interface FilterStoreProps {
  severity: string[]
  time: string
  resetSeverity: () => void
  resetTime: () => void
  handleCheckBoxChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  resetAll: () => void
}

export const useFilterStore = create<FilterStoreProps>()((set) => ({
  severity: [],
  time: '',
  resetSeverity: () => set(() => ({ severity: [] })),
  resetTime: () => set(() => ({ time: '' })),
  handleCheckBoxChange: (e) =>
    set((state) => {
      const { value } = e.target
      const { severity } = state
      if (severity.includes(value)) {
        return { severity: severity.filter((item) => item !== value) }
      }
      return { severity: [...severity, value] }
    }),
  handleRadioChange: (e) => set(() => ({ time: e.target.value })),
  resetAll: () => set(() => ({ severity: [], time: '' }))
}))
