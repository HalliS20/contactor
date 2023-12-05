import React from "react"
import {Button, TextInput, View} from "react-native"
import {Controller, useForm} from "react-hook-form"
import styles from "./styles"
import {addContact} from "../../services/fileService"
import {useNavigation} from "@react-navigation/native"

/**
 *
 * @returns  {JSX.Element}
 */
function Form(contact) {
    const navigate = useNavigation()
    const {control, handleSubmit} = useForm()

    const onSubmit = (content) => {
        console.log("Submit pressed", content)
        addContact(content)
        navigate.goBack()
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

export default Form
