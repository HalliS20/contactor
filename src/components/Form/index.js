import React from "react"
import {Button, TextInput, View} from "react-native"
import {Controller, useForm} from "react-hook-form"
import styles from "./styles"

/**
 *
 * @returns  {JSX.Element}
 */
function Form() {
    const {control, handleSubmit} = useForm()

    const onSubmit = (data) => console.log("Submit pressed", data)

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
                name="email"
                defaultValue=""
            />
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}

export default Form
