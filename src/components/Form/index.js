import React from "react"
import {Button, TextInput, View} from "react-native"
import {Controller, useForm} from "react-hook-form"
import styles from "./styles"
import {addContact} from "../../services/fileService"
import { useNavigation } from "@react-navigation/native"

/**
 *
 * @returns  {JSX.Element}
 */
function Form() {
    const navigate = useNavigation()
    const {control, handleSubmit} = useForm()

    const onSubmit = content => {
        console.log("Submit pressed", content);
        addContact(content);
        navigate.goBack();
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
                    />
                )}
                name="name"
                defaultValue=""
            />
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                    />
                )}
                name="phone"
                defaultValue=""
            />
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                    />
                )}
                name="image"
                defaultValue=""
            />
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}

export default Form
