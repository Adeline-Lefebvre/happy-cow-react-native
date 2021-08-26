import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import axios from "axios";
import Statusbar from "../components/Statusbar";
import Title from "../components/Title";
import InputText from "../components/InputText";
import ConnectionButton from "../components/ConnectionButton";
import RedirectButton from "../components/RedirectButton";

export default function SignupScreen({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    if (email && password) {
      try {
        const response = await axios.post("http://localhost:3000/login", {
          email: email,
          password: password,
        });

        setToken(response.data.token);
      } catch (error) {
        setError("Identifiants incorrects.");
      }
    } else {
      setError("Tous les champs doivent être remplis.");
    }
  };

  const iconColor = "rgb(136,208,62)";

  return (
    <ScrollView>
      <Statusbar style={{ backgroundColor: "#523383" }} />
      <Title title="Connection" />
      <View style={{ marginTop: 20 }}>
        <InputText
          iconName="mail"
          iconSize={22}
          iconColor={iconColor}
          placeholder="Email"
          onChangeText={setEmail}
        />
        <InputText
          iconName="lock-closed"
          iconSize={22}
          iconColor={iconColor}
          placeholder="Mot de passe"
          onChangeText={setPassword}
        />
      </View>
      <Text style={{ marginVertical: 20, color: "red", textAlign: "center" }}>
        {error}
      </Text>
      <ConnectionButton title="Me connecter" submitFunction={submit} />
      <RedirectButton
        title="Pas encore de compte ? Inscris-toi !"
        screen="SignUp"
      />
    </ScrollView>
  );
}
