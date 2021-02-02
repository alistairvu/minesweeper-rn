import { useResetRecoilState, useSetRecoilState } from "recoil"
import {
  boardAtom,
  flaggedAtom,
  loseAtom,
  openedAtom,
  timerAtom,
  runningAtom,
  selectedSquaresAtom,
  winAtom,
} from "../recoil"
import { generateBoard } from "../utils/boardUtils"
import * as Haptics from "expo-haptics"

export const useReset = () => {
  const setBoardState = useSetRecoilState(boardAtom)
  const resetOpen = useResetRecoilState(openedAtom)
  const resetFlags = useResetRecoilState(flaggedAtom)
  const resetLose = useResetRecoilState(loseAtom)
  const resetWin = useResetRecoilState(winAtom)
  const resetTime = useResetRecoilState(timerAtom)
  const resetRunning = useResetRecoilState(runningAtom)
  const resetOpenedSquares = useResetRecoilState(selectedSquaresAtom)

  const handleReset = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    setBoardState(generateBoard())
    resetOpen()
    resetFlags()
    resetLose()
    resetWin()
    resetTime()
    resetRunning()
    resetOpenedSquares()
  }

  return handleReset
}
