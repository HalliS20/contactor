import { StyleSheet } from "react-native"
import { deviceHeight, deviceWidth } from "../../styles/sizes"

export default StyleSheet.create({
    modal: {
        alignItems: "center",
        justifyContent: "flex-start",
        alignSelf: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: deviceWidth,
        height: deviceHeight,
        flexGrow: 1,
        margin: 0,
        marginTop: deviceHeight * 0.2,
    },
    body: {
        alignItems: "center",
        justifyContent: "flex-start",
    },
    empty: {
        backgroundColor: "white",
        width: deviceWidth,
    },
})
