import React, {useState} from "react"
import {Controller, useForm} from "react-hook-form"
import {
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Text,
    Image,
    Pressable,
} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {addContact, removeContact} from "../../services/fileService"
import * as imageService from "../../services/imageService"
import styles from "./styles"
import AddModal from "../../components/AddModal"

/**
 *
 * @returns  {JSX.Element}
 */
function ContactForm({route}) {
    const navigation = useNavigation()
    const {control, handleSubmit, setValue} = useForm()
    const [photo, setPhoto] = useState("")
    const contact = route.params ? route.params.contact : undefined
    // A boolean flag to indicate whether the modal to add an image is open or not
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const takePhoto = async () => {
        const photo = await imageService.takePhoto()
        if (photo.length > 0) {
            setPhoto(photo)
            setValue("image", photo)
        }
    }
    const selectFromCameraRoll = async () => {
        const photo = await imageService.selectFromCameraRoll()
        if (photo.length > 0) {
            setPhoto(photo)
        }
    }

    const onSubmit = async (content) => {
        if (contact) {
            await removeContact(contact.fileName)
        }
        if (photo.length > 0) {
            content.image = photo
        }
        addContact(content).then(() => {
            console.log("Submit pressed", content)
            navigation.navigate("Main")
        })
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
                render={({field: {onChange, onBlur, value}}) =>
                    photo ? (
                        (console.log("Value: ", value),
                        (
                            <View>
                                <Image
                                    source={{uri: photo}}
                                    style={{width: 100, height: 100}}
                                />
                                <Pressable
                                    style={{
                                        position: "absolute",
                                        right: 0,
                                        top: 0,
                                    }}
                                    onPress={() => {
                                        setPhoto("")
                                        onChange("") // Clear the value of the form field "image"
                                    }}
                                >
                                    <Image
                                        source={require("../../resources/images/x.jpg")}
                                        style={{width: 20, height: 20}}
                                    />
                                </Pressable>
                            </View>
                        ))
                    ) : (
                        <View>
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                                placeholder={
                                    contact && contact.image
                                        ? contact.image
                                        : "photo"
                                }
                            />
                            <TouchableOpacity
                                onPress={() => setIsAddModalOpen(true)}
                            >
                                <Text>Add Image</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
                name="image"
                defaultValue={contact && contact.image ? contact.image : ""}
            />
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            <AddModal
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                takePhoto={() => takePhoto()}
                selectFromCameraRoll={() => selectFromCameraRoll()}
            />
        </View>
    )
}

export default ContactForm
