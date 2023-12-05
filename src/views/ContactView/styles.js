import {StyleSheet} from "react-native"
import {offWhite} from "../../styles/colors"
import {buttonStyle} from "../../styles/buttons"
import {deviceWidth, deviceHeight} from "../../styles/sizes"

export const styles = StyleSheet.create({
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

    editButton: {
        alignContent: "flex-end",
        marginBottom: 10,
        paddingRight: 20,
        justifyContent: "flex-end",
        width: deviceWidth * 0.49,
    },
    edBText: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "right",
    },

    callButton: {
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
        width: deviceWidth * 0.95,
        height: 50,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 4,
    },

    clBText: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 20,
    },

    container: {
        width: deviceWidth * 1,
        height: deviceHeight * 1,
        backgroundColor: offWhite,
        alignItems: "center", // Center items horizontally
        justifyContent: "flex-start", // Center items vertically
    },
    textStyle: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        marginTop: 10,
    },
})

export default styles
