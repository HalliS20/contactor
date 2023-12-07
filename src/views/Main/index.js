import React, {useState, useCallback, useEffect} from "react"
import {View} from "react-native"
import {getAllContacts, cleanDirectory} from "../../services/fileService"
import ContactList from "../../components/ContactList"
import {useFocusEffect} from "@react-navigation/native"
import styles from "./styles"

const Main = ({navigation: {navigate}, route}) => {
    route.params = route.params || {shouldFetchContacts: false}

    const [contacts, setContacts] = useState([])
    const [refresh, setRefresh] = useState(false)

    const fetchContacts = useCallback(() => {
        ////////// For deletin all data in development //////////
        const clean = false // change to true to clean the directory

        if (clean === true) {
            cleanDirectory()
        }

        ////////// For adding contacts //////////
        getAllContacts().then((contacts) => {
            setContacts(contacts)
            setRefresh(!refresh) // Reset refresh state after refreshing the list
        })
    }, [refresh])

    useEffect(() => {
        fetchContacts()
    }, [fetchContacts])

    useFocusEffect(
        useCallback(() => {
            if (route.params.shouldFetchContacts) {
                fetchContacts()
                // Reset the parameter after fetching the contacts
                route.params.shouldFetchContacts = false
            }
        }, [route.params.shouldFetchContacts, fetchContacts]),
    )

    return (
        <View style={styles.main}>
            <ContactList
                contacts={contacts}
                refresh={refresh}
                setRefresh={setRefresh}
            />
        </View>
    )
}

export default Main
