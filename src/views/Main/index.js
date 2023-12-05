import React, {useState, useEffect, useCallback} from "react"
import {Text, View} from "react-native"
import {
    addContact,
    getAllContacts,
    cleanDirectory,
} from "../../services/fileService"
import ContactList from "../../components/ContactList"
import {useFocusEffect} from "@react-navigation/native"

const Main = ({navigation: {navigate}}) => {
    const [contacts, setContacts] = useState([])
    const [refresh, setRefresh] = useState(false)

    const fetchContacts = useCallback(() => {
        const clean = false // change to true to clean the directory

        if (clean === true) {
            cleanDirectory()
        }

        getAllContacts().then((contacts) => {
            setContacts(contacts)
            setRefresh(!refresh)
        })
    }, [refresh])

    useFocusEffect(fetchContacts)

    return (
        <View>
            <ContactList
                contacts={contacts}
                refresh={refresh}
                setRefresh={setRefresh}
            />
        </View>
    )
}

export default Main
