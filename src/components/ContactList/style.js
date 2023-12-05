import {StyleSheet} from "react-native"
import {buttonStyle} from "../../styles/buttons"
import {deviceWidth, deviceHeight} from "../../styles/sizes"
import {shadows} from "../../styles/shadows"
import {white, black, navajoWhite, offWhite} from "../../styles/colors"

export const styles = StyleSheet.create({
    innerContainer: {
        width: 300,
        height: 100,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    searchBar: {
        ...buttonStyle.fullWidth,
        textAlign: "center",
        borderRadius: 0,
        height: deviceHeight * 0.04,
        backgroundColor: "lightgrey",
        borderWidth: 0,
    },

    topTitle: {
        fontSize: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: offWhite,
        height: deviceHeight * 0.06,
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
        height: deviceHeight * 0.85,
    },
    importButton: {
        width: deviceWidth,
        marginBottom: 100,
        backgroundColor: offWhite,
        height: deviceHeight * 0.05,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        ...shadows.smallUnder,
    },
    spinner: {marginTop: 100},
})

export default styles
