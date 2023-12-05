import React, {useState} from "react"
import {Controller, useForm} from "react-hook-form"
import {View, TextInput, Button} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {addContact, removeContact} from "../../services/fileService"
import styles from "./styles"

/**
 *
 * @returns  {JSX.Element}
 */
function ContactForm({route}) {
    const navigation = useNavigation()
    const {control, handleSubmit} = useForm()
    const contact = route.params ? route.params.contact : undefined

    const onSubmit = (content) => {
        console.log("Submit pressed", content)
        if (contact) {
            console.log(contact, "is being removed")
            removeContact(contact.fileName)
        }
        addContact(content)
        navigation.navigate("Main")
    }

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                        placeholder={
                            contact && contact.name ? contact.name : "Name"
                        }
                    />
                )}
                name="name"
                defaultValue={contact && contact.name ? contact.name : ""}
            />
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                        placeholder={
                            contact && contact.phone ? contact.phone : "phone"
                        }
                    />
                )}
                name="phone"
                defaultValue={contact && contact.phone ? contact.phone : ""}
            />
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                        placeholder={
                            contact && contact.image ? contact.image : "photo"
                        }
                    />
                )}
                name="image"
                defaultValue={contact && contact.image ? contact.image : ""}
            />
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}

export default ContactForm
