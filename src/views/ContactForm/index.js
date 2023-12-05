import React, {useState} from "react"
import {View, TextInput, Button} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {addContact} from "../../services/fileService"
import Form from "../../components/Form"

/**
 * @return {JSX.Element}
 */
function ContactForm() {
    return(
        <View> 
            <Form/>
        </View>
    )
}
export default ContactForm
