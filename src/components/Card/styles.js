import { StyleSheet } from "react-native"
import React from "react"
import { white, black } from "../../styles/colors"

const styles = StyleSheet.create({
    texCe: {
        flex: 1,
    },
    descButt: {
        flex: 1,
    },

    innerContainer: {
        justifyContent: "space-between",
        backgroundColor: white,
        flexDirection: "column",
        height: 76,
        margin: 1, // Adjust this value to change the width of the border
        borderRadius: 0,
        paddingBottom: 0,
        paddingLeft: 7,
        paddingRight: 7,
        paddingTop: 7,
        margin: 4,
    },

    checkboxContainer: {
        borderWidth: 1,
        borderColor: black,
        borderRadius: 5,
    },
    checkboxText: {
        marginLeft: 8,
    },
    description: {
        color: "grey",
    },
})

export default styles
