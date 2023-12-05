import {StyleSheet} from "react-native"
import {offWhite} from "../../styles/colors"
import {buttonStyle} from "../../styles/buttons"
import {deviceWidth, deviceHeight} from "../../styles/sizes"

export const styles = StyleSheet.create({
    container: {
        width: deviceWidth * 1,
        height: deviceHeight * 1,
        backgroundColor: offWhite,
        alignItems: "center", // Center items horizontally
        justifyContent: "flex-start", // Center items vertically
    },

    buttonStyleCall: {
        ...buttonStyle.fullWidth,

        marginBottom: 10, // Add some margin at the bottom
        alignSelf: "center", // Center this button horizontally
        backgroundColor: "navy",
        borderColor: "gold",
        borderWidth: 1,
    },

    buttonStyleBack: {
        ...buttonStyle.fullWidth,
        marginBottom: 20, // Add some margin at the bottom
        alignSelf: "center", // Center this button horizontally
        backgroundColor: "white",
        borderColor: "navy",
        borderWidth: 1,
    },

    buttonRow: {
        spaceBetween: 0,
        flexDirection: "row", // Arrange items in a row
        justifyContent: "space-between", // Add space between the items
        width: deviceWidth * 1, // Same width as the call button
        alignSelf: "center", // Center this row horizontally
    },
    buttonStyle: {
        ...buttonStyle.haldWidth,
        width: deviceWidth * 0.4,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 2,
    },

    buttonStyleDelete: {
        ...buttonStyle.haldWidth,
        width: deviceWidth * 0.4,
        backgroundColor: "white",
        borderColor: "red",
        borderWidth: 2,
    },

    textStyle: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 10,
    },

    textStyleCall: {
        color: "gold",
        fontWeight: "bold",
    },

    textStyleDelete: {
        color: "red",
        fontWeight: "bold",
    },
})

export default styles
