import React from "react"
import NativeModal from "react-native-modal"
import { View } from "react-native"
import styles from "./styles"

const Modal = ({ isOpen, closeModal, children }) => (
    <NativeModal
        isVisible={isOpen}
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}
        style={styles.modal}
        animationOut={"slideOutDown"}
        animationOutTiming={1100}
        animationIn={"slideInUp"}
        animationInTiming={830}
    >
        <View style={styles.body}>
            {children}
        </View>
        <View style={styles.empty}></View>
    </NativeModal>
)

export default Modal
