import {StyleSheet} from "react-native"
import {deviceHeight, deviceWidth} from "../../styles/sizes"
import {offWhite} from "../../styles/colors"

export default StyleSheet.create({
    main: {
        backgroundColor: offWhite,
    },
    container: {
        // backgroundColor: "transparent",
        height: deviceHeight,
        width: deviceWidth,
        flex: 1,
        bounces: false,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        alignItems: "center",
        textAlign: "center",
        marginTop: "5%",
    },
})
