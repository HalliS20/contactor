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
import Spinner from "../Spinner"
import {importContacts} from "../../services/importContacts"
import {set} from "react-hook-form"

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
    useEffect(() => {
        setContactList(contacts)
    }, [contacts])
    // useFocusEffect(
    //     useCallback(() => {
    //         fetchContacts()
    //     }, []),
    // )

    const handleImportContacts = async () => {
        setIsLoading(true)
        await importContacts()
        fetchContacts()
        setIsLoading(false)
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
                        <Spinner />
                    ) : (
                        <Pressable
                            style={({pressed}) => [
                                {opacity: pressed ? 0.5 : 1},
                                styles.importButton,
                            ]}
                            title="importContacts"
                            onPress={() => {
                                handleImportContacts()
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
