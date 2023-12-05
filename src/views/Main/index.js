import React, {useState, useEffect} from "react"
import {Text, View} from "react-native"
import {
    addContact,
    getAllContacts,
    cleanDirectory,
} from "../../services/fileService"
import ContactList from "../../components/ContactList"

const Main = ({navigation: {navigate}}) => {
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        const clean = false // change to true to clean the directory

        if (clean === true) {
            cleanDirectory()
        }

        getAllContacts().then((contacts) => {
            setContacts(contacts)
        })
    }, [])

    return (
        <View>
            <ContactList contacts={contacts} />
        </View>
    )
}

export default Main
