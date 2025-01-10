import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>

      <View style={styles.section}>
        <Text style={styles.content}>
          We are committed to providing high-quality and user-friendly
          applications to enhance your daily life. Our mission is to deliver
          innovative solutions that meet your needs.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Our Vision</Text>
        <Text style={styles.content}>
          To become the leading provider of solutions that empower users and
          help them achieve their goals in the most efficient way possible.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Our Values</Text>
        <Text style={styles.content}>
          - Innovation
          {'\n'}- Quality
          {'\n'}- Customer Satisfaction
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8', // Light gray background
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E90FF',
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
    textAlign: 'justify',
    lineHeight: 24,
  },
});
