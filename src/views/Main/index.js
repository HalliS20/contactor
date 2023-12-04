import React from "react"
import { ScrollView, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

const Main = ({ navigation: { navigate } }) => (
    <View>
        <Text>Contactor</Text>
        <ScrollView>
            <TouchableOpacity
                style={{ backgroundColor: "red", marginTop: 20, padding: 20 }}
                onPress={() => {
                    navigate("CreateContact")
                }}
            >
                <Text>Hello World</Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
)

export default Main
