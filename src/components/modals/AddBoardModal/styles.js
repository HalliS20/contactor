import { StyleSheet } from "react-native"
import { deviceWidth } from "../../../styles/sizes"

export default StyleSheet.create({
    input: {
        height: 40,
        marginBottom: 12,
        borderWidth: 1,
        textAlign: "left",
        width: "100%",
        padding: 10,
        borderRadius: 4,
    },
    modal: {
        width: Math.min(deviceWidth * 0.98, 400),
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 15,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            width: 0, // These can't both be 0
            height: 1, // i.e. the shadow has to be offset in some way
        },
    },

    Button: {
        width: Math.min(deviceWidth * 0.5, 150),
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        alignSelf: "flex-start",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            width: 0, // These can't both be 0
            height: 1, // i.e. the shadow has to be offset in some way
        },
    },
    title: {
        marginTop: 15,
        width: Math.min(deviceWidth * 0.98, 400),
        backgroundColor: "white",
        borderRadius: 8,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            width: 0, // These can't both be 0
            height: 1, // i.e. the shadow has to be offset in some way
        },
    },

    titleText: {
        padding: 10,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    insider: {
        padding: 20,
        width: "100%",
    },
})
