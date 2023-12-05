import {
    View,
    Text,
    Pressable,
    TextInput,
    ScrollView,
    SafeAreaView,
} from "react-native"
import {useNavigation} from "@react-navigation/native"
import React, {useState, useEffect} from "react"
import Card from "../Card"
import styles from "./style"
import Spinner from "../Spinner"
import {importContacts} from "../../services/importContacts"

/**
 * @desc This is the contact list component
 * @param {object} props
 * @return {ReactElement} ContactList
 * @example <ContactList />
 * @exports ContactList
 */
function ContactList({contacts, refresh, setRefresh}) {
    const navigation = useNavigation()
    const [contactList, setContactList] = useState(contacts)
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    //////////////// importing contacts ///////////////
    const handleImportContacts = async () => {
        setIsLoading(true)
        await importContacts().then(() => {
            setRefresh(true) // sets refresh to true and triggers full page refresh
        })
        setIsLoading(false)
    }

    /////////////// For refreshing /////////
    useEffect(() => {
        setContactList(contacts)
    }, [contacts])

    // listen for change in refresh
    useEffect(() => {
        if (refresh) {
            setContactList(contacts)
            setRefresh(!refresh) // Reset refresh state after refreshing the list
        }
    }, [refresh])

    return (
        <SafeAreaView style={styles.container}>
            {/* /////////// Header part /////////  */}
            <View style={styles.header}>
                <View style={styles.topTitle}>
                    <Text style={styles.title}>Contactor</Text>
                    <Pressable
                        onPress={() => {
                            navigation.navigate("Contact Form")
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

            {/* ////////////// Contacts list part ////////////// */}
            <ScrollView style={styles.list}>
                {contactList
                    .filter((contact) =>
                        contact.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()),
                    )
                    .map((contact, index) => (
                        <Card key={index} info={contact} refresh={refresh} />
                    ))}
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {/* ////// Displays spinner if loading otherwise import Button /////// */}
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
                                handleImportContacts()
                            }}
                        >
                            <Text>Import Contacts</Text>
                        </Pressable>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ContactList
