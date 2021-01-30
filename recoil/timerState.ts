import { atom } from "recoil"

const initialTime: number = 0

export const timerState = atom({
  key: "timerState",
  default: initialTime,
})

export const runningState = atom({
  key: "runningState",
  default: false,
})
