import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import { DefaultTheme,PaperProvider } from 'react-native-paper'
import Login from './views/Login';
import RecuperarContraseña from './views/RecuperarContraseña';


const Stack = createNativeStackNavigator();
const temaPersonalizado = {
  dark: true, // Establecer en true para el tema oscuro
  roundness: 4, // Aumentar la redondez de los elementos
  colors: {
    primary: '#F27F1B', // Cambiar el color primario
    accent: '#ffc107', // Cambiar el color secundario
    background: '#3B8C8C', // Cambiar el color de fondo para el tema oscuro
    // ...otras personalizaciones de color
  },
};


const App = () => {
  return (
    <>
      <PaperProvider theme={temaPersonalizado}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: 'Iniciar Sesión',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="RecuperarContraseña"
              component={RecuperarContraseña}
              options={{
                title: 'Recuperar Contraseña',
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

export default App;
