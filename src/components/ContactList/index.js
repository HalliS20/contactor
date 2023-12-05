import {View, Text, Pressable} from "react-native"
import React, {useState, useEffect, useCallback} from "react"
import Card from "../Card"
import styles from "./style"
import {getAllContacts} from "../../services/fileService"
import {useFocusEffect} from "@react-navigation/native"
import {useNavigation} from "@react-navigation/native"

/**
 * @desc This is the contact list component
 * @param {object} props
 * @return {ReactElement} ContactList
 * @example <ContactList />
 * @exports ContactList
 */
function ContactList({contacts}) {
    const navigation = useNavigation()
    const [contactList, setContactList] = useState(contacts)
    console.log("This is ContactList Function:..", contacts)
    const fetchContacts = async() => {
        const fetchedContacts = await getAllContacts()
        setContactList(fetchedContacts)
    }

    useFocusEffect(
        useCallback(() => {
            fetchContacts()
        }, []),
    )

    return (
        <View style={styles.container}>
            {contactList.map((contact, index) => (
                <Card key={index} info={contact} />
            ))}
            <Pressable
                onPress={() => {
                    console.log("Pressed Add Contact")
                    navigation.navigate("ContactForm")
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
