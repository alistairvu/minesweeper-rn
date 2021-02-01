import { useResetRecoilState, useSetRecoilState } from "recoil"
import {
  boardState,
  flaggedState,
  loseState,
  openState,
  timerState,
  runningState,
  openedSquaresState,
  winState,
} from "../recoil"
import { generateBoard } from "../utils/boardUtils"

export const useReset = () => {
  const setBoardState = useSetRecoilState(boardState)
  const resetOpen = useResetRecoilState(openState)
  const resetFlags = useResetRecoilState(flaggedState)
  const resetLose = useResetRecoilState(loseState)
  const resetWin = useResetRecoilState(winState)
  const resetTime = useResetRecoilState(timerState)
  const resetRunning = useResetRecoilState(runningState)
  const resetOpenedSquares = useResetRecoilState(openedSquaresState)

  const handleReset = () => {
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
