import React, { useState, useEffect } from "react";
import { FlatList, Text, View, SafeAreaView, StyleSheet } from "react-native";

import { connect } from "react-redux";
import { userList } from "../redux/actions/UserAction";
import { userFilter } from "../redux/filters/UserFilter";

const ViewAllUser = (props) => {
  useEffect(() => {
    props.userList();
  }, []);

  let listItemView = (item) => {
    return (
      <View
        key={item.id}
        style={{
          backgroundColor: "#EEE",
          marginTop: 20,
          padding: 30,
          borderRadius: 10,
        }}
      >
        <Text style={styles.textheader}>Código</Text>
        <Text style={styles.textbottom}>{item.id}</Text>

        <Text style={styles.textheader}>Nome</Text>
        <Text style={styles.textbottom}>{item.userName}</Text>

        <Text style={styles.textheader}>Contato</Text>
        <Text style={styles.textbottom}>{item.userContact}</Text>

        <Text style={styles.textheader}>Endereço</Text>
        <Text style={styles.textbottom}>{item.userAddress}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ marginTop: 30 }}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            data={props.userArray}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textheader: {
    color: "#111",
    fontSize: 12,
    fontWeight: "700",
  },
  textbottom: {
    color: "#111",
    fontSize: 18,
  },
});

export default connect(userFilter, { userList })(ViewAllUser);
