/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import logo from './assets/images/images.png';
import {Node} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MessageItem from './components/MessageItem';

const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [chatText, setChatText] = useState(null);

  const sendMessage = text => {
    setMessageList([...messageList, chatText]);
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={[
            {
              backgroundColor: Colors.white,
              alignItems: 'center',
            },
          ]}>
          <Image style={styles.logo} source={logo} />
          <Text style={[styles.titleText, {paddingTop: '10%'}]}>Ping me</Text>
          {messageList &&
            messageList.map((message, idx) => (
              <MessageItem>{message}</MessageItem>
            ))}
          <TextInput
            style={[styles.chatInput]}
            placeholder="Chat"
            onChangeText={text => setChatText(text)}
          />
          <Button onPress={sendMessage} title="Send" />
          <Button onPress={() => setMessageList([])} title="Clear" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  titleText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    height: 90,
    width: 100,
    marginTop: 50,
  },
  chatInput: {
    padding: 5,
    fontSize: 20,
    width: '75%',
    borderWidth: 2,
    borderRadius: 18,
    borderColor: 'gray',
    bottom: 0,
  },
  chatBody: {
    backgroundColor: '#334422',
    width: '100%',
    height: 300,
  },
});

export default App;
