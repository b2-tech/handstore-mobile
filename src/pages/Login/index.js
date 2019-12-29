import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import logo from '~/assets/images/shop.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width: WIDTH} = Dimensions.get('window');

export default function Login() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#238AF2" />
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>HandStore</Text>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Usuario'}
            placeholderTextColor={'#64798A'}
            underlineColorAndroid="transparent"
          />
          <Icon
            style={styles.inputIcon}
            name="md-person"
            size={20}
            color="#64798A"
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Senha'}
          secureTextEntry={true}
          placeholderTextColor={'#64798A'}
          underlineColorAndroid="transparent"
        />
        <Icon
          style={styles.inputIcon}
          name="md-lock"
          size={20}
          color="#64798A"
        />
        <TouchableOpacity style={styles.btnEye}>
          <Icon name={'ios-eye'} size={20} color="#64798A" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.btnLoginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity>
          <Text>Esqueci a senha</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDDDD',
    justifyContent: 'center',
  },

  imageContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },

  logo: {
    width: 180,
    height: 180,
  },

  logoText: {
    color: '#238AF2',
    fontSize: 36,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5,
    fontFamily: 'Helvetica',
  },

  footerContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },

  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    marginHorizontal: 25,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica',
    textAlign: 'left',
  },

  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 37,
  },

  inputContainer: {
    marginTop: 10,
    alignItems: 'center',
  },

  btnEye: {
    position: 'absolute',
    top: 10,
    right: 37,
  },

  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: '#238AF2',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  btnLoginText: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 19,
    color: '#FFFFFF',
  },
});
