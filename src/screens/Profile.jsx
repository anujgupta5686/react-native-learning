import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Profile Page</Text>
      <Text style={styles.subtitle}>Hello Developer</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Profile;
