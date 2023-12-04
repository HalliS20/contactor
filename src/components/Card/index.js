import {Text, Pressable} from "react-native"
import React, {useEffect, useState} from "react"
import {shadows} from "../../styles/shadows"
import styles from "./styles"

/**
 * @desc Card component
 * @param {object} info - info object
 * @param {string} info.name - title of card
 * @param {string} info.description - description of card
 * @param {string} info.phonenumber - phone number of card
 * @param {string} info.photo - photo of card
 * @return {JSX} - Card component
 */
function Card({info}) {
    const [cardInfo, setCardInfo] = useState(info)

    useEffect(() => {
        setCardInfo(info)
    }, [info])

    return (
        <Pressable
            onPress={() => {
                console.log("Pressed card")
            }}
            style={({pressed}) => [
                {opacity: pressed ? 0.5 : 1},
                styles.innerContainer,
            ]}
        >
            <Text> {cardInfo.name}</Text>
        </Pressable>
    )
}

export default Card
