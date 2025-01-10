import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';

export default function ImageScreen() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(
          'https://api.pexels.com/v1/search?query=computer',
          {
            headers: {
              Authorization:
                'H1T78K92q11J9trYJpeD1wo6SL1t3RyOZIfuMyB56Um7kQdhgx8Z4FWr',
            },
          },
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const jsonData = await response.json();
        setImages(jsonData.photos || []);
      } catch (err) {
        console.error('Error:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to fetch images: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Gallery</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map(item => (
          <Image
            key={item.id}
            source={{uri: item.src.medium}}
            style={styles.image}
          />
        ))}
      </ScrollView>
      <FlatList
        data={images}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.flatListItem}>
            <Image
              source={{uri: item.src.medium}}
              style={styles.flatListImage}
            />
            <Text style={styles.photographer}>{item.photographer}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  flatListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  flatListImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 8,
  },
  photographer: {
    fontSize: 16,
    color: '#333',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  errorText: {
    color: '#ff0000',
    fontSize: 16,
    textAlign: 'center',
  },
});
