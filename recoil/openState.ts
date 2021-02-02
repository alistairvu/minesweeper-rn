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

export const openedAtom = atom({
  key: "opened",
  default: initOpen(),
})

export const closedSelector = selector({
  key: "closed",
  get: ({ get }) => {
    const open = get(openedAtom)
    let sum = 0

    open.forEach(
      (row) =>
        (sum += row.reduce((acc: number, curr: boolean) => {
          if (curr) return acc
          return acc + 1
        }, 0))
    )

    return sum
  },
})
