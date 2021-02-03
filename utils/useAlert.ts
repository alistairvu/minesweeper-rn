import AsyncStorage from "@react-native-async-storage/async-storage"

interface GameDataInterface {
  won: number
  lost: number
}

export const useAlert = () => {
  const winAlert = async () => {
    const mineData = await AsyncStorage.getItem("@mine_data")

    if (mineData === null) {
      const newData: GameDataInterface = {
        won: 1,
        lost: 0,
      }
      await AsyncStorage.setItem("@mine_data", JSON.stringify(newData))
      return `Won: 1
Lost: 0
Win percent: 100.00%`
    } else {
      const { won, lost } = JSON.parse(mineData)
      const newData: GameDataInterface = {
        won: won + 1,
        lost: lost,
      }
      await AsyncStorage.setItem("@mine_data", JSON.stringify(newData))
      const newWinPercent = ((won + 1) / (won + lost + 1)) * 100
      return `Won: ${won + 1}
Lost: ${lost}
Win percent: ${newWinPercent.toFixed(2)}%`
    }
  }

  const loseAlert = async () => {
    const mineData = await AsyncStorage.getItem("@mine_data")

    if (mineData === null) {
      const newData: GameDataInterface = {
        won: 0,
        lost: 1,
      }
      await AsyncStorage.setItem("@mine_data", JSON.stringify(newData))
      return `Won: 0
Lost: 1
Win percent: 0.00%`
    } else {
      const { won, lost } = JSON.parse(mineData)
      const newData: GameDataInterface = {
        won: won,
        lost: lost + 1,
      }
      await AsyncStorage.setItem("@mine_data", JSON.stringify(newData))
      const newWinPercent = (won / (won + lost + 1)) * 100
      return `Won: ${won}
Lost: ${lost + 1}
Win percent: ${newWinPercent.toFixed(2)}%`
    }
  }

  return { winAlert, loseAlert }
}
