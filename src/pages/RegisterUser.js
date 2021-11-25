import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
} from "react-native";
import Mytextinput from "./components/Mytextinput";
import Mybutton from "./components/Mybutton";

import { connect } from "react-redux";
import { userSave } from "../redux/actions/UserAction";
import { userFilter } from "../redux/filters/UserFilter";

const RegisterUser = (props) => {
  let [userName, setUserName] = useState("");
  let [userContact, setUserContact] = useState("");
  let [userAddress, setUserAddress] = useState("");

  let register_user = () => {
    console.log(userName, userContact, userAddress);

    if (!userName) {
      alert("Por favor preencha o nome.");
      return;
    }
    if (!userContact) {
      alert("Por favor preencha o contato.");
      return;
    }
    if (!userAddress) {
      alert("Por favor preencha o endereço.");
      return;
    }

    props.userSave({
      userName,
      userContact,
      userAddress
    });

    Alert.alert(
      "Sucesso",
      `Usuário '${userName}' registrado com sucesso.`,
      [
        {
          text: "Ok",
          onPress: () => props.navigation.navigate("HomeScreen"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: "space-between" }}
            >
              <Mytextinput
                placeholder="Entre com o Nome"
                onChangeText={(userName) => setUserName(userName)}
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Entre com o Telefone"
                onChangeText={(userContact) => setUserContact(userContact)}
                maxLength={10}
                keyboardType="numeric"
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Entre com o Endereço"
                onChangeText={(userAddress) => setUserAddress(userAddress)}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: "top", padding: 10 }}
              />
              <Mybutton title="Salvar" customClick={register_user} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default connect(userFilter, {userSave})(RegisterUser);
