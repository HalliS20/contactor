import React, {useState} from "react"
import {View, Text, Linking, Image, Pressable, SafeAreaView} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {deviceWidth} from "../../styles/sizes"
import styles from "./styles"

function ContactView({route}) {
    const {contact} = route.params
    const navigation = useNavigation()
    const [imageFound, setImageFound] = useState(true)

    const handleCall = () => {
        Linking.openURL(`tel:${contact.phone}`)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1},
                        styles.backButton,
                    ]}
                    onPress={() => navigation.navigate("Main")}
                >
                    <Text style={styles.backBText}>Back</Text>
                </Pressable>
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1},
                        styles.editButton,
                    ]}
                    onPress={() =>
                        navigation.navigate("Contact Form", {contact})
                    }
                >
                    <Text style={styles.edBText}>Edit</Text>
                </Pressable>
            </View>
            {contact.image && imageFound ? (
                <Image
                    style={styles.photo}
                    source={{uri: contact.image}}
                    onError={() => setImageFound(false)}
                />
            ) : (
                <Image
                    style={{width: deviceWidth * 1, height: 200}}
                    source={require("../../resources/default-avatar.png")}
                />
            )}

            <Text style={styles.textStyle}>{contact.name}</Text>
            <Text style={styles.textStyle}>{contact.phone}</Text>

            <Pressable
                style={({pressed}) => [
                    {opacity: pressed ? 0.5 : 1},
                    styles.callButton,
                ]}
                onPress={handleCall}
            >
                <Text style={styles.clBText}>Call me</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default ContactView
