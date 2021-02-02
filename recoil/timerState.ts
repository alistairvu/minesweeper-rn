import { atom } from "recoil"

const initialTime: number = 0

export const timerAtom = atom({
  key: "timer",
  default: initialTime,
})

export const runningAtom = atom({
  key: "running",
  default: false,
})
