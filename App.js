import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: Math.floor(Math.random() * 10000),
      text: 'Milk',
    },
    {
      id: Math.floor(Math.random() * 10000),
      text: 'Eggs',
    },
    {
      id: Math.floor(Math.random() * 10000),
      text: 'Butter',
    },
    {
      id: Math.floor(Math.random() * 10000),
      text: 'Bread',
    },
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}]);
      return;
    } else {
      setItems(prevItems => {
        return [{id: Math.floor(Math.random() * 10000), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="SHOPPING LIST" />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      <AddItem addItem={addItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020723',
  },
});

export default App;
