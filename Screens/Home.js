import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#ef4f4f',
          borderRadius: 50,
          margin: 15,
        }}
        onPress={() => {
          navigation.navigate('Camera');
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            padding: 20,
            textAlign: 'center',
          }}>
          Đi đến camera
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#ef4f4f',
          borderRadius: 50,
          margin: 15,
        }}
        onPress={() => {
          navigation.navigate('List');
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            padding: 20,
            textAlign: 'center',
          }}>
          Xem danh sách có mặt
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
