import {
    View,
    Text,
    Pressable,
    Button,
    TextInput,
    ScrollView,
} from "react-native"
import {useNavigation, useFocusEffect} from "@react-navigation/native"
import React, {useState, useCallback, useEffect} from "react"
import Card from "../Card"
import styles from "./style"
import {getAllContacts, addContact} from "../../services/fileService"
import * as Contacts from "expo-contacts"
import {buttonStyle} from "../../styles/buttons"
import Spinner from "../Spinner"

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
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const fetchContacts = async () => {
        setIsLoading(true)
        const fetchedContacts = await getAllContacts()
        setContactList(fetchedContacts)
        setIsLoading(false)
    }

    useFocusEffect(
        useCallback(() => {
            fetchContacts()
        }, []),
    )

    useEffect(() => {
        console.log("isLoading:", isLoading) // log the isLoading state
    }, [isLoading])

    const importContacts = async () => {
        try {
            const {status} = await Contacts.requestPermissionsAsync()
            if (status === "granted") {
                const {data} = await Contacts.getContactsAsync({
                    fields: [
                        Contacts.Fields.FirstName,
                        Contacts.Fields.LastName,
                        Contacts.Fields.PhoneNumbers,
                    ],
                })

                if (data.length > 0) {
                    await Promise.all(
                        data.map(
                            async ({firstName, lastName, phoneNumbers}) => {
                                let name = firstName
                                if (name === undefined) {
                                    name = "Unknown"
                                }
                                if (lastName !== undefined) {
                                    name = name + " " + lastName
                                }
                                let phone =
                                    phoneNumbers && phoneNumbers[0]
                                        ? phoneNumbers[0].digits
                                        : null
                                if (phone === undefined) {
                                    phone = ""
                                }
                                if (name === "unknown") {
                                    name = phone
                                }
                                const contactInfo = {
                                    name: name,
                                    phone: phone,
                                    image: undefined,
                                }
                                console.log(
                                    "This is importContacts Function:..",
                                    contactInfo,
                                )
                                setIsLoading(true)
                                await addContact(contactInfo)
                                setIsLoading(false)
                            },
                        ),
                    )
                    fetchContacts()
                }
            }
        } catch (error) {
            console.error("An error occurred while importing contacts:", error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.topTitle}>
                    <Text style={styles.title}>Contactor</Text>
                    <Pressable
                        onPress={() => {
                            navigation.navigate("ContactForm")
                        }}
                        style={({pressed}) => [
                            {opacity: pressed ? 0.5 : 1},
                            styles.button,
                        ]}
                    >
                        <Text style={styles.buttonText}> + </Text>
                    </Pressable>
                </View>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search..."
                    onChangeText={(text) => setSearchTerm(text)}
                    value={searchTerm}
                />
            </View>
            <ScrollView style={styles.list}>
                {contactList
                    .filter((contact) =>
                        contact.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()),
                    )
                    .map((contact, index) => (
                        <Card key={index} info={contact} />
                    ))}
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {isLoading ? (
                        <View style={styles.spinner}>
                            <Spinner />
                        </View>
                    ) : (
                        <Pressable
                            style={({pressed}) => [
                                {opacity: pressed ? 0.5 : 1},
                                styles.importButton,
                            ]}
                            title="importContacts"
                            onPress={() => {
                                importContacts()
                            }}
                        >
                            <Text>Import Contacts</Text>
                        </Pressable>
                    )}
                </View>
            </ScrollView>
        </View>
    )
}

export default ContactList
