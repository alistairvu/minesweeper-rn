import { atom, RecoilState } from "recoil"
import { generateBoard } from "../utils/boardUtils"

export const boardState: RecoilState<number[][]> = atom({
  key: "boardState",
  default: generateBoard(),
})

export const loseState = atom({
  key: "loseState",
  default: false,
})

export const openedSquaresState = atom({
  key: "openedSquaresState",
  default: new Set<number>(),
})
