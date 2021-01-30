import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { RecoilRoot } from "recoil"
import { Board } from "./components/Board"
import { Header } from "./components/Header"

export default function App() {
  return (
    <RecoilRoot>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Board />
      </View>
    </RecoilRoot>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
