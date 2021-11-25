import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import Mytext from "./components/Mytext";
import Mytextinput from "./components/Mytextinput";
import Mybutton from "./components/Mybutton";

import { connect } from "react-redux";
import { userFindById } from "../redux/actions/UserAction";
import { userFilter } from "../redux/filters/UserFilter";

const ViewUser = (props) => {
  let [inputUserId, setInputUserId] = useState("");

  let searchUser = () => {
    props.userFindById(inputUserId);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <Mytext text="Filtro de Usuário" />
          <Mytextinput
            placeholder="Entre com o Código do Usuário"
            onChangeText={(inputUserId) => setInputUserId(inputUserId)}
            style={{ padding: 10 }}
          />
          <Mybutton title="Buscar Usuário" customClick={searchUser} />
          <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10,
            }}
          >
            <Text>Código : {props.userItem.id}</Text>
            <Text>Nome : {props.userItem.userName}</Text>
            <Text>Telefone : {props.userItem.userContact}</Text>
            <Text>Endereço : {props.userItem.userAddress}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default connect(userFilter, { userFindById })(ViewUser);