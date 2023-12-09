import {StyleSheet} from "react-native"
import {offWhite} from "../../styles/colors"
import {deviceWidth} from "../../styles/sizes"

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: offWhite,
        alignItems: "center",
    },

    header: {
        paddingTop: 10,
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

    addButton: {
        alignContent: "flex-start",
        marginBottom: 10,
        paddingLeft: 20,
        justifyContent: "flex-start",
        width: deviceWidth,
    },
    addBText: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "left",
    },

    photo: {
        margin: 5,
        width: deviceWidth,
        height: 200,
    },

    input: {
        marginBottom: 10,
        padding: 12,
        width: deviceWidth * 0.95,
        marginHorizontal: deviceWidth * 0.025,
        height: 40,
        backgroundColor: "#ebebf0",
        borderRadius: 15,
    },

    focusedInput: {
        height: 40,
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 10,
        padding: 8,
        width: deviceWidth * 0.95,
        marginHorizontal: deviceWidth * 0.025,
        height: 40,
        backgroundColor: "#d7d7db",
    },

    submitButton: {
        alignSelf: "center",
        height: 50,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 4,
        padding: 10,
        width: deviceWidth * 0.95,
    },

    submitBText: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 20,
    },

    buttonBar: {
        marginHorizontal: deviceWidth * 0,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    errorText: {
        color: "red",
        marginBottom: 10,
    },
    x: {
        width: 20,
        height: 20,
        marginRight: 10,
        marginTop: 10,
    },

    ex: {
        position: "absolute",
        right: 0,
        top: 0,
    },
})
