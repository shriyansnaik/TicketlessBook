import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import AttractionListItem from './common/AttractionListItem';
const data = [
  {
    image: require('../assets/Images/login3.jpg'),
    heading: 'India Gate',
    description:'The India Gate (formerly known as the All India War Memorial) is a war memorial located astride the Rajpath, on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Kingsway. It stands as a memorial to 90,000 soldiers of the British Indian Army who died in between 1914 and 1921 in the First World War, in France, Flanders, Mesopotamia, Persia, East Africa, Gallipoli and elsewhere in the Near and the Far East, and the Third Anglo-Afghan War. 13,300 servicemens names, including some soldiers and officers from the United Kingdom, are inscribed on the gate.',
    price:'120',
    rating: '3.7',
  },
  {
    image: require('../assets/Images/login4.jpg'),
    heading: 'India Gate',
    description:'The India Gate (formerly known as the All India War Memorial) is a war memorial located astride the Rajpath, on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Kingsway. It stands as a memorial to 90,000 soldiers of the British Indian Army who died in between 1914 and 1921 in the First World War, in France, Flanders, Mesopotamia, Persia, East Africa, Gallipoli and elsewhere in the Near and the Far East, and the Third Anglo-Afghan War. 13,300 servicemens names, including some soldiers and officers from the United Kingdom, are inscribed on the gate.',
    price:'120',
    rating: '3.7',
  },
  {
    image: require('../assets/Images/login1.jpg'),
    heading: 'India Gate',
    description:'The India Gate (formerly known as the All India War Memorial) is a war memorial located astride the Rajpath, on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Kingsway. It stands as a memorial to 90,000 soldiers of the British Indian Army who died in between 1914 and 1921 in the First World War, in France, Flanders, Mesopotamia, Persia, East Africa, Gallipoli and elsewhere in the Near and the Far East, and the Third Anglo-Afghan War. 13,300 servicemens names, including some soldiers and officers from the United Kingdom, are inscribed on the gate.',
    price:'120',
    rating: '3.7',
  },
  {
    image: require('../assets/Images/login3.jpg'),
    heading: 'India Gate',
    description:'The India Gate (formerly known as the All India War Memorial) is a war memorial located astride the Rajpath, on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Kingsway. It stands as a memorial to 90,000 soldiers of the British Indian Army who died in between 1914 and 1921 in the First World War, in France, Flanders, Mesopotamia, Persia, East Africa, Gallipoli and elsewhere in the Near and the Far East, and the Third Anglo-Afghan War. 13,300 servicemens names, including some soldiers and officers from the United Kingdom, are inscribed on the gate.',
    price:'120',
    rating: '3.7',
  },
  {
    image: require('../assets/Images/login2.jpg'),
    heading: 'India Gate',
    description:'The India Gate (formerly known as the All India War Memorial) is a war memorial located astride the Rajpath, on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Kingsway. It stands as a memorial to 90,000 soldiers of the British Indian Army who died in between 1914 and 1921 in the First World War, in France, Flanders, Mesopotamia, Persia, East Africa, Gallipoli and elsewhere in the Near and the Far East, and the Third Anglo-Afghan War. 13,300 servicemens names, including some soldiers and officers from the United Kingdom, are inscribed on the gate.',
    price:'120',
    rating: '3.7',
  },
 
];
const HomeScreen = () => {
  const {screen, searchBox, searchBoxContainer} = styles;
  return (
    <View style={screen}>
      <View style={searchBoxContainer}>
        <TextInput style={searchBox}>
          <Image
            style={{height: 10, width: 10, zIndex: 1}}
            source={require('../assets/Icons/search.png')}></Image>
        </TextInput>
      </View>

      <FlatList
        contentContainerStyle={{alignSelf:'center'}}
        data={data}
        renderItem={({item, index}) => (
          <AttractionListItem
            image={item.image}
            heading={item.heading}
            description={item.description}
            price={item.price}
            rating={item.rating}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#edebe8',
  },
  searchBoxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchBox: {
    width: '75%',
    height: 40,
    margin: 10,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#90E0EF',
    padding: 10,
  },
});

export default HomeScreen;
