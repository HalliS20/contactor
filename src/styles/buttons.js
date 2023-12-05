import {StyleSheet} from "react-native"
import react from "react"
import {deviceWidth} from "./sizes"
import {shadows} from "./shadows"
import {white, black, offWhite} from "../styles/colors"

const Basic = {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: offWhite,
    borderWidth: 1,
}

export const buttonStyle = StyleSheet.create({
    fullWidth: {
        width: deviceWidth,
        ...Basic,
    },

    mostWidth: {
        width: deviceWidth * 0.97,
        ...Basic,
    },

    haldWidth: {
        width: deviceWidth * 0.5,
        ...Basic,
    },

    mostHalfWidth: {
        width: deviceWidth * 0.47,
        ...Basic,
    },

    thirdWidth: {
        width: deviceWidth * 0.33,
        ...Basic,
    },
    MostThirdWidth: {
        width: deviceWidth * 0.3,
        ...Basic,
    },
    text: {
        fontSize: 20,
        flex: 1,
    },
})
