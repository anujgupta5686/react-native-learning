import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const ImageDetailPage = ({route}) => {
  const {image} = route.params; // Get the selected image passed via navigation

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: image.src.original}} style={styles.image} />
      <Text style={styles.photographer}>{image.photographer}</Text>
      <Text style={styles.details}>Image Details:</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Original: {image.src.original}</Text>
        <Text style={styles.detailText}>Large 2x: {image.src.large2x}</Text>
        <Text style={styles.detailText}>Large: {image.src.large}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 15,
  },
  photographer: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  details: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  detailsContainer: {
    marginTop: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ImageDetailPage;
