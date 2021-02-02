import { useSetRecoilState } from "recoil"
import { openedAtom } from "../recoil"

export const useOpenAll = () => {
  const setOpen = useSetRecoilState(openedAtom)

  const openAll = () => {
    const open = Array(8)

    for (let i = 0; i < 8; i++) {
      const row = Array(8)

      for (let j = 0; j < 8; j++) {
        row[j] = true
      }

      open[i] = row
    }

    setOpen(open)
  }

  return openAll
}
