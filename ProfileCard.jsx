import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ProfileCard = ({isDarkMode}) => {
  return (
    <View
      style={[styles.card, {backgroundColor: isDarkMode ? '#222' : '#fff'}]}>
      <Image
        source={{
          uri: 'https://img.icons8.com/?size=100&id=23264&format=png&color=000000',
        }}
        style={styles.image}
      />

      <Text style={[styles.name, {color: isDarkMode ? '#fff' : '#333'}]}>
        Anuj Kumar Gupta
      </Text>

      <Text style={[styles.jobTitle, {color: isDarkMode ? '#ccc' : '#666'}]}>
        Software Engineer
      </Text>

      <Text style={[styles.bio, {color: isDarkMode ? '#bbb' : '#555'}]}>
        Passionate developer with expertise in mobile and web applications.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    width: 300,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  jobTitle: {
    fontSize: 16,
    marginVertical: 4,
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 8,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileCard;
