import {StyleSheet} from "react-native"
import react from "react"

export const shadows = StyleSheet.create({
    smallTop: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.25,
    },
    smallUnder: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
    },
    mediumUnder: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.25,
    },
})
