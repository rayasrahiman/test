import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import Clipboard from '@react-native-clipboard/clipboard';

export default function OTPScreen({route}) {
  const {phoneNumber} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [otpInput, setOtpInput] = useState('');
  const input = useRef(null);

  const handleCellTextChange = async (text, i) => {
    if (i === 0) {
      const clippedText = await Clipboard.getString();
      if (clippedText.slice(0, 1) === text) {
        input.current?.setValue(clippedText, true);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Your details has been submitted.
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Okay</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Images/wallpaper.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.otpHeadingTxt}>OTP Sent to</Text>
        <Text style={styles.otpPhonenumberTxt}>{phoneNumber}</Text>
      </View>
      <OTPTextView
        textInputStyle={styles.otpTextInput}
        ref={input}
        containerStyle={styles.textInputContainer}
        handleTextChange={setOtpInput}
        handleCellTextChange={handleCellTextChange}
        inputCount={4}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Verify OTP</Text>
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
  textInputContainer: {
    marginBottom: 20,
  },
  imageContainer: {
    marginBottom: 15,
    height: 250,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  otpTextInput: {
    borderWidth: 1,
    borderRadius: 15,
    width: 65,
    height: 35,
    paddingTop: 0,
    paddingBottom: 5,
  },
  textContainer: {marginBottom: 15, alignItems: 'center'},
  otpHeadingTxt: {color: 'black', fontSize: 16},
  otpPhonenumberTxt: {color: 'black', fontSize: 16, fontWeight: 'bold'},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 15,
    width: 100,
    borderRadius: 25,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#87CEEB',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    borderRadius: 25,
    width: '80%',
    padding: 10,
    marginTop: 5,
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  },
  buttonText: {color: '#fcedea', fontWeight: 'bold', fontSize: 16},
  termsText: {textAlign: 'center', marginHorizontal: 10, marginTop: 50},
});
