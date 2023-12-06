import {
    View,
    Text,
    Pressable,
    TextInput,
    FlatList,
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
    const [Focused, setFocus] = useState(false)

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
                    style={Focused ? styles.focusedInput : styles.input}
                    onBlur={() => {
                        setFocus(false)
                    }}
                    onFocus={() => setFocus(true)}
                    placeholder="Search..."
                    onChangeText={(text) => setSearchTerm(text)}
                    value={searchTerm}
                />
            </View>

            {/* ////////////// Contacts list part ////////////// */}
            <FlatList
                style={styles.list}
                data={contactList.filter((contact) =>
                    contact.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
                )}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <Card info={item} refresh={refresh} />}
                ListFooterComponent={() => (
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
                )}
            />
        </SafeAreaView>
    )
}

export default ContactList
