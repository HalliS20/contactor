import React, {useState, useCallback, useEffect} from "react"
import {View} from "react-native"
import {getAllContacts, cleanDirectory} from "../../services/fileService"
import ContactList from "../../components/ContactList"
import {useFocusEffect} from "@react-navigation/native"
import styles from "./styles"

const Main = ({navigation: {navigate}, route}) => {
    route.params = route.params || {shouldFetchContacts: false}

    const [contacts, setContacts] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [shouldFetchContacts, setShouldFetchContacts] = useState(
        route.params?.shouldFetchContacts || false,
    )
    const [firstLoad, setFirstLoad] = useState(true)

    const fetchContacts = useCallback(() => {
        ////////// For deletin all data in development //////////
        const clean = false // change to true to clean the directory

        if (clean === true) {
            cleanDirectory()
        }

        setShouldFetchContacts(route.params?.shouldFetchContacts || false) //set Fetch state to be correct

        ////////// For adding contacts //////////
        if (refresh || shouldFetchContacts || firstLoad) {
            getAllContacts().then((contacts) => {
                setContacts(contacts)
                setRefresh(false) // Reset refresh
                setShouldFetchContacts(false) // Reset shouldFetc
                setFirstLoad(false)
            })
        }
    }, [refresh, shouldFetchContacts])

    useEffect(() => {
        fetchContacts()
    }, [])

    useFocusEffect(
        useCallback(() => {
            fetchContacts()
        }, [fetchContacts]),
    )

    return (
        <View style={styles.main}>
            <ContactList
                contacts={contacts}
                refresh={refresh}
                setRefresh={setRefresh}
            />
        </View>
    )
}

export default Main
