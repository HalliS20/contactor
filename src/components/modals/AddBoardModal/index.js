import React, { useState } from "react"
import {
    TextInput,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
} from "react-native"
import Modal from "../../Modal"
import styles from "./styles"
import { shadows } from "../../../styles/shadows"

const AddBoardModal = ({ isOpen, closeModal, onModalClose }) => {
    /// Textinputs and related states///
    const initialState = { name: "", description: "", photo: "" }
    const [form, setForm] = useState(initialState)
    const handleChange = (field, value) => {
        setForm(prevState => ({ ...prevState, [field]: value }))
    }
    const [error, setError] = useState("")

    /// Styles ///
    const titleStyle = [styles.title, shadows.smallShadow]
    const modalStyle = [styles.modal, shadows.smallShadow]
    const buttonStyle = [styles.Button, shadows.smallShadow]
    const inputStyle = [styles.input, shadows.smallShadow]

    /// Save ///
    /// Checks input validity and closes modal if they're correct, returns textinputs///
    const handleCloseReturn = () => {
        if (!form.name.trim() || !form.photo.trim()) {
            setError("Fill in name and photo")
            return
        }
        onModalClose(form.name, form.description, form.photo)
        closeModal()
        setForm(initialState)
        setError("")
    }
    /// Other closes (like clicking out of modal) ///
    const handleClose = () => {
        closeModal()
        setForm(initialState)
        setError("")
    }
    return (
        <Modal isOpen={isOpen} closeModal={handleClose}>
            <SafeAreaView style={titleStyle}>
                <Text style={styles.titleText}>New Board</Text>
            </SafeAreaView>
            <SafeAreaView style={modalStyle}>
                <View style={styles.insider}>
                    {/* Name */}
                    <TextInput
                        style={inputStyle}
                        onChangeText={(text) => handleChange("name", text)}
                        value={form.name}
                        placeholder="Name"
                        placeholderTextColor={"grey"}
                    />
                    {/* Description */}
                    <TextInput
                        style={inputStyle}
                        onChangeText={(text) => handleChange("description", text)}
                        value={form.description}
                        placeholder="Description(optional)"
                        placeholderTextColor={"grey"}
                    />
                    {/* Thumbnail Photo */}
                    <TextInput
                        style={inputStyle}
                        onChangeText={(text) => handleChange("photo", text)}
                        value={form.photo}
                        placeholder="Photo"
                        placeholderTextColor={"grey"}
                    />
                    {/* Save */}
                    <TouchableOpacity style={buttonStyle} activeOpacity={0.5} onPress= {handleCloseReturn}>
                        <Text>Save</Text>
                    </TouchableOpacity>
                    {/* Error message */}
                    {error && <Text style={{ color: "red" }}>{error}</Text>}
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default AddBoardModal
