import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default function Contact() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      <View style={styles.section}>
        <Text style={styles.content}>
          If you have any questions or feedback, feel free to reach out to us
          at:
        </Text>
        <Text style={styles.email}>abcd@example.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Dummy Address</Text>
        <Text style={styles.content}>1234 Street Name, City, Country</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Follow Us</Text>
        <Text style={styles.content}>
          Stay connected with us on social media:
          {'\n'}- Linkedin: @example
          {'\n'}- Twitter: @example
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
    backgroundColor: '#4A90E2',
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
  email: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
});
