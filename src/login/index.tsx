import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export function Login() {
  return (
    <View style={styles.container}>
        <Image
          source={require('./../assets/logo.png')}
          style={styles.logo}
        />

        <TextInput
          placeholder="Login"
          style={styles.input}
        />

        <TextInput
          placeholder="Sua Senha"
          style={styles.input}
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text>Acessar</Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3E4452',
    alignItems: 'center',
    height: '100%',
    },
  logo:{
    marginTop: '30%',
  },
  input:{
    width: 300,
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: '#B4AD87',
    marginTop: 35,
    fontFamily: ''
  },
  loginButton:{}
})
