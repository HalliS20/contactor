import {StyleSheet} from "react-native"
import {deviceWidth} from "../../styles/sizes"
import {shadows} from "../../styles/shadows"
import {white, black, navajoWhite, offWhite} from "../../styles/colors"

const styles = StyleSheet.create({
    innerContainer: {
        backgroundColor: offWhite,
        justifyContent: "flex-start",
        flexDirection: "row",
        height: 60,
        margin: 1, // Adjust this value to change the width of the border
        paddingRight: 7,
        fontSize: 20,
        fontWeight: "bold",
        width: deviceWidth,
        alignItems: "center",
        marginBottom: 2,
        ...shadows.smallUnder,
    },
    photo: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 5,
        marginRight: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
    },
})

export default styles
