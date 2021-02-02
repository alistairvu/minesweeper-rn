import { atom, RecoilState, selector } from "recoil"

const initOpen = (): boolean[][] => {
  const open = Array(8)

  for (let i = 0; i < 8; i++) {
    const row = Array(8)

    for (let j = 0; j < 8; j++) {
      row[j] = false
    }

    open[i] = row
  }

  return open
}

export const flaggedAtom = atom({
  key: "flagged",
  default: initOpen(),
})

export const flagsLeftSelector = selector({
  key: "flagsLeft",
  get: ({ get }) => {
    const flagged = get(flaggedAtom)
    let sum = 0

    flagged.forEach(
      (row) =>
        (sum += row.reduce((acc: number, curr: boolean) => {
          if (curr) return acc + 1
          return acc
        }, 0))
    )

    return 10 - sum
  },
})
