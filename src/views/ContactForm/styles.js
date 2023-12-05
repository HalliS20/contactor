import {StyleSheet} from "react-native"
import {offWhite} from "../../styles/colors"
import {deviceWidth} from "../../styles/sizes"

export default styles = StyleSheet.create({
    header: {
        alignSelf: "stretch",
        width: deviceWidth,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    backButton: {
        alignContent: "flex-start",
        marginBottom: 10,
        paddingLeft: 20,
        justifyContent: "flex-start",
        width: deviceWidth * 0.49,
    },
    backBText: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 20,
    },

    deleteButton: {
        alignContent: "flex-end",
        marginBottom: 10,
        paddingRight: 20,
        justifyContent: "flex-end",
        width: deviceWidth * 0.49,
    },
    delBText: {
        color: "red",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "right",
    },

    container: {
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        padding: 8,
    },
    errorText: {
        color: "red",
        marginBottom: 10,
    },
})
