import React, {useState} from "react"
import {View, Text, Button, Linking, Image, Pressable} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {removeContact} from "../../services/fileService"
import {deviceWidth} from "../../styles/sizes"
import styles from "./styles"

function ContactView({route}) {
    const {contact} = route.params
    const navigation = useNavigation()
    const [imageFound, setImageFound] = useState(true)

    const handleCall = () => {
        Linking.openURL(`tel:${contact.phone}`)
    }
    {console.log(contact.image)}
    return (
        <View style={styles.container}>
            {contact.image && imageFound && (
                <Image
                    style={{width: deviceWidth * 1, height: 200}}
                    source={{uri: contact.image}}
                    onError={() => setImageFound(false)}
                />
            )}

            <Text style={styles.textStyle}>
            Name: {contact.name}</Text>
            <Text style={styles.textStyle}>
            Phone: {contact.phone}</Text>


            <Pressable 
            style={styles.buttonStyleCall}
            onPress={handleCall}>
            <Text style={styles.textStyleCall}>Call me</Text>
             </Pressable>
            <View style={styles.buttonRow}>
             <Pressable
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('ContactForm', {contact})}>
                <Text>Edit me?</Text>
            </Pressable>
            <Pressable                
            style={styles.buttonStyleDelete}
            onPress={() => {
                    removeContact(contact.fileName)
                    navigation.goBack()
                }}>
                    <Text
                    style={styles.textStyleDelete}
                    >Delete Me!!!</Text>
            </Pressable>
            </View>
            
            <Pressable 
            style={styles.buttonStyleBack}
            onPress={() => navigation.goBack()}>
                <Text>Back to Main</Text>
            </Pressable>        
            </View>
    )
}

export default ContactView
