import {useEffect, useState} from "react"
import {View, Text} from "react-native"
import * as Contacts from "expo-contacts"

export default function importContacts() {
    useEffect(() => {
        ;(async () => {
            const {status} = await Contacts.requestPermissionsAsync()
            if (status === "granted") {
                console.log("granted")
            }
        })()
        return (
            <View>
                <Text>Contacts Module Example</Text>
            </View>
        )
    })
}
