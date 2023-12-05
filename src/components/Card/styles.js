import {StyleSheet} from "react-native"
import {deviceWidth} from "../../styles/sizes"

const styles = StyleSheet.create({
    innerContainer: {
        justifyContent: "flex-start",
        flexDirection: "row",
        height: 60,
        margin: 1, // Adjust this value to change the width of the border
        borderRadius: 5,

        paddingRight: 7,
        margin: 4,
        backgroundColor: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        width: deviceWidth * 0.96,
        alignItems: "center",
    },
    photo: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 5,
        marginRight: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
    },
})

export default styles
