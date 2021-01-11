import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import axios from 'axios';
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const List = () => {
  const [datalist, setDataList] = useState([]);
  const getList = async () => {
    try {
      const lists = await axios.get(
        'https://api.sheety.co/2eac1528c5b1172a30163e5921bc9c0f/reference/info',
      );
      setDataList(lists.data.info);
      console.log(lists.data.info);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={datalist}
        renderItem={({item}) => (
          <Text style={styles.listItem}>
            {item.id} : {item.name}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default List;
