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
function ContactList(contacts) {
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
