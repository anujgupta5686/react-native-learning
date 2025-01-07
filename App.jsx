import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Card from './Card';

const Stack = createStackNavigator();

const App = () => {
  const [images, setImages] = useState([]);
  const [inputData, setInputData] = useState('');
  const [resultData, setResultData] = useState([]);

  const onInputSubmitHandler = () => {
    if (inputData.trim() !== '') {
      setResultData(prevData => [...prevData, inputData]);
      setInputData('');
    }
  };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(
          'https://api.pexels.com/v1/search?query=people',
          {
            headers: {
              Authorization:
                'H1T78K92q11J9trYJpeD1wo6SL1t3RyOZIfuMyB56Um7kQdhgx8Z4FWr',
            },
          },
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const jsonData = await response.json();
        setImages(jsonData.photos || []);
      } catch (err) {
        console.error('Error:', err.message);
      }
    };

    fetchAPI();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
      <SafeAreaView style={styles.safeContainer}>
        <Text style={styles.heading}>Story</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.imageScroll}>
          {images.map(item => (
            <Image
              key={item.id}
              source={{uri: item.src.medium}}
              style={styles.image}
            />
          ))}
        </ScrollView>
        <View style={styles.titleInput}>
          <TextInput
            style={styles.inputText}
            keyboardType="number-pad"
            placeholder="Enter Your Name..."
            value={inputData}
            onChangeText={text => setInputData(text)}
            placeholderTextColor="#888"
          />
          <TouchableOpacity
            style={styles.buttonSave}
            onPress={onInputSubmitHandler}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultHeading}>Results:</Text>
          <FlatList
            data={resultData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <Text style={styles.resultItem}>
                {index + 1}. {item}
              </Text>
            )}
          />
        </View>
        <Card images={images} />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f9fafc',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#2c3e50',
  },
  imageScroll: {
    marginBottom: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  titleInput: {
    flexDirection: 'column',
    gap: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    elevation: 2,
    marginBottom: 20,
  },
  inputText: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
  },
  buttonSave: {
    backgroundColor: '#4caf50',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    elevation: 2,
    marginBottom: 20,
  },
  resultHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultItem: {
    fontSize: 16,
    color: '#555',
    paddingVertical: 3,
  },
});

export default App;
