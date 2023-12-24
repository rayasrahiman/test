import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

export default function LoginScreen({navigation}) {
  const phoneInput = useRef(null);
  const [number, setNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Images/wallpaper.jpg')}
          style={styles.image}
        />
      </View>
      <PhoneInput
        containerStyle={styles.phoneInputContainer}
        textContainerStyle={styles.textContainer}
        ref={phoneInput}
        defaultValue={number}
        defaultCode="IN"
        layout="second"
        onChangeText={text => {
          setNumber(text);
        }}
        onChangeFormattedText={text => {
          setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
        autoFocus
      />
      <TouchableOpacity
        disabled={number === '' ? true : false}
        style={styles.buttonContainer}
        onPress={() =>
          navigation.navigate('OTP', {phoneNumber: formattedValue})
        }>
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.termsText}>
          By signing up, you agree with our Terms and conditions
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', backgroundColor: 'white'},
  imageContainer: {
    marginBottom: 15,
    height: 250,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  phoneInputContainer: {borderRadius: 25, alignItems: 'center'},
  textContainer: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    height: 40,
    paddingTop: 0,
    paddingBottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    borderRadius: 25,
    width: '80%',
    padding: 10,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  },
  buttonText: {color: '#fcedea', fontWeight: 'bold', fontSize: 16},
  termsText: {textAlign: 'center', marginHorizontal: 10, marginTop: 50},
});
