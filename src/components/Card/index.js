import {Text, Pressable, Image, View} from "react-native"
import React, {useEffect, useState} from "react"
import {shadows} from "../../styles/shadows"
import styles from "./styles"
import {useNavigation} from "@react-navigation/native"
import ContactView from "../../views/ContactView"

/**
 * @desc Card component
 * @param {object} info - info object
 * @param {string} info.name - title of card
 * @param {string} info.description - description of card
 * @param {string} info.phone - phone number of card
 * @param {string} info.photo - photo of card
 * @param {string} info.filename - filename of card
 * @return {JSX} - Card component
 */
function Card({info}) {
    const [cardInfo, setCardInfo] = useState(info)
    const navigation = useNavigation()
    const [imageSource, setImageSource] = useState(
        info.image
            ? {uri: info.image}
            : require("../../resources/default-avatar.png"),
    )

    useEffect(() => {
        setCardInfo(info)
    }, [info])

    const handleError = () => {
        setImageSource(require("../../resources/default-avatar.png"))
    }

    return (
        <Pressable
            onPress={() => {
                navigation.navigate("ContactView", {contact: cardInfo})
            }}
            style={({pressed}) => [
                {opacity: pressed ? 0.5 : 1},
                styles.innerContainer,
            ]}
        >
            <View style={styles.photoView}>
                <Image
                    style={styles.photo}
                    source={imageSource}
                    onError={handleError}
                    defaultSource={require("../../resources/default-avatar.png")}
                />
            </View>
            <Text style={styles.name}> {cardInfo.name}</Text>
        </Pressable>
    )
}

export default Card
