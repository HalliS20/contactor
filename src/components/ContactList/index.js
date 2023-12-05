import {View, Text, Pressable, Button} from "react-native"
import {useFocusEffect} from "@react-navigation/native"
import {useNavigation} from "@react-navigation/native"
import React, {useState, useEffect, useCallback} from "react"
import Card from "../Card"
import styles from "./style"
import {getAllContacts, addContact} from "../../services/fileService"
import importContacts from "../importContacts"
import * as Contacts from "expo-contacts"

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
    const fetchContacts = async () => {
        const fetchedContacts = await getAllContacts()
        setContactList(fetchedContacts)
    }

    useFocusEffect(
        useCallback(() => {
            fetchContacts()
        }, []),
    )
    const importContacts = async () => {
        const {status} = await Contacts.requestPermissionsAsync()
        if (status === "granted") {
            const {data} = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
            })

            if (data.length > 0) {
                data.forEach(async ({name, phoneNumbers, image}) => {
                    const contact = {
                        name: name,
                        phoneNumber: phoneNumbers[0]?.number, // Assuming you want the first phone number
                        image: image?.uri, // Assuming the image object has a uri property
                    }
                    await addContact(contact)
                })
            }
        }
    }

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
            <Button
                title="importContacts"
                onPress={() => {
                    importContacts()
                }}
            />
        </View>
    )
}

export default ContactList
