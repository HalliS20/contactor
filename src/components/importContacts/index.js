import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';


export default function importContacts() {
    let[error, setError] = useState(undefined);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        console.log("granted")
      }})()
  return (
    <View>
      <Text>Contacts Module Example</Text>
    </View>
  );
})}