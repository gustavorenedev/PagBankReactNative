import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { global } from "./css/Styles.js";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <View style={global.container}>
    <ScrollView horizontal={false}>
    <Header/>
    <Main/>
    </ScrollView>
    <Footer/>
  </View>
  );
}