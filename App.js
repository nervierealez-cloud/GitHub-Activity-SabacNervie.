
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>

        {/* Profile Picture */}
        <Image
          source={require('./assets/f227af03-f745-44b4-821b-04537304ecc7.jpg')}
          style={styles.avatar}
          resizeMode="cover"
        />

        <Text style={styles.title}>ABOUT ME</Text>

        <Text style={styles.name}>Nervie Sabac</Text>

        <Text style={styles.course}>
          Bachelor of Science in Information Technology
        </Text>

        <View style={styles.line} />

        {/* Introduction */}
        <Text style={styles.heading}>Holah!</Text>

        <Text style={styles.description}>
          My name is Nervie Sabac, and I am from Olutanga,
          Zamboanga Sibugay. I am currently a 3rd year
          student taking Bachelor of Science in Information
          Technology. I love learning new things and
          discovering new experiences.
        </Text>

        {/* Interests */}
        <Text style={styles.heading}>My Interests</Text>

        <View style={styles.tagContainer}>
          <Text style={styles.tag}>🍳 Cooking</Text>
          <Text style={styles.tag}>📸 Photography</Text>
          <Text style={styles.tag}>📚 Reading</Text>
          <Text style={styles.tag}>🎤 Singing</Text>
        </View>

        {/* Goals */}
        <Text style={styles.heading}>My Goal</Text>

        <Text style={styles.description}>
          My goal is to improve my coding skills, gain more
          knowledge about technology, and become a
          successful IT professional in the future. I want
          to continue learning and become better every day.
        </Text>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Created with React Native 💗
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f3c2eb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#a87599',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c41ea0',
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#c41ea0',
    marginBottom: 18,
  },

  title: {
    color: '#b91bb1',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 3,
  },

  name: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },

  course: {
    color: '#FFFFFF',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
  },

  line: {
    height: 1,
    backgroundColor: '#ce23ce',
    width: '100%',
    marginVertical: 22,
  },

  heading: {
    color: '#f8b5f0',
    fontSize: 19,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 12,
    marginBottom: 8,
  },

  description: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 23,
    textAlign: 'justify',
    alignSelf: 'stretch',
  },

  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 10,
  },

  tag: {
    backgroundColor: '#f1bfed',
    color: '#70265f',
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 12,
    overflow: 'hidden',
  },

  footer: {
    marginTop: 25,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#f39ad5',
    width: '100%',
    alignItems: 'center',
  },

  footerText: {
    color: '#ffd6f8',
    fontSize: 12,
  },
});
