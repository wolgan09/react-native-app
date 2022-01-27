import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function MessageItem(props) {
  return (
    <View style={styles}>
      <Image style={styles.Image} />
      <Text style={styles.chatItem}> {props.children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  chatItem: {
    backgroundColor: 'yellow',
    padding: 10,
    marginTop: 10,
    borderwidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    width: 250,
    float: 'right',
  },
  senderImage: {},
});
