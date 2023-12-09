import {StyleSheet} from "react-native"
import {deviceWidth, deviceHeight} from "../../styles/sizes"
import {white, black, navajoWhite, offWhite} from "../../styles/colors"

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },

    topTitle: {
        fontSize: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: offWhite,
        // height: deviceHeight * 0.06,
        flexGrow: 0.06,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        textAlign: "center",
        color: "blue",
    },
    button: {
        textAlign: "center",
        borderRadius: 0,
        height: deviceHeight * 0.05,
        justifyContent: "center",
        alignItems: "center",
        width: deviceWidth * 0.1,
    },
    buttonText: {
        fontSize: 30,
        alignItems: "center",
        textAlign: "center",
    },
    header: {
        alignSelf: "stretch",
        width: deviceWidth,
    },
    list: {
        flexGrow: 1,
        marginBottom: 0,
    },
    importButton: {
        width: deviceWidth,
        backgroundColor: offWhite,
        // height: deviceHeight * 0.05,
        height: 50,
        marginTop: -(deviceHeight * 0.09),
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: "black",
        position: "relative",
    },
    spinner: {marginTop: 100},

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
})

export default styles
