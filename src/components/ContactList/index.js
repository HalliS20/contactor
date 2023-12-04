import {View, Text, Pressable} from "react-native"
import React from "react"
import Card from "../Card"

/**
 * @desc This is the contact list component
 * @param {object} props
 * @return {ReactElement} ContactList
 * @example <ContactList />
 * @exports ContactList
 */
function ContactList() {
    contacts = [
        {name: "John Doe", phone: "7746586", imaga: "jojo.jpg"},
        {name: "John Doe", phone: "6926586", imaga: "joje.jpg"},
    ]
    return (
        <View>
            {contacts.map((contact, index) => (
                <Card key={index} contact={contact} />
            ))}
            <Pressable>
                <Text>Add Contact </Text>
            </Pressable>
        </View>
    )
}

export default ContactList
