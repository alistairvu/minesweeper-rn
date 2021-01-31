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

export const openState = atom({
  key: "openState",
  default: initOpen(),
})

export const openedListState = atom({
  key: "openedListState",
  default: [] as number[],
})

export const closedCount = selector({
  key: "closedCount",
  get: ({ get }) => {
    const open = get(openState)
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
