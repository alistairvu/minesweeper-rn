import { atom, RecoilState } from "recoil"
import { generateBoard } from "../utils/boardUtils"

export const boardAtom: RecoilState<number[][]> = atom({
  key: "board",
  default: generateBoard(),
})

export const loseAtom = atom({
  key: "lose",
  default: false,
})

export const winAtom = atom({
  key: "win",
  default: false,
})

export const selectedSquaresAtom = atom({
  key: "selectedSquares",
  default: new Set<number>(),
})
