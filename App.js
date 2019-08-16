import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Footer from './components/Footer/index'
import Body3 from './components/Body3/index'
import Body2 from './components/Body2/index'
import Header from './components/Body1/index'



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Body2 />

        <Body3 />
        <Footer />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
});
