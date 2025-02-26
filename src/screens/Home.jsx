import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen</Text>
      <View style={styles.section}>
        <Text style={styles.content}>
          Explore our app and enjoy its amazing features. This application is
          designed to provide you with a smooth experience while browsing
          content.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Amazing Features</Text>
        <Text style={styles.content}>
          - Easy navigation
          {'\n'}- Beautiful UI design
          {'\n'}- Smooth performance
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Get Started</Text>
        <Text style={styles.content}>Sign up today and begin exploring!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A90E2', // Solid background color
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#444',
    textAlign: 'left',
    lineHeight: 24,
  },
});
