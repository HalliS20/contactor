import {StyleSheet} from "react-native"
import {deviceWidth} from "../../styles/sizes"
import {shadows} from "../../styles/shadows"
import {white, black, navajoWhite, offWhite} from "../../styles/colors"

const styles = StyleSheet.create({
    innerContainer: {
        width: deviceWidth * 0.95,
        height: 70,
        alignSelf: "center",
        borderRadius: 35,
        backgroundColor: offWhite,
        justifyContent: "flex-start",
        flexDirection: "row",
        margin: 1,
        marginTop: 10,
        paddingRight: 7,
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        marginBottom: 2,
        borderWidth: 1,
        borderColor: "blue",

        // ...shadows.smallUnder,
    },
    photo: {
        margin: 5,
        height: 60,
        aspectRatio: 1,
        borderRadius: 50,
        overflow: "hidden",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
    },
})

export default styles
