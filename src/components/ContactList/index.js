import {View, Text, Pressable} from "react-native"
import React from "react"
import Card from "../Card"
import styles from "./style"
import {useNavigation} from "@react-navigation/native"

/**
 * @desc This is the contact list component
 * @param {object} props
 * @return {ReactElement} ContactList
 * @example <ContactList />
 * @exports ContactList
 */
function ContactList({contacts}) {
    const {navigate} = useNavigation()
    return (
        <View style={styles.container}>
            {contacts.map((contact, index) => (
                <Card key={index} info={contact} />
            ))}
            <Pressable
                onPress={() => {
                    console.log("Pressed Add Contact")
                    navigate("CreateContact")
                }}
                style={({pressed}) => [
                    {opacity: pressed ? 0.5 : 1},
                    styles.innerContainer,
                ]}
            >
                <Text>Add Contact </Text>
            </Pressable>
        </View>
    )
}

export default ContactList
