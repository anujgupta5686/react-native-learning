import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const Card = ({images}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>List of Pexel Image🚀</Text>
      <FlatList
        data={images}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={{uri: item.src.medium}} style={styles.image} />
            <Text style={styles.imageText}>{item.photographer}</Text>
          </View>
        )}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 24,
    paddingBottom: 20,
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    marginLeft: 20,
  },
  flatListContent: {
    paddingBottom: 10,
  },
  card: {
    // height: 50,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    paddingHorizontal: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  imageText: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
});

export default Card;
