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
function Card({info, refresh}) {
    const [cardInfo, setCardInfo] = useState(info)
    const navigation = useNavigation()
    const [imageFound, setImageFound] = useState(true)

    useEffect(() => {
        if (refresh) {
            setCardInfo(info)
        }
    }, [refresh])

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
                {cardInfo.image && imageFound ? (
                    <Image
                        style={styles.photo}
                        source={{uri: cardInfo.image}}
                        onError={() => setImageFound(false)}
                    />
                ) : (
                    <Image
                        style={styles.photo}
                        source={require("../../resources/default-avatar.png")}
                    />
                )}
            </View>
            <Text style={styles.name}> {cardInfo.name}</Text>
        </Pressable>
    )
}

export default Card
