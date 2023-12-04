import  React, { useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { addContact, getAllContacts, getOneContract, removeContact } from "../services/fileService";



const userData = {
    name: "John Doe",
    phone: "555-555-5555",
    photo: "https://picsum.photos/200/300",

}
const userData2 = {
    name: "Jane Does",
    phone: "555-555-5555",
    photo: "https://picsum.photos/200/300",

}

const userData3 = {
    name: "My Name",
    phone: "555-555-5555",
    photo: "https://picsum.photos/200/300",

}

const userData4 = {
    name: "apiame",
    phone: "555-555-5555",
    photo: "https://picsum.photos/200/300",

}

const Dummy = () => {
    const[contactInfo, setContacts] = useState('');
        addContact(userData.name, JSON.stringify(userData));
        addContact(userData2.name, JSON.stringify(userData2));
        addContact(userData3.name, JSON.stringify(userData3));
        addContact(userData4.name, JSON.stringify(userData4));

        getAllContacts().then(contacts => {
            setContacts(contacts)
            
        })
    

        
        return (
            <View>
                <Text> Hollo Welt </Text>
                    <Text> {contactInfo} </Text>
                    

            </View>
        )
        
    }
    
export default Dummy;

