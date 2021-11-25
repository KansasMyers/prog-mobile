import React, { useState } from "react";
import { View, Alert, SafeAreaView } from "react-native";
import Mytextinput from "./components/Mytextinput";
import Mybutton from "./components/Mybutton";

import { connect } from "react-redux";
import { userFindById, userDeleteById } from "../redux/actions/UserAction";
import { userFilter } from "../redux/filters/UserFilter";

const DeleteUser = (props) => {
  let [inputUserId, setInputUserId] = useState("");

  let deleteUser = () => {
    props.userDeleteById(inputUserId);

    Alert.alert(
      "Sucesso",
      "Usuário Excluído com Sucesso!",
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
          <Mytextinput
            placeholder="Entre com o Código do Usuário"
            onChangeText={(inputUserId) => setInputUserId(inputUserId)}
            style={{ padding: 10 }}
          />
          <Mybutton title="Excluir Usuário" customClick={deleteUser} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default connect(userFilter, { userFindById, userDeleteById })(
  DeleteUser
);
