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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    if (email && username && password && confirmPassword) {
      if (password === confirmPassword) {
        setError("");

        try {
          const response = await axios.post("http://172.20.10.3:3000/signup", {
            email: email,
            password: password,
            username: username,
          });

          setToken(response.data.token);
        } catch (error) {
          if (error.response) {
            setError(error.response.data.message);
          } else {
            console.log(error);
            setError("An error occurred.");
          }
        }
      } else {
        setError("Les mots de passe ne sont pas identiques.");
      }
    } else {
      setError("Tous les champs doivent être remplis.");
    }
  };

  const iconColor = "rgb(136,208,62)";

  return (
    <ScrollView>
      <Statusbar style={{ backgroundColor: "#523383" }} />
      <Title title="Inscription" />
      <View style={{ marginTop: 20 }}>
        <InputText
          iconName="mail"
          iconSize={22}
          iconColor={iconColor}
          placeholder="Email"
          onChangeText={setEmail}
        />
        <InputText
          iconName="person"
          iconSize={22}
          iconColor={iconColor}
          placeholder="Pseudo"
          onChangeText={setUsername}
        />
        <InputText
          iconName="lock-closed"
          iconSize={22}
          iconColor={iconColor}
          placeholder="Mot de passe"
          onChangeText={setPassword}
        />
        <InputText
          iconName="lock-closed"
          iconSize={22}
          iconColor={iconColor}
          placeholder="Confirmation du mot de passe"
          onChangeText={setConfirmPassword}
        />
      </View>
      <Text style={{ marginVertical: 20, color: "red", textAlign: "center" }}>
        {error}
      </Text>
      <ConnectionButton title="Créer mon compte" submitFunction={submit} />
      <RedirectButton title="Déjà un compte ? Connecte-toi !" screen="LogIn" />
    </ScrollView>
  );
}
