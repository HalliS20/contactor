import React from "react"
import { Controller, useForm } from "react-hook-form"
import { ScrollView, Text, View, TextInput, Button } from "react-native"
import styles from "./styles"

/**
 *
 * @return {YourForm}
 */
function YourForm() {
    const { control, handleSubmit } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                    />
                )}
                name="email"
                rules={{
                    required: "You must enter your email",
                    pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Enter a valid email address",
                    },
                }}
                defaultValue=""
            />
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}

export default YourForm
