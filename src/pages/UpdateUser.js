import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from "react-native";

import Mytext from "./components/Mytext";
import Mytextinput from "./components/Mytextinput";
import Mybutton from "./components/Mybutton";

import { connect } from "react-redux";
import { userFindById, userSave } from "../redux/actions/UserAction";
import { userFilter } from "../redux/filters/UserFilter";

const UpdateUser = (props) => {
  let [inputUserId, setInputUserId] = useState("");
  let [userName, setUserName] = useState("");
  let [userContact, setUserContact] = useState("");
  let [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    if (props.userItem !== undefined) {
      setUserName(props.userItem.userName);
      setUserContact(props.userItem.userContact);
      setUserAddress(props.userItem.userAddress);
    }
  }, [props.userItem]);

  useEffect(() => {
    setUserName("");
    setUserContact("");
    setUserAddress("");
  }, []);

  let searchUser = () => {
    props.userFindById(inputUserId);
  };

  let updateUser = () => {
    console.log(inputUserId, userName, userContact, userAddress);

    if (!inputUserId) {
      alert("Por Favor informe o Código!");
      return;
    }
    if (!userName) {
      alert("Por favor informe o Nome!");
      return;
    }
    if (!userContact) {
      alert("Por Favor informe o Telefone!");
      return;
    }
    if (!userAddress) {
      alert("Por Favor informe o endereço!");
      return;
    }

    props.userSave({ id: inputUserId, userName, userContact, userAddress });

    Alert.alert(
      "Sucesso",
      "Usuário Editado com Sucesso!",
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
              <Mytext text="Filtro de Usuário" />
              <Mytextinput
                placeholder="Entre com o Código do Usuário"
                style={{ padding: 10 }}
                onChangeText={(inputUserId) => setInputUserId(inputUserId)}
              />
              <Mybutton title="Buscar Usuário" customClick={searchUser} />
              <Mytextinput
                placeholder="Entre com o Nome"
                value={userName}
                style={{ padding: 10 }}
                onChangeText={(userName) => setUserName(userName)}
              />
              <Mytextinput
                placeholder="Entre com o Telefone"
                value={"" + userContact}
                onChangeText={(userContact) => setUserContact(userContact)}
                maxLength={10}
                style={{ padding: 10 }}
                keyboardType="numeric"
              />
              <Mytextinput
                value={userAddress}
                placeholder="Entre com o Endereço"
                onChangeText={(userAddress) => setUserAddress(userAddress)}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: "top", padding: 10 }}
              />
              <Mybutton title="Atualizar Usuário" customClick={updateUser} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default connect(userFilter, { userFindById, userSave })(UpdateUser);
