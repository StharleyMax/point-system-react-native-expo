import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export function Login() {
  return (
    <View>
      <StatusBar backgroundColor="#FFF" translucent={false} />
        <Text>PointSystem</Text>

        <View>
        <TextInput
          placeholder="Login"
          //style={styles.input}
        />

        <TextInput
          placeholder="Sua Senha"
          //style={styles.input}
        />

        <TouchableOpacity>
          <Text>Acessar</Text>
        </TouchableOpacity>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  }
})
