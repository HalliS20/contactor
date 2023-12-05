import React from "react";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Modal from "../Modal";
import styles from "./styles";

const AddModal = ({
    isOpen,
    closeModal,
    takePhoto,
    selectFromCameraRoll,
}) => (
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}>
        <TouchableOpacity
            onPress={async() => {
                await takePhoto();
                closeModal();
            }}>
            <Entypo style={styles.icon} name="camera" />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={async() => {
                await selectFromCameraRoll();
                closeModal();
            }}>
            <Entypo style={styles.icon} name="image" />
        </TouchableOpacity>
    </Modal>
);

export default AddModal;