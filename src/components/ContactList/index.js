import {View, Text, Pressable, Button} from "react-native"
import {useFocusEffect} from "@react-navigation/native"
import {useNavigation} from "@react-navigation/native"
import React, {useState, useEffect, useCallback} from "react"
import Card from "../Card"
import styles from "./style"
import { addContact, getAllContacts, getOneContract, removeContact, createUserFile, cleanDirectory } from "../../services/fileService";
import { useFocusEffect } from '@react-navigation/native';
import * as Contacts from 'expo-contacts';

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
    const importContacts = async () => {
        try {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers],
                });
    
                if (data.length > 0) {
                    await Promise.all(data.map(async ({ firstName, lastName, phoneNumbers }) => {
                        let name = firstName;
                        if (name === undefined) {
                            name = "Unknown"
                        }
                        if(lastName !== undefined){
                            name = name + " " + lastName;
                        }
                        let phone = phoneNumbers && phoneNumbers[0] ? phoneNumbers[0].digits : null
                        if (phone === undefined) {
                            phone = ""
                        }
                        if (name === "unknown") {
                            name = phone;
                        }
                        const contactInfo = {
                            name: name,
                            phone: phone,
                            image: "https://www.nbmchealth.com/wp-content/uploads/2018/05/765-default-avatar-300x300.png",
                        };
                        console.log("This is importContacts Function:..",contactInfo)
                        await addContact(contactInfo);
                    }));
                    fetchContacts();
                }

            }
        } catch (error) {
            console.error('An error occurred while importing contacts:', error);
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
