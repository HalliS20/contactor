import React from "react"
import { ScrollView, Text, View } from "react-native"
import Dummy from "../../dummies/dummyData";



const Main = ({ navigation: { navigate } }) => {
    return (
        <View>
            <Text>Contactor</Text>
            <ScrollView>
                <Dummy />
              
            </ScrollView>
        </View>
    );
};

export default Main;
