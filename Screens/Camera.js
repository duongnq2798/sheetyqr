import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const Camera = () => {
  const [name, setName] = useState('');
  const onRead = (userName) => {
    let b = userName.data;
    setName(b);
    console.log(b);
  };

  const addUser = async () => {
    try {
      await axios
        .post(
          'https://api.sheety.co/2eac1528c5b1172a30163e5921bc9c0f/reference/info',
          {
            info: {
              name: name,
            },
          },
        )
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    addUser();
  });

  return (
    <View>
      <Text>Camera Screen</Text>
      <QRCodeScanner
        onRead={onRead}
        flashMode={RNCamera.Constants.FlashMode.torch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
    color: 'white',
    backgroundColor: '#ef4f4f',
    margin: 20,
  },
});

export default Camera;
