import {StyleSheet} from "react-native"
import {offWhite} from "../../styles/colors"
import {buttonStyle} from "../../styles/buttons"
import {deviceWidth, deviceHeight} from "../../styles/sizes"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
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
        height: deviceHeight * 0.05,
    },
})

export default styles
