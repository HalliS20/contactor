import {View, Text, Pressable} from "react-native"
import React,{ useState, useEffect } from "react"
import Card from "../Card"
import styles from "./style"
import { addContact, getAllContacts, getOneContract, removeContact, createUserFile, cleanDirectory } from "../../services/fileService";

/**
 * @desc This is the contact list component
 * @param {object} props
 * @return {ReactElement} ContactList
 * @example <ContactList />
 * @exports ContactList
 */



function ContactList({contacts}) {
    console.log("This is ContactList Function:..",contacts)

    return (
        <View style={styles.container}>
            {contacts.map((contact, index) => (
                <Card key={index} info={contact} />
            ))}
            <Pressable
                onPress={() => {
                    console.log("Pressed Add Contact")
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
