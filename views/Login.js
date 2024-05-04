import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, Pressable} from 'react-native';
import {
  TextInput,
  Button,
  Headline,
  Paragraph,
  Dialog,
  Portal,
} from 'react-native-paper';
import globalStyles from '../styles/global';

const Login = ({navigation}) => {
  //STATE SEE PASSWORD
  const [mostrarPassword, setmostrarPassword] = useState(false);

  //STATE FORM
  const [correoForm, setcorreoForm] = useState('');
  const [passwordForm, setpasswordForm] = useState('');
  const cambiarBoton = mostrarBoton => (mostrarPassword ? 'eye-off' : 'eye');

  //STATE ALERTA
  const [alerta, mostrarAlerta] = useState(false);

  //REACT NAVIGATION
  const {navigate} = navigation;

  //INICIAR SESIÓN
  const iniciarSesion = () => {
    //VALIDAR
    if (correoForm === '' || passwordForm === '') {
      mostrarAlerta(true);
      return;
    }
    const usuarioLogueado={

    }
  };

  return (
    <View style={[globalStyles.contenedor, {backgroundColor: '#3B8C8C'}]}>
      <View style={globalStyles.contenidoInicio}>
        <Headline>Bienvenido a:</Headline>
        <Headline style={globalStyles.tituloInicio}>
          <Text style={{color: '#A8BF56'}}>Termo </Text>
          <Text style={{color: '#F27F1B'}}>Oasis</Text>
        </Headline>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.logo}
            source={require('../assets/logoTermo.png')}
          />
        </View>
        <Text>Inicia Sesión con las credenciales enviadas a tu correo</Text>
        <TextInput
          style={globalStyles.input}
          label={'Correo Electrónico'}
          keyboardType={'email-address'}
          value={correoForm}
          onChangeText={texto => setcorreoForm(texto)}
        />
        <TextInput
          style={globalStyles.input}
          label="Password"
          value={passwordForm}
          // se oculta cambiando a true
          secureTextEntry={!mostrarPassword}
          right={
            <TextInput.Icon
              icon={cambiarBoton(mostrarPassword)}
              //si aplasta el boton cambia a false, mostrando el password
              onPress={() => setmostrarPassword(!mostrarPassword)}
            />
          }
          onChangeText={texto => setpasswordForm(texto)}
        />

        <Pressable onPress={() => navigate('RecuperarContraseña')}>
          <Text>¿Olvidaste tu contraseña?</Text>
        </Pressable>

        <Button
          mode="contained"
          style={{marginTop: 50}}
          onPress={() => iniciarSesion()}>
          Iniciar Sesión
        </Button>
      </View>
      <Portal>
          <Dialog visible={alerta} onDismiss={()=>mostrarAlerta(false)}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => mostrarAlerta(false)}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 200,
    flex: 1,
  },
});
export default Login;
