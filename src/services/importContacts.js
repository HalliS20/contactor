import * as Contacts from "expo-contacts"
import {addContact} from "./fileService"

async function importContacts() {
    try {
        const {status} = await Contacts.requestPermissionsAsync()
        if (status === "granted") {
            const {data} = await Contacts.getContactsAsync({
                fields: [
                    Contacts.Fields.FirstName,
                    Contacts.Fields.LastName,
                    Contacts.Fields.PhoneNumbers,
                ],
            })

            if (data.length > 0) {
                await Promise.all(
                    data.map(async ({firstName, lastName, phoneNumbers}) => {
                        let name = firstName
                        if (name === undefined) {
                            name = "Unknown"
                        }
                        if (lastName !== undefined) {
                            name = name + " " + lastName
                        }
                        let phone =
                            phoneNumbers && phoneNumbers[0]
                                ? phoneNumbers[0].digits
                                : null
                        if (phone === undefined) {
                            phone = ""
                        }
                        if (name === "unknown") {
                            name = phone
                        }
                        const contactInfo = {
                            name: name,
                            phone: phone,
                            image: "https://www.nbmchealth.com/wp-content/uploads/2018/05/765-default-avatar-300x300.png",
                        }

                        // setIsLoading(true)
                        await addContact(contactInfo)
                        // setIsLoading(false)
                    }),
                )
            }
        }
    } catch (error) {
        console.error("An error occurred while importing contacts:", error)
    }
}

export {importContacts}
