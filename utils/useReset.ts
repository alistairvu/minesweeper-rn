import { useResetRecoilState, useSetRecoilState } from "recoil"
import {
  boardState,
  flaggedState,
  loseState,
  openState,
  timerState,
  runningState,
} from "../recoil"
import { generateBoard } from "../utils/boardUtils"

export const useReset = () => {
  const setBoardState = useSetRecoilState(boardState)
  const resetOpen = useResetRecoilState(openState)
  const resetFlags = useResetRecoilState(flaggedState)
  const resetLose = useResetRecoilState(loseState)
  const resetTime = useResetRecoilState(timerState)
  const resetRunning = useResetRecoilState(runningState)

  const handleReset = () => {
    setBoardState(generateBoard())
    resetOpen()
    resetFlags()
    resetLose()
    resetTime()
    resetRunning()
  }

  return handleReset
}
