import React from "react"
import {ScrollView, Text, View} from "react-native"
import ContactList from "../../components/ContactList"

const Main = ({navigation: {navigate}}) => {
    const contacts = [
        {name: "John Doe", phone: "7746586", image: "jojo.jpg"},
        {name: "Janius Does", phone: "6926586", image: "joje.jpg"},
    ]

    return (
        <View>
            <Text>Contactor</Text>
            <ScrollView>
                <ContactList contacts={contacts} />
            </ScrollView>
        </View>
    )
}

export default Main
