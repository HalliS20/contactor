import React, {useState, useEffect} from "react"
import {Controller, useForm} from "react-hook-form"
import {
    View,
    TextInput,
    Text,
    Image,
    Pressable,
    SafeAreaView,
} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {addContact, removeContact} from "../../services/fileService"
import * as imageService from "../../services/imageService"
import styles from "./styles"
import AddModal from "../../components/AddModal"

import { LogBox } from "react-native"

LogBox.ignoreLogs(["Could not find image"])

/**
 *
 * @returns  {JSX.Element}
 */
function ContactForm({route}) {
    const navigation = useNavigation()
    const {control, handleSubmit, setValue, formState: { errors }, setError, clearErrors } = useForm()
    const [photo, setPhoto] = useState("")
    const contact = route.params ? route.params.contact : undefined
    const [isAddModalOpen, setIsAddModalOpen] = useState(false) // modal open/close
    const [nameFocused, setNameFocus] = useState(false) // name input focus
    const [phoneFocused, setPhoneFocus] = useState(false) // name input focus
    const [imageFocused, setImageFocus] = useState(false) // name input focus

    useEffect(() => {
        if (contact) {
            setPhoto(contact.image)
        }
    }, [contact])
    /// /////// for taking photo and selecting from camera roll //////////
    const takePhoto = async() => {
        const photo = await imageService.takePhoto()
        if (photo.length > 0) {
            setPhoto(photo)
            setValue("image", photo)
        }
    }
    const selectFromCameraRoll = async() => {
        const photo = await imageService.selectFromCameraRoll()
        if (photo.length > 0) {
            setPhoto(photo)
        }
    }

    /// ///// submitting form //////////
    const onSubmit = async(content) => {
        console.log("name", content.name)
        if (!content.name && !content.phone) {
            setError("empty", {
                type: "manual",
                message: "Either name or phone must be provided",
            })
        } else {
            clearErrors("empty")
            if (contact) {
                await removeContact(contact.fileName)
            }
            if (photo.length > 0) {
                content.image = photo
            }
            if (!content.name) {
                content.name = content.phone
            }
            addContact(content).then(() => {
                navigation.navigate("Main", {
                    shouldFetchContacts: true,
                })
            })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1},
                        styles.backButton,
                    ]}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backBText}>Back</Text>
                </Pressable>
                {contact && (
                    <Pressable
                        style={({pressed}) => [
                            {opacity: pressed ? 0.5 : 1},
                            styles.deleteButton,
                        ]}
                        onPress={() => {
                            removeContact(contact.fileName)
                            navigation.navigate("Main", {
                                shouldFetchContacts: true,
                            })
                        }}
                    >
                        <Text style={styles.delBText}>Delete</Text>
                    </Pressable>
                )}
            </View>

            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={nameFocused ? styles.focusedInput : styles.input}
                        onBlur={() => {
                            onBlur()
                            setNameFocus(false)
                        }}
                        onFocus={() => setNameFocus(true)}
                        onChangeText={(value) => {
                            onChange(value)
                            if (value) {
                                clearErrors("empty")
                            }
                        }}
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
                        style={
                            phoneFocused ? styles.focusedInput : styles.input
                        }
                        onBlur={() => {
                            onBlur()
                            setPhoneFocus(false)
                        }}
                        onFocus={() => setPhoneFocus(true)}
                        onChangeText={(value) => {
                            onChange(value)
                            if (value) {
                                clearErrors("empty")
                            }
                        }}
                        value={value}
                        placeholder={
                            contact && contact.phone ? contact.phone : "phone"
                        }
                        keyboardType="numeric"
                    />
                )}
                name="phone"
                defaultValue={contact && contact.phone ? contact.phone : ""}
            />
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) =>
                    photo ? (
                        (
                            <View>
                                <Image
                                    source={{uri: photo}}
                                    style={styles.photo}
                                    resizeMode="cover"
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
                                        style={styles.x}
                                    />
                                </Pressable>
                            </View>
                        )
                    ) : (
                        <View>
                            <TextInput
                                style={
                                    imageFocused
                                        ? styles.focusedInput
                                        : styles.input
                                }
                                onBlur={() => {
                                    onBlur()
                                    setImageFocus(false)
                                }}
                                onFocus={() => setImageFocus(true)}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                                placeholder={
                                    contact && contact.image
                                        ? contact.image
                                        : "photo"
                                }
                            />
                            <Pressable
                                style={({pressed}) => [
                                    {opacity: pressed ? 0.5 : 1},
                                    styles.addButton,
                                ]}
                                onPress={() => setIsAddModalOpen(true)}
                            >
                                <Text style={styles.addBText}>Add Image</Text>
                            </Pressable>
                        </View>
                    )
                }
                name="image"
                defaultValue={contact && contact.image ? contact.image : ""}
            />
            {errors.empty && <Text style={styles.errorText}>{errors.empty.message}</Text>}
            <Pressable
                style={({pressed}) => [
                    {opacity: pressed ? 0.5 : 1},
                    styles.submitButton,
                ]}
                title="Submit"
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={styles.submitBText}>Submit</Text>
            </Pressable>
            <AddModal
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                takePhoto={() => takePhoto()}
                selectFromCameraRoll={() => selectFromCameraRoll()}
            />
        </SafeAreaView>
    )
}

export default ContactForm
