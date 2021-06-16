import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
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

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
