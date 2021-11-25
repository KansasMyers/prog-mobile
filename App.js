import * as React from "react";

import "react-native-gesture-handler";
import "localstorage-polyfill";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/pages/HomeScreen";
import RegisterUser from "./src/pages/RegisterUser";
import UpdateUser from "./src/pages/UpdateUser";
import ViewUser from "./src/pages/ViewUser";
import ViewAllUser from "./src/pages/ViewAllUser";
import DeleteUser from "./src/pages/DeleteUser";

const Stack = createStackNavigator();

import { Provider } from "react-redux";
import store from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Procura-se",
              headerStyle: {
                backgroundColor: "#132F70",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterUser}
            options={{
              title: "Cadastrar Usuário",
              headerStyle: {
                backgroundColor: "#00F2E0",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Update"
            component={UpdateUser}
            options={{
              title: "Atualizar Usuário",
              headerStyle: {
                backgroundColor: "#A45BB9",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="View"
            component={ViewUser}
            options={{
              title: "Visualizar Usuário",
              headerStyle: {
                backgroundColor: "#F9AD29",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="ViewAll"
            component={ViewAllUser}
            options={{
              title: "Visualizar Todos os Usuários",
              headerStyle: {
                backgroundColor: "#384F62",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Delete"
            component={DeleteUser}
            options={{
              title: "Excluir Usuário",
              headerStyle: {
                backgroundColor: "#D1503A",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
