import React, {useState, useEffect} from "react"
import {ScrollView, Text, View} from "react-native"
import {
    addContact,
    getAllContacts,
    cleanDirectory,
} from "../services/fileService"
import ContactList from "../components/ContactList"
import data from "./data.js"

const Dummy = () => {
    const [contacts, setContacts] = useState([])
    const users = data()
    useEffect(() => {
        const add = true // change to true to add the data from data.js
        const clean = false // change to true to clean the directory

        if (add === true) {
            for (let i = 0; i < users.length; i++) {
                addContact(users[i])
            }
        }
        if (clean === true) {
            cleanDirectory()
        }

        getAllContacts().then((contacts) => {
            setContacts(contacts)
        })
    }, [])

    return (
        <View>
            <Text> Hollo Welt </Text>
            <ContactList contacts={contacts} />
        </View>
    )
}

export default Dummy